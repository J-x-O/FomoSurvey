import {type Readable, type Writable, writable} from 'svelte/store';
import {waitForCondition} from "$lib/utility";

let recordedChunks: Blob[] = [];
let mediaRecorder: MediaRecorder|null = null;

export function getStream(): Readable<MediaStream|null> { return stream; }
let stream:  Writable<MediaStream | null> = writable(null);
let accessibleStream: MediaStream | null = null;

export function getIsRecording(): Readable<boolean> { return isRecording; }
let isRecording: Writable<boolean> = writable(false);

export async function requestCameraAccess() {
    accessibleStream = await navigator.mediaDevices.getUserMedia({ video: true });
    stream.set(accessibleStream);
    return accessibleStream;
}

export function startRecording() {
    if (accessibleStream === null) throw new Error("Stream is not initialized");
    mediaRecorder = new MediaRecorder(accessibleStream, { mimeType: "video/webm" });
    recordedChunks = [];
    mediaRecorder.ondataavailable = event => recordedChunks.push(event.data)
    mediaRecorder.start();
    isRecording.set(true);
}

export async function finalizeRecording() {
    if (mediaRecorder === null) throw new Error("MediaRecorder is not initialized");
    mediaRecorder.stop();
    isRecording.set(false);
    await waitForCondition(() => recordedChunks.length > 0, 5000, 1000);
    return new Blob(recordedChunks, { type: "video/webm" });
}
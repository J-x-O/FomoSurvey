import {type Readable, type Writable, writable} from 'svelte/store';

let recordedChunks: Blob[] = [];
let mediaRecorder: MediaRecorder|null = null;

export function getStream(): Readable<MediaStream|null> { return stream; }
let stream:  Writable<MediaStream | null> = writable(null);

export function getIsRecording(): Readable<boolean> { return isRecording; }
let isRecording: Writable<boolean> = writable(false);

export async function requestCameraAccess() {
    let result = await navigator.mediaDevices.getUserMedia({ video: true });
    stream.set(result);
    mediaRecorder = new MediaRecorder(result, { mimeType: "video/webm" });
    mediaRecorder.ondataavailable = handleData;
    return result;
}

function handleData(event: BlobEvent) {
    if (event.data.size > 0) {
        recordedChunks.push(event.data);
    }
}

export function startRecording() {
    if (mediaRecorder === null) throw new Error("MediaRecorder is not initialized");
    recordedChunks = [];
    mediaRecorder.start();
    isRecording.set(true);
}
export function pauseRecording() {
    if (mediaRecorder === null) throw new Error("MediaRecorder is not initialized");
    mediaRecorder.pause();
    isRecording.set(false);

}
export function finalizeRecording() {
    if (mediaRecorder === null) throw new Error("MediaRecorder is not initialized");
    mediaRecorder.stop();
    isRecording.set(false);
    return new Blob(recordedChunks, { type: "video/webm" });
}
import {type Writable, writable} from 'svelte/store';

export let stream:  Writable<MediaStream | null> = writable(null);

export async function requestCameraAccess() {
    let result = await navigator.mediaDevices.getUserMedia({ video: true });
    stream.set(result);
    return result;
}
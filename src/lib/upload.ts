export function uploadVideoBlob(participant: string, filename: string, video: Blob): Promise<Response> {
    const formData = new FormData();
    formData.append("participant", participant);
    formData.append("filename", filename);
    formData.append("video", video);
    return fetch("/api/recording", {
        method: "POST",
        body: formData
    });
}

export function uploadResults(participant: string, dict: Record<string, any>): Promise<Response> {
    const formData = new FormData();
    formData.append("participant", participant);
    formData.append("dict", JSON.stringify(dict, null, 2));
    return fetch("/api/result", {
        method: "POST",
        body: formData
    });
}
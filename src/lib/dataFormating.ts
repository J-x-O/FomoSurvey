export interface VideoReaction {
    videoID: string;
    videoFileName: string;
    valance: number,
    arousal: number,
    intensity: number,
    category: string,
}

export interface Demographic {
    age: number
    gender: string
}

export interface Bias {
    fear: number
    anger: number
    disgust: number
    happiness: number
    sadness: number
    surprise: number
}
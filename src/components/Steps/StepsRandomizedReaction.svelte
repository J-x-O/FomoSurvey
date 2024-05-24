<script lang="ts">
    import StepVideoReaction from "./StepVideoReaction.svelte";
    import {_} from "$lib/language";

    export let allSteps: StepVideoReaction[] = [];

    let allElements: { [key: string]: string[] } = {
        "Anger": ["0_1310.mp4", "1_0218.mp4", "2_0681.mp4", "5_0733.mp4", "7_0414.mp4",
            "8_0971.mp4", "10_1844.mp4", "12_0595.mp4", "13_1026.mp4", "15_1260.mp4"],
        "Disgust": ["0_0187.mp4", "1_0235.mp4", "2_0713.mp4", "3_0876.mp4", "4_0929.mp4",
            "5_1044.mp4", "7_1425.mp4", "8_1441.mp4", "10_1907.mp4", "11_1940.mp4"],
        "Fear": ["0_1375.mp4", "1_1422.mp4", "2_0395.mp4", "3_0025.mp4", "4_1964.mp4",
            "5_0137.mp4", "6_0687.mp4", "7_1779.mp4", "8_0190.mp4", "9_1172.mp4"],
        "Joy": ["0_0688.mp4", "1_1032.mp4", "2_1034.mp4", "3_2034.mp4", "4_1938.mp4",
            "5_0380.mp4", "6_1953.mp4", "7_0593.mp4", "8_1712.mp4", "9_1363.mp4"],
        "Sadness": ["0_1959.mp4", "2_1259.mp4", "3_0975.mp4", "6_0059.mp4", "8_0226.mp4",
            "9_1164.mp4", "10_0611.mp4", "12_1587.mp4", "13_0673.mp4", "15_1485.mp4"],
        "Surprise": ["0_0509.mp4", "1_0976.mp4", "2_1277.mp4", "3_1433.mp4", "4_1436.mp4",
            "5_0468.mp4", "6_0602.mp4", "7_1002.mp4", "9_1899.mp4", "10_1234.mp4"]
    }

    interface Video {
        videoPath: string;
        id: string;
    }

    let twoRandomEach: Video[] = pickRandom();

    function pickRandom() {
        let twoRandomEach: Video[] = [];
        for (let key in allElements) {
            twoRandomEach.push(popRandom(key));
            // twoRandomEach.push(popRandom(key));
            // twoRandomEach.push(popRandom(key));
        }
        shuffleArray(twoRandomEach)
        return twoRandomEach;
    }

    function popRandom(key: string): Video {
        let randomIndex = Math.floor(Math.random() * allElements[key].length);
        let pickedVideo = allElements[key].splice(randomIndex, 1)[0];
        return {
            videoPath: "videos/" + key + "/" + pickedVideo,
            id: key + "_" + pickedVideo.split(".")[0]
        };
    }

    function shuffleArray(array: Array<any>) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
</script>

{#each twoRandomEach as video, index}
    <StepVideoReaction header={$_("reaction.title") + " " + (index + 1) + "/" + twoRandomEach.length}
                       id={video.id} videoPath={video.videoPath} bind:this={allSteps[index]}/>
{/each}

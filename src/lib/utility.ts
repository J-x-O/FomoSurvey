export async function waitForCondition(evaluate: () => boolean, timeout: number = -1,interval: number = 1000) {
    while (true) {
        if (evaluate()) return Promise.resolve();
        await new Promise(resolve => setTimeout(resolve, 1000));
        if (timeout > 0) {
            timeout -= interval;
            if (timeout <= 0) return Promise.reject();
        }
    }
}
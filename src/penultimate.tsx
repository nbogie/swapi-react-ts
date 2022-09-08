
export function penultimate<T>(arr: T[]): T {
    if (arr.length < 2) {
        throw new Error("penultimate() expected array of at least two elements but got " + JSON.stringify(arr));
    }
    return arr[arr.length - 2];
}


/**
 * Merges two sorted arrays into one sorted array
 * 
 * @param {any[]} left
 * @param {any[]} right
 * @returns {any[]} Merged array that is sorted
 * 
 * @timeComplexity O(n)
 * @spaceComplexity O()
 */
function merge(left: any[], right: any[]): any[] {

    let result: any[] = [];
    let leftIndex: number = 0;
    let rightIndex: number = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex++]);
        } else {
            result.push(right[rightIndex++]);
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

/**
 * Sorts an array
 * 
 * @param {Array} A The array to sort
 * @return {Array} The sorted array
 * 
 * @timeComplexity O(n log n)
 * @spaceComplexity O(n)
 */
export function mergeSort(A: any[]): any[] {

    if (A.length < 2) {
        return A;
    }

    let mid = Math.floor(A.length / 2);
    let left = A.slice(0, mid);
    let right = A.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

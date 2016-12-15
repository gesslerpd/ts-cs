"use strict";
/**
 * Swap two different indicies in an array
 *
 * @param {Array} A The array
 * @param {number} index1 The first index
 * @param {number} index2 The second index
 */
function swap(A, index1, index2) {
    var temp = A[index1];
    A[index1] = A[index2];
    A[index2] = temp;
}
/**
 *
 */
function partition(A, start, end) {
    var pivot = A[Math.floor((start + end) / 2)], i = start, j = end;
    while (i <= j) {
        while (A[i] < pivot) {
            i++;
        }
        while (A[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(A, i, j);
            i++;
            j--;
        }
    }
    return i;
}
/**
 * Sorts an array
 *
 * @param {Array} A The array to sort
 * @param {number} start The sorting start index
 * @param {number} end The sorting end index
 *
 * @timeComplexity { avg: O(n log n), worst: O(n^2) }
 * @spaceComplexity O(n)
 */
function quickSort(A, start, end) {
    start = start || 0;
    end = end || (A.length - 1);
    var index;
    if (A.length > 1) {
        index = partition(A, start, end);
        if (start < index - 1) {
            quickSort(A, start, index - 1);
        }
        if (index < end) {
            quickSort(A, index, end);
        }
    }
    return A;
}
exports.quickSort = quickSort;

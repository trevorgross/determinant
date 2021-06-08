/**
 *
 * Compute determinants of square matrices using cofactor expansion
 *
 */

(function(window) {
    'use strict';
    /** 
     * Computes the determinant of an n×n matrix.
     * Takes an array of arrays. Each subarray is a row.
     * @param {Array[]} mtx - array of arrays representing an n×n matrix
     * @param {Array[][]} - an array of integers representing a matrix row
     * @returns {Number|undefined} Determinant of matrix, undefined if matrix is non-square
     */
    var determinant = function(mtx) {
        try {
            if (!isSquare(mtx)) {
                throw mtx;
            }
            if (mtx.length == 2) {
                return (mtx[0][0]*mtx[1][1])-(mtx[0][1]*mtx[1][0]);
            }
            var detA = 0;
            var i = 0;
            var ml = mtx.length;
            var a, c;
            for(i=0;i<ml;i++) {
                a = mtx[0][i];
                c = Math.pow(-1, i) * determinant(minor(mtx, 0, i));
                detA += a * c;
            }
            return detA;
        }
        catch (e) {
            printErr(e);
        }
    };

    /** 
     * Print a formatted error message to the console.
     * @param {Array[]} m - array of arrays representing an n×n matrix
     * @param {Array[][]} - an array of integers representing a matrix row
     */
    var printErr = function(m) {
        var x = "Given matrix is not square, aborting. Matrix was:\n";
        var l = m.length;
        var i = 0;
        for (;i<l;i++) {
            x += (JSON.stringify(m[i])+"\n");
        }
        console.warn(x);
    };

    /**
     * Checks if a matrix is n×n (square).
     * @param {Array[]} m - an array of arrays representing a matrix
     * @param {Array[][]} - an array of integers representing a matrix row
     * @returns {Boolean} True if matrix is n×n
     */
    var isSquare = function(m) {
        var l = m.length;
        var i = 0;
        for (;i<l;i++) {
            if (m[i].length != l) {
                return false;
            }
        }
        return true;
    };

    /**
     * Creates a minor matrix A(ij) from m.
     * @param {Array[]} m - an array of arrays representing a matrix
     * @param {Array[][]} - an array of integers representing a matrix row
     * @param {Number} i - the ith (row) element of m
     * @param {Number} j - the jth (column) element of m
     * @returns {Array[]} Minor matrix m(ij)
     */
    var minor = function(m,i,j) {
        var minorMtx = [];
        var x = 0;
        var ml = m.length;
        var row, k, rl;
        for (;x<ml;x++) {
            if (x != i) {
                row = [];
                k = 0;
                rl = m[x].length;
                for (;k<rl;k++) {
                    if (k != j)
                        row.push(m[x][k]);
                }
                minorMtx.push(row);
            }
        }
        return minorMtx;
    };

    window.determinant = determinant;

}(window));


/*
// -292371
var m1 = [
    [10,11,12, 1, 8],
    [ 8,23, 0, 2, 8],
    [ 2, 3, 5, 3, 8],
    [ 7, 6, 6, 1, 8],
    [ 9,12, 3,66, 3]
];
console.log(determinant(m1));

// 5640
var m2 = [
    [ 0,-9, 6],
    [ 8,11, 3],
    [-8,99, 2]
];
console.log(determinant(m2));

// throw an error
var m3 = [
    [ 0,-9, 6],
    [ 8, 3],
    [-8,99, 2]
];
console.log(determinant(m3));

// throw an error
var m4 = [
    [10,11,12, 1, 8],
    [ 8,23, 0, 2, 8],
    [ 2, 3, 5, 3, 8],
    [ 7, 6, 6, 1, 8]
];
console.log(determinant(m4));

// 34
var m5 = [
    [6,2],
    [4,7]
];
console.log(determinant(m5));
*/

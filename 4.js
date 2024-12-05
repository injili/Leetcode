//{ Driver Code Starts
// Initial Template for javascript
"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let arr = readLine()
      .split(" ")
      .map((x) => parseInt(x));
    let input_ar0 = readLine()
      .split(" ")
      .map((x) => parseInt(x));
    let d = input_ar0[0];
    let obj = new Solution();
    obj.rotateArr(arr, d);
    let S = "";
    for (let i = 0; i < arr.length; i++) {
      S += arr[i];
      S += " ";
    }
    console.log(S);

    console.log("~");
  }
}
// } Driver Code Ends

// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} d
 */

class Solution {
  // Function to rotate an array by d elements in counter-clockwise direction.
  rotateArr(arr, d) {
    // code here
    let n = arr.length;
    d %= n;
    let temp = new Array(n);
    for (let i = 0; i < n - d; i++) temp[i] = arr[d + i];

    for (let i = 0; i < d; i++) temp[n - d + i] = arr[i];

    for (let i = 0; i < n; i++) arr[i] = temp[i];
  }
}

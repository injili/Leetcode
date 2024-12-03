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

/* Function to print an array */
function printArray(arr, size) {
  let i;
  let s = "";
  for (i = 0; i < size; i++) {
    s += arr[i] + " ";
  }
  console.log(s);
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let arr = readLine()
      .split(" ")
      .map((x) => parseInt(x));
    let obj = new Solution();
    obj.pushZerosToEnd(arr);
    let n = arr.length;
    printArray(arr, n);
  }
}
// } Driver Code Ends

// User function Template for javascript

/**
 * @param {Number[]} arr
 */

class Solution {
  pushZerosToEnd(arr) {
    // code here
    if (arr) {
      let temp = new Array(arr.length);
      let a = 0;

      for (let i = 0; arr.length > i; i++) {
        if (arr[i] !== 0) temp[a++] = arr[i];
      }

      while (a !== arr.length) temp[a++] = 0;

      for (let k = 0; arr.length > k; k++) arr[k] = temp[k];
    }
    return arr;
  }
}

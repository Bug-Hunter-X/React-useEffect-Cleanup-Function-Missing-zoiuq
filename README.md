# React useEffect Cleanup Function Missing

This repository demonstrates a common error in React applications: forgetting to include a cleanup function in the `useEffect` hook. This can lead to memory leaks and unexpected behavior when the component unmounts.

## Bug Description
The `useEffect` hook in `bug.js` is missing a return function. This function is responsible for cleaning up any side effects, like timers and subscriptions.  Without it, the `setInterval` will continue to run even after the component is unmounted, causing a memory leak.

## Solution
The `bugSolution.js` file provides the corrected code with a return function that clears the interval before the component unmounts. This prevents memory leaks and ensures that the component behaves as expected.
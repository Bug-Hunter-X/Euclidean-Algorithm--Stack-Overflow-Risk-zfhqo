# Euclidean Algorithm with Stack Overflow Mitigation

This repository demonstrates a common issue in recursive algorithms: stack overflow. The `bug.js` file contains a JavaScript implementation of the Euclidean algorithm for finding the greatest common divisor (GCD) of two numbers.  While this algorithm is efficient for smaller numbers, it can suffer from stack overflow errors when handling very large inputs due to its recursive nature.

The `bugSolution.js` file provides a solution that avoids this issue by using an iterative approach instead of recursion.
---
title: "Reading: Breiman (2001)"
description: Reading notes on Leo Breiman's Random Forests paper.
sidebar:
  order: 5
---

**Citation:** Breiman, L. (2001). Random Forests. *Machine Learning*, 45(1), 5–32. [https://doi.org/10.1023/A:1010933404324](https://doi.org/10.1023/A:1010933404324)

Also see Breiman and Cutler's [Random Forests page](https://www.stat.berkeley.edu/~breiman/RandomForests/).

**Status:** Done

## Summary of the paper's main points

- Introduces random forests: ensembles of trees built from bootstrap samples with random feature selection at each split.
- Shows that the generalization error converges as the number of trees grows, so adding trees does not cause overfitting.
- Relates forest error to the **strength** of individual trees and the **correlation** between them — lower correlation and higher strength give better forests.
- Uses out-of-bag estimates to monitor error, strength, correlation, and variable importance.

## My notes

*(To be added while reading.)*

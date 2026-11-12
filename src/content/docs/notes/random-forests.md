---
title: Random Forests
description: Bagging, random feature selection, OOB error, and feature importance.
sidebar:
  order: 4
---

## Idea

An ensemble of many decision trees. Each tree is trained on a **bootstrap sample** of the data (bagging) and considers only a **random subset of features** at each split. Predictions are averaged (regression) or voted (classification).

## Why it works

Averaging many de-correlated trees reduces variance while keeping bias low, so a forest usually generalizes much better than a single deep tree.

## Useful properties

- **Out-of-bag (OOB) error** — each tree can be evaluated on the samples it did not see, giving a built-in validation estimate.
- **Feature importance** — impurity-based or permutation importance helps explain which variables drive predictions.
- **Robust defaults** — often works well with little tuning.

## Key hyperparameters

| Hyperparameter | Effect |
|---|---|
| Number of trees | More trees → more stable, slower |
| Max features per split | Lower → more de-correlated trees |
| Max depth / min samples per leaf | Controls the complexity of each tree |

## Why start with tree-based models

They work well with structured (tabular) data — common in construction and project management — and provide interpretable outputs such as feature importance.

## Resources

- Google [Decision Forests course](https://developers.google.com/machine-learning/decision-forests)
- [Breiman (2001)](../breiman-2001/)

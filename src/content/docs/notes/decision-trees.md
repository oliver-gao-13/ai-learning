---
title: Decision Trees
description: Splitting criteria, overfitting, and pruning.
sidebar:
  order: 3
---

## Idea

Recursively split the data on feature thresholds to create groups that are as pure as possible with respect to the target.

## Splitting criteria

- **Classification:** Gini impurity, or entropy / information gain
- **Regression:** reduction in variance (mean squared error)

## Overfitting and pruning

- Deep trees can memorize the training data.
- Control complexity with hyperparameters such as maximum depth and minimum samples per leaf.
- **Pruning** removes branches that do not improve validation performance.

## Strengths and weaknesses

| Strengths | Weaknesses |
|---|---|
| Easy to interpret and visualize | High variance — small data changes can change the tree |
| Handles numerical and categorical features | A single tree is often less accurate than ensembles |
| Little preprocessing needed (no scaling) | Greedy splits are not globally optimal |

## Resource

- Google [Decision Forests course](https://developers.google.com/machine-learning/decision-forests)

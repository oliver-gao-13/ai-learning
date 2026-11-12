---
title: "Stage 4: Evaluation, Tuning, Boosting"
description: Cross-validation, metrics, hyperparameter tuning, and gradient boosting.
sidebar:
  order: 4
  label: "4. Evaluation, tuning, boosting"
---

**Goal:** evaluate models correctly, tune them, and compare random forests with gradient boosting.

## Resources

| Resource | Link |
|---|---|
| Kaggle Intermediate Machine Learning | [kaggle.com/learn/intermediate-machine-learning](https://www.kaggle.com/learn/intermediate-machine-learning) |
| scikit-learn: Cross-validation | [scikit-learn.org](https://scikit-learn.org/stable/modules/cross_validation.html) |
| scikit-learn: Tuning hyperparameters | [scikit-learn.org](https://scikit-learn.org/stable/modules/grid_search.html) |
| XGBoost documentation | [xgboost.readthedocs.io](https://xgboost.readthedocs.io/) |

## Checklist

- [ ] Kaggle Intermediate Machine Learning
  - [ ] Missing values and categorical variables
  - [ ] Pipelines (avoiding data leakage)
  - [ ] Cross-validation
  - [ ] XGBoost (gradient boosting)
  - [ ] Data leakage
- [ ] Understand three splitting strategies: `KFold`, `GroupKFold` (by batch or equipment), `TimeSeriesSplit` (by time)
- [ ] Understand metrics: MAE / RMSE / R² for regression; F1 / ROC-AUC for classification
- [ ] Practice: compare scores from random vs. grouped / time-based splits on the same dataset
- [ ] Practice: tune a random forest with `GridSearchCV` / `RandomizedSearchCV`
- [ ] Practice: compare random forest vs. XGBoost on the same dataset

## Notes

*(To be added.)*

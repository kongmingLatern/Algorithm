# Counting Sort

## 简介

计数排序，适合少量的非负数排序。可实现优化以支持负数。

非比较排序。

由于用来计数的数组 count 的长度取决于待排序数组中数据的范围（等于待排序数组的最大值与最小值的差加上 1），这使得计数排序对于数据范围很大的数组，需要大量时间和内存。例如：计数排序是用来排序 0 到 100 之间的数字的最好的算法，但是它不适合按字母顺序排序人名。

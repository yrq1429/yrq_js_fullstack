// 快速排序 分治的概念 复杂排序（快排、堆排序、归并排序）
// 分治：随机选择数组的一个数A作为基准，一般是中点，其他数字跟他比较，
// 小于它的放在左边，大于它的放在右边，利用递归的思想，将左边的数和右边的数重做以上的两步、

// 执行效率

// 简单算法  冒泡、选择、插入、（性能不高  时间复杂度N^2）


// 时间复杂度  N*logN
const arr = [85, 17, 23, 456, 1, 123, 98, 44];

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr
  }
  let pivotIndex = Math.floor(arr.length / 2);
  let pivot = arr.splice(pivotIndex, 1)[0];//切割之后得到数组，用[0]
  let left = [];
  let right = [];
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([pivot], quickSort(right));
}

console.log(quickSort(arr))
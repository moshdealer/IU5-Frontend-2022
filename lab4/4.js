/**
 * Напишите функцию get1DArray(arr),
 * на вход подается массив бесконечной вложенности массивов arr
 * необходимо вернуть одномерный массив
 * Примеры:
 * [1, 2, 'aa', [1, 2, 3],
    [
        [1, 2],
        [1, 2]
    ],
    [
        [
            [1, 2, [1, 2, [2]]], 3
        ], 4
    ]
]; ---> [1, 2, "aa", 1, 2, 3, 1, 2, 1, 2, 1, 2, 1, 2, 2, 3, 4]
*/

function get1DArray(arr) {
    let newArr = arr;
    let flag, i;
    do {
        flag = true;
        for (i = 0; i < newArr.length; i++) {
            if (Array.isArray(newArr[i])) {
                flag = false;
            }
        }
        newArr = newArr.flat();
    } while (flag === false);
    return (newArr);
}

module.exports = get1DArray;

/**
 * Напишите функцию getMinMax(str),
 * на вход в функцию подается строка str
 * числа в строке выделяются пробелами или знаками препинания
 * необходимо найти минимальное и максимальное число в строке
 * вернуть в формате {min: 1, max: 22}
 * Примеры:
 * '4 и -6, 2, 1, может 9, 63, -134 и 566]' -> {min: -134, max: 566}
 */
 function getMinMax(str) {
    let ar = str.split(/[\]\ !?;,]/);
    let min = Number(ar[0]);
    let max = Number (ar[0]);
    for (let i = 1; i < ar.length; i++){
        if ((ar[i] > max)&&(!isNaN(ar[i]))){
            max = Number(ar[i]);
        }
        if ((ar[i] < min)&&(!isNaN(ar[i]))){
            min = Number(ar[i]);
        }
    }
  return {min, max};
}
module.exports = getMinMax;

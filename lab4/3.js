/**
 * Напишите функцию rle(str),
 * входные данные - строка
 * выходные данные - строка со свернутыми диапазонами
 * Примеры:
 * rle('AAAB') === 'A3B'
 * rle('BCCADDEEEBB') === 'BC2AD2E3B2'
 */

 function rle(str) {
    let count, finSt, i;
    finSt =""
    count = 1;
    for (i = 1; i <= str.length; i++ ){
        if (str[i] === str[i-1]){
            count++;
        }
        else {
            if (count === 1){
                finSt += str[i-count];
            }
            else {
                finSt += str[i-count];
                finSt += count;
            }
            count = 1;
        }
    }
    return (finSt);
}

module.exports = rle;

/**
 * Напишите функцию getAnagramms(arr),
 * входные данные - массив строк
 * выходные данные - массив элементов, где каждый элемент является массивом анаграмм (строки)
 * Примеры:
 * ['мир', 'Рим', 'сирота', 'Ариост', 'мри', 'пва', 'лор', 'авп']; -> [["мир", "Рим", "мри"], ["сирота", "Ариост"], ["пва", "авп"]]
 */
function getAnagramms(arr) {
    //code here
    //массивы -> сортируем -> сравниваем
    let backupArr = Array.from(arr);
    let secArr = Array.from(arr);
    let helpArr = [];
    const finArr = [];
    let i, str;
    for (i = 0; i < secArr.length; i++){
        secArr[i] = secArr[i].toLowerCase().split("").sort().join("");
    }
    while (backupArr.length > 1){
        helpArr = [];
        str = secArr[0];
        helpArr.push(backupArr[0]);
        for (i = 1; i < secArr.length; i++){
            if (str === secArr[i]){
                helpArr.push(backupArr[i]);
            }
        }
        while (secArr.indexOf(str)!== -1){
            backupArr.splice(secArr.indexOf(str),1);
            secArr.splice(secArr.indexOf(str),1);
        }
        finArr.push(helpArr);
    }
    if (backupArr.length === 1){
        helpArr = [];
        helpArr.push(backupArr[0]);
        finArr.push(helpArr);
    }
    return(finArr);
}

module.exports = getAnagramms;

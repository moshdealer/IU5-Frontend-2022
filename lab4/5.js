/**
 * Доп задание, делать не обязательно, но мы запомним тех кто не сделал ;D
 * Для прохождения тестов на эту задачу их необходимо раскоментить в файле tests/lab4.test.js
 * Напишите функцию checkBrackets(str),
 * на вход подается строка состоящая из скобок разной вложенности, варианты скобок: []<>()
 * необходимо определеить, правильно ли они вложены
 * Примеры:
 * [[]]()<> --> true
 * ([)]()<> --> false
 * [(<>)] --> true
 */

function checkBrackets(str) {
    let arr = str.split("");
    let flag = true;
    let flagEnd = false;
    let k;
    while ((flagEnd === false)&&(flag === true)){
        if (arr.lastIndexOf("[") !== -1){
            k = arr.lastIndexOf("[");
            if (arr[k+1] === "]"){
                arr.splice(k,2);
            }
            else {
                if ((arr[k+1] === "<") || (arr[k+1] === "(")){
                }
                else {flag = false;}
            }
        }
        if (arr.lastIndexOf("(") !== -1){
            k = arr.lastIndexOf("(");
            if (arr[k+1] === ")"){
                arr.splice(k,2);
            }
            else {
                if ((arr[k+1] === "[") || (arr[k+1] === "<")){
                }
                else {flag = false;}
            }
        }
        if (arr.lastIndexOf("<") !== -1){
            k = arr.lastIndexOf("<");
            if (arr[k+1] === ">"){
                arr.splice(k,2);
            }
            else {
                if ((arr[k+1] === "[") || (arr[k+1] === "(")){
                }
                else {flag = false;}
            }
        }
        if ((arr.lastIndexOf("<") === -1)&&(arr.lastIndexOf("[") === -1)&&(arr.lastIndexOf("(") === -1)){
            flagEnd = true;
        }
    }
    return flag;
}

module.exports = checkBrackets;

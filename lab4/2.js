/**
 * Напишите функцию isPalindrome(str),
 * входные данные - строкa
 * выходные данные - boolean - является ли переданная строка палиндромом
 * Примеры:
 * "мир" -> false
 * "тот" -> true
 */
function isPalindrome(str) {
    //2 номер решал до того, как узнал, что все методы можно записать в одну строку
    //поэтому все оставил как есть
    newSt = str.split('');
    newSt = newSt.reverse();
    newSt = newSt.join('');
    return (str===newSt);
}

module.exports = isPalindrome;

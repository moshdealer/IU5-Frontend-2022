/**
 * Напишите функцию capitalize(str),
 * которая вернет строку str, в которой каждое слово начинается с заглавной буквы.
 * Примеры:
 * 'я вижу солнце' -> 'Я Вижу Солнце'
 * 'я Вижу солнце' -> 'Я Вижу Солнце'
 */
 function capitalize(str) {
    let ar = str.split(' ');
    newstr = "";
    for (let i = 0; i < ar.length;i++){
        st = ar[i];
        st = st[0].toUpperCase();
        newstr += st + ar[i].slice(1) + " ";
    }
    newstr = newstr.slice(0, newstr.length-1);
    return newstr;
}

module.exports = capitalize;
function getRandomNumber(from, to) {
    if(from > to || from < 0 || to < 0) {
        return new Error('Error. Change input numbers');
    } 
   return Math.floor(Math.random() * to - from) + from;
}

function checkStringLength(str, maxLength) {
    if (str.Length > maxLength) {
        return false;
    }
    return true;
}
getRandomNumber(2, 10);
checkStringLength('Тест', 4);
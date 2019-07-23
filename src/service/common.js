export const cropLongString = (str, countLetter) => {
    return str.length > countLetter ? str.substring(0, countLetter) + "..." : str;
}; 

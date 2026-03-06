function  truncate(str, max){
    return str.slice(0, max) + "...";
};

console.log(truncate('This text will be truncated if it is too long', 25))
// This text will be truncat...
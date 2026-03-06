function ucFirstLetter(str) {
    let result = str.split(" ");
    result[0] = result[0][0];
    result[1] = result[1][0];

    return result.join("").toUpperCase();
}

console.log(ucFirstLetter("los angeles"));

/**function ucFirstLetter(str) { //ChatGPT suggestions
    return str
        .split(" ")
        .map(word => word[0])
        .join("")
        .toUpperCase();
}

console.log(ucFirstLetter("los angeles"));**/
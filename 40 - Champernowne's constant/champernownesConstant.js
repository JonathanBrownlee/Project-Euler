const main = () => {
    var str = ".";
    let i = 0;
    while (str.length < 1000001) {
        i++;
        str += i.toString();
    }
    return parseInt(str[1]) * parseInt(str[10]) * parseInt(str[100]) * parseInt(str[1000]) * parseInt(str[10000]) * parseInt(str[100000]) * parseInt(str[1000000]);
};

console.log(main());

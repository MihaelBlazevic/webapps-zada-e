let regex = /\s+(\w)?/gi;
let input = 'web apps vjezbe';
let output = input.toLowerCase().replace(regex, function (match, letter) {
    return letter.toUpperCase();
});


console.log(output);
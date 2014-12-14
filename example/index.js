global.vec2 = require("../src/index");


var a = vec2.create(2, 5),
    b = vec2.create(3, -4),
    c = vec2.add(vec2.create(), a, b);


console.log(vec2.length(c));
console.log(vec2.setLength(c, c, 10));
console.log(vec2.normalize(c, c));
console.log(vec2.length(c));

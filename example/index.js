global.vec2 = require("../src/index");


var a = vec2.create(2, 5),
    b = vec2.create(3, -4),
    c = vec2.add(a, b, vec2.create());


console.log(vec2.length(c));
console.log(vec2.setLength(c, 10));
console.log(vec2.normalize(c));
console.log(vec2.length(c));

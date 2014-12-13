var mathf = require("mathf");


var vec2 = module.exports;


vec2.create = function(x, y) {

    return vec2.set(new mathf.ArrayType(2), x, y);
};

vec2.copy = function(a, b) {
    a[0] = b[0];
    a[1] = b[1];

    return a;
};

vec2.set = function(a, x, y) {
    a[0] = x !== undefined ? x : 0;
    a[1] = y !== undefined ? y : 0;

    return a;
};

vec2.add = function(a, b, out) {
    out = out || a;

    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];

    return a;
};

vec2.sub = function(a, b, out) {
    out = out || a;

    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];

    return out;
};

vec2.mul = function(a, b, out) {
    out = out || a;

    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];

    return out;
};

vec2.div = function(a, b, out) {
    var bx = b[0],
        by = b[1];

    out = out || a;

    out[0] = a[0] * (bx !== 0 ? 1 / bx : bx);
    out[1] = a[1] * (by !== 0 ? 1 / by : by);

    return out;
};

vec2.sadd = function(a, s, out) {
    out = out || a;

    out[0] = a[0] + s;
    out[1] = a[1] + s;

    return a;
};

vec2.ssub = function(a, s, out) {
    out = out || a;

    out[0] = a[0] - s;
    out[1] = a[1] - s;

    return out;
};

vec2.smul = function(a, s, out) {
    out = out || a;

    out[0] = a[0] * s;
    out[1] = a[1] * s;

    return out;
};

vec2.sdiv = function(a, s, out) {
    s = s !== 0 ? 1 / s : s;

    out = out || a;

    out[0] = a[0] * s;
    out[1] = a[1] * s;

    return out;
};

vec2.dot = function(a, b) {

    return a[0] * b[0] + a[1] * b[1];
};

vec2.cross = function(a, b) {

    return a[0] * b[1] - a[1] * b[0];
};

vec2.lengthSq = function(a) {

    return vec2.dot(a, a);
};

vec2.length = function(a) {
    var lsq = vec2.lengthSq(a);

    return lsq !== 0 ? mathf.sqrt(lsq) : lsq;
};

vec2.invLength = function(a) {
    var lsq = vec2.lengthSq(a);

    return lsq !== 0 ? 1 / mathf.sqrt(lsq) : lsq;
};

vec2.setLength = function(a, length) {

    return vec2.smul(a, vec2.invLength(a) * length);
};

vec2.normalize = function(a) {

    return vec2.sdiv(a, vec2.length(a));
};

vec2.inverse = function(a, out) {
    out = out || a;

    out[0] = a[0] * -1;
    out[1] = a[1] * -1;

    return out;
};

vec2.lerp = function(a, b, x, out) {
    var lerp = mathf.lerp;

    out = out || a;

    out[0] = lerp(a[0], b[0], x);
    out[1] = lerp(a[1], b[1], x);

    return out;
};

vec2.perp = function(a, out) {
    out = out || a;

    out[0] = -a[1];
    out[1] = a[0];

    return out;
};

vec2.perpL = function(a, out) {
    out = out || a;

    out[0] = a[1];
    out[1] = -a[0];

    return out;
};

vec2.min = function(a, b, out) {
    var ax = a[0],
        ay = a[1],
        bx = b[0],
        by = b[1];

    out = out || a;

    out[0] = bx < ax ? bx : ax;
    out[1] = by < ay ? by : ay;

    return out;
};

vec2.max = function(a, b, out) {
    var ax = a[0],
        ay = a[1],
        bx = b[0],
        by = b[1];

    out = out || a;

    out[0] = bx > ax ? bx : ax;
    out[1] = by > ay ? by : ay;

    return out;
};

vec2.clamp = function(a, min, max, out) {
    var x = a[0],
        y = a[1],
        minx = min[0],
        miny = min[1],
        maxx = max[0],
        maxy = max[1];

    out = out || a;

    out[0] = x < minx ? minx : x > maxx ? maxx : x;
    out[1] = y < miny ? miny : y > maxy ? maxy : y;

    return out;
};

vec2.transformAngle = function(a, angle, out) {
    var x = a[0],
        y = a[1],
        c = mathf.cos(angle),
        s = mathf.sin(angle);

    out = out || a;

    out[0] = x * c - y * s;
    out[1] = x * s + y * c;

    return out;
};

vec2.transformMat2 = function(a, m, out) {
    var x = a[0],
        y = a[1];

    out = out || a;

    out[0] = x * m[0] + y * m[2];
    out[1] = x * m[1] + y * m[3];

    return out;
};

vec2.untransformMat2 = function(a, m, out) {
    var x = a[0],
        y = a[1];

    out = out || a;

    out[0] = x * m[0] + y * m[1];
    out[1] = x * m[2] + y * m[3];

    return out;
};

vec2.transformMat32 = function(a, m, out) {
    var x = a[0],
        y = a[1];

    out = out || a;

    out[0] = x * m[0] + y * m[2] + m[4];
    out[1] = x * m[1] + y * m[3] + m[5];

    return out;
};

vec2.untransformMat32 = function(a, m, out) {
    var x = a[0] - m[4],
        y = a[1] - m[5];

    out = out || a;

    out[0] = x * m[0] + y * m[1];
    out[1] = x * m[2] + y * m[3];

    return out;
};

vec2.transformMat3 = function(a, m, out) {
    var x = a[0],
        y = a[1];

    out = out || a;

    out[0] = x * m[0] + y * m[3] + m[6];
    out[1] = x * m[1] + y * m[4] + m[7];

    return out;
};

vec2.transformMat4 = function(a, m, out) {
    var x = a[0],
        y = a[1];

    out = out || a;

    out[0] = x * m[0] + y * m[4] + m[12];
    out[1] = x * m[1] + y * m[5] + m[13];

    return out;
};

vec2.transformProjection = function(a, m, out) {
    var x = a[0],
        y = a[1],
        d = m[3] * x + m[7] * y + m[11] + m[15];

    d = d !== 0 ? 1 / d : d;
    out = out || a;

    out[0] = (x * m[0] + y * m[4] + m[12]) * d;
    out[1] = (x * m[1] + y * m[5] + m[13]) * d;

    return out;
};

vec2.positionFromMat32 = function(a, m) {
    a[0] = m[4];
    a[1] = m[5];

    return a;
};

vec2.positionFromMat4 = function(a, m) {
    a[0] = m[12];
    a[1] = m[13];

    return a;
};

vec2.scaleFromMat2 = function(a, m) {
    a[0] = vec2.length(vec2.set(a, m[0], m[2]));
    a[1] = vec2.length(vec2.set(a, m[1], m[3]));

    return a;
};

vec2.scaleFromMat32 = vec2.scaleFromMat2;

vec2.equal = function(a, b) {
    return !(
        a[0] !== b[0] ||
        a[1] !== b[1]
    );
};

vec2.notEqual = function(a, b) {
    return (
        a[0] !== b[0] ||
        a[1] !== b[1]
    );
};

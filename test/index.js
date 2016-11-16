var tape = require("tape"),
    vec2 = require("..");


tape("vec2.copy(out, a)", function(assert) {
    assert.deepEquals(vec2.copy(vec2.create(), vec2.create(1, 1)), vec2.create(1, 1));
    assert.end();
});

tape("vec2.set(out, x, y)", function(assert) {
    assert.deepEquals(vec2.set(vec2.create(), 1, 1), vec2.create(1, 1));
    assert.end();
});

tape("vec2.add(out, a, b)", function(assert) {
    assert.deepEquals(vec2.add(vec2.create(), vec2.create(1, 0), vec2.create(0, 1)), vec2.create(1, 1));
    assert.end();
});

tape("vec2.sub(out, a, b)", function(assert) {
    assert.deepEquals(vec2.sub(vec2.create(), vec2.create(1, 1), vec2.create(1, 1)), vec2.create(0, 0));
    assert.end();
});

tape("vec2.mul(out, a, b)", function(assert) {
    assert.deepEquals(vec2.mul(vec2.create(), vec2.create(2, 2), vec2.create(1, 1)), vec2.create(2, 2));
    assert.end();
});

tape("vec2.div(out, a, b)", function(assert) {
    assert.deepEquals(vec2.div(vec2.create(), vec2.create(2, 2), vec2.create(1, 1)), vec2.create(2, 2));
    assert.end();
});

tape("vec2.sadd(out, a, s)", function(assert) {
    assert.deepEquals(vec2.sadd(vec2.create(), vec2.create(0, 0), 1), vec2.create(1, 1));
    assert.end();
});

tape("vec2.ssub(out, a, s)", function(assert) {
    assert.deepEquals(vec2.ssub(vec2.create(), vec2.create(1, 1), 1), vec2.create(0, 0));
    assert.end();
});

tape("vec2.smul(out, a, s)", function(assert) {
    assert.deepEquals(vec2.smul(vec2.create(), vec2.create(2, 2), 2), vec2.create(4, 4));
    assert.end();
});

tape("vec2.sdiv(out, a, s)", function(assert) {
    assert.deepEquals(vec2.sdiv(vec2.create(), vec2.create(2, 2), 2), vec2.create(1, 1));
    assert.end();
});

tape("vec2.cross(out, a, b)", function(assert) {
    assert.equals(vec2.cross(vec2.create(1, 1), vec2.create(1, 1)), 0);
    assert.end();
});

tape("vec2.dot(out, a, b)", function(assert) {
    assert.equals(vec2.dot(vec2.create(1, 1), vec2.create(1, 1)), 2);
    assert.end();
});

tape("vec2.length(out)", function(assert) {
    assert.equals(vec2.length(vec2.create(1, 1)), Math.sqrt(2));
    assert.end();
});

tape("vec2.setLength(out)", function(assert) {
    assert.deepEquals(vec2.setLength([], vec2.create(2, 2), Math.sqrt(2)), vec2.create(1, 1));
    assert.end();
});

tape("vec2.normalize(out, a)", function(assert) {
    assert.deepEquals(vec2.normalize([], vec2.create(1, 0)), vec2.create(1, 0));
    assert.end();
});

tape("vec2.inverse(out, a)", function(assert) {
    assert.deepEquals(vec2.inverse([], vec2.create(1, 1)), vec2.create(-1, -1));
    assert.end();
});

tape("vec2.lerp(out, a, b, x)", function(assert) {
    assert.deepEquals(vec2.lerp([], vec2.create(0, 0), vec2.create(2, 2), 0.5), vec2.create(1, 1));
    assert.end();
});

tape("vec2.transformAngle(out, a, angle)", function(assert) {
    assert.equals(vec2.equals(
        vec2.transformAngle([], vec2.create(0, 1), Math.PI / 2),
        vec2.create(-1, 0)
    ), true);
    assert.end();
});

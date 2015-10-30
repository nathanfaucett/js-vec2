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

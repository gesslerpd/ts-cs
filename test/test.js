var tscs = require('../js');

var test = require('tape');

test('Queue Test', function (t) {
    t.plan(8);

    var q = new tscs.Queue();

    t.equal(q.isEmpty(), true);

    q.enqueue('Hello');
    q.enqueue('World');

    t.equal(q.isEmpty(), false);
    t.equal(q.length, 2);
    q.length = 6;
    t.equal(q.length, 2);

    t.equal(q.dequeue(), 'Hello');
    t.equal(q.length, 1);
    t.equal(q.dequeue(), 'World');
    t.equal(q.isEmpty(), true);

});

test('Stack Test', function (t) {
    t.plan(8);

    var s = new tscs.Stack();

    t.equal(s.isEmpty(), true);

    s.push('Hello');
    s.push('World');

    t.equal(s.isEmpty(), false);
    t.equal(s.length, 2);
    s.length = 6;
    t.equal(s.length, 2);

    t.equal(s.pop(), 'World');
    t.equal(s.length, 1);
    t.equal(s.pop(), 'Hello');
    t.equal(s.isEmpty(), true);
});

test('BST Test', function (t) {
    t.plan(100);

    var tree = new tscs.BinarySearchTree();

    for (var i = 100; i > 0; i--) {
        tree.insert(i);
    }
    var j = 0;
    tree.traverse(function (element) {
        t.equal(element, ++j);
    }, tscs.Traverse.INORDER);
});

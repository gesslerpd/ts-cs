var tscs = require('../js');

var test = require('tape');

test('Queue Test', function (t) {

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

    try {
        q.dequeue();
        t.equal(0, 1);
    }
    catch (e) {
        t.equal(1, 1);
    }

    try {
        q.peek();
        t.equal(0, 1);
    }
    catch (e) {
        t.equal(1, 1);
    }
    q.enqueue(9);

    for (var i = 0; i < 100; i++) {
        t.equal(q.peek(), 9);
    }

    t.end();

});

test('Stack Test', function (t) {

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

    try {
        s.pop();
        t.equal(0, 1);
    }
    catch (e) {
        t.equal(1, 1);
    }

    try {
        s.peek();
        t.equal(0, 1);
    }
    catch (e) {
        t.equal(1, 1);
    }

    try {
        s.mutate(6);
        t.equal(0, 1);
    }
    catch (e) {
        t.equal(1, 1);
    }

    s.push(9);

    for (var i = 0; i < 100; i++) {
        t.equal(s.peek(), 9);
    }

    for (var i = 0; i < 100; i++) {
        s.mutate(i);
        t.equal(s.peek(), i);
        t.equal(s.length, 1);
    }

    t.end();

});

test('BST Test', function (t) {

    var tree = new tscs.BinarySearchTree();

    for (var i = 0; i < 10; i++) {
        t.equal(tree.search(i), false);
        if (i != 0) {
            t.equal(tree.search(-i), false);
            tree.insert(-i);
            t.equal(tree.search(-i), true);
        }
        tree.insert(i);
        t.equal(tree.search(i), true);
    }



    var j = -9
    tree.traverse(function (element, index) {
        // t.equal(index,j);
        t.equal(element, j++);
    }, tscs.Traverse.INORDER);

    t.equal(tree.toArray()[3], Array.apply(null, { length: 19 })
        .map(function (el, index) { return index - 9 })[3]);

    tree = new tscs.BinarySearchTree();
    tree.insert(2);
    tree.insert(-1);
    tree.insert(0);
    tree.insert(1);
    j = 0;
    var arr = [2, -1, 0, 1];
    tree.traverse(function (element, index) {
        t.equal(element, arr[j++]);
    }, tscs.Traverse.PREORDER);


    tree = new tscs.BinarySearchTree();
    tree.insert(2);
    tree.insert(-1);
    tree.insert(0);
    tree.insert(1);
    j = 0;
    arr = [1, 0, -1, 2];
    tree.traverse(function (element, index) {
        t.equal(element, arr[j++]);
    }, tscs.Traverse.POSTORDER);
    /*
        j = 100;
        tree.traverse(function (element, index) {
            // t.equal(index,j);
            t.equal(element, j--);
        }, tscs.Traverse.POSTORDER);
    */
    t.end();
});

test('MergeSort Test', function (t) {

    var arr = [6, 3, 3, 2, 1];

    arr = tscs.mergeSort(arr);

    t.equal(arr[0], 1);
    t.equal(arr[1], 2);
    t.equal(arr[2], 3);
    t.equal(arr[3], 3);
    t.equal(arr[4], 6);

    arr = [0, 3, 2, 1];
    arr = tscs.mergeSort(arr);

    t.equal(arr[0], 0);
    t.equal(arr[1], 1);
    t.equal(arr[2], 2);
    t.equal(arr[3], 3);

    t.end();

});

test('QuickSort Test', function (t) {
    t.plan(5);

    var arr = [6, 3, 3, 2, 1];

    arr = tscs.quickSort(arr);

    t.equal(arr[0], 1);
    t.equal(arr[1], 2);
    t.equal(arr[2], 3);
    t.equal(arr[3], 3);
    t.equal(arr[4], 6);

});

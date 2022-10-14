const {NotImplementedError} = require('../extensions/index.js')

const {Node} = require('../extensions/list-tree.js')

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
    constructor() {
        this._root = null
    }

    root() {
        return this._root
    }

    add(value) {
        this._root = addNodeElement(this._root, value)

        function addNodeElement(node, value) {
            if (!node) {
                return new Node(value)
            }
            if (node.data === value) {
                return node
            }
            (node.data > value) ? node.left = addNodeElement(node.left, value) : node.right = addNodeElement(node.right, value)
            return node
        }

        //throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    }

    has(value) {
        return searchNodeElement(this._root, value)

        function searchNodeElement(node, value) {
            if (!node) {
                return false
            }
            if (node.data === value) {
                return true
            }
            if (node.data > value) {
                return searchNodeElement(node.left, value)
            } else {
                return searchNodeElement(node.right, value)
            }
        }

        //throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    }

    find(value) {
        return findNodeElement(this._root, value)

        function findNodeElement(node, value) {
            if (!node) {
                return null
            }
            if (node.data === value) {
                return node
            }
            if (node.data > value) {
                return findNodeElement(node.left, value)
            } else {
                return findNodeElement(node.right, value)
            }
        }

        //throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    }

    remove(value) {
        this._root = deleteElement(this._root, value)

        function deleteElement(node, value) {
            if (!node) {
                return null
            }
            if (node.data > value) {
                node.left = deleteElement(node.left, value)
                return node
            } else if (value > node.data) {
                node.right = deleteElement(node.right, value)
                return node
            } else {
                if (!node.left && !node.right) {
                    return null
                }
                if (!node.left) {
                    node = node.right
                    return node
                }
                if (!node.right) {
                    node = node.left
                    return node
                }
                let minFromRight = node.right
                while (minFromRight.left) {
                    minFromRight = minFromRight.left
                }
                node.data = minFromRight.data
                node.right = deleteElement(node.right, minFromRight.data)
                return node
            }
        }

        //throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    }

    min() {
        if (!this._root) {
            return null
        }
        let minValue = this._root
        while (minValue.left) {
            minValue = minValue.left
        }
        return minValue.data
        //throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    }

    max() {
        if (!this._root) {
            return null
        }
        let maxValue = this._root
        while (maxValue.right) {
            maxValue = maxValue.right
        }
        return maxValue.data
        //throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    }
}

module.exports = {
    BinarySearchTree
}
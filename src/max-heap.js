const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
		this.heapSize = 0;
	}

	push(data, priority) {
		var node = new Node(data, priority);
		this.insertNode(node);
		this.shiftNodeUp(node);

		this.heapSize = this.heapSize + 1;
	}

	pop() {
		if (this.root == null) {
			return
		}

		var root = this.detachRoot();
		this.restoreRootFromLastInsertedNode(root);
		this.shiftNodeDown(this.root);

		if (this.root != null) {
			this.shiftNodeDown(this.root.left);
			this.shiftNodeDown(this.root.right);
		}

		this.heapSize = this.heapSize - 1;

		return root.data;
	}

	detachRoot() {
		var root = this.root;
		var rootIndex = this.parentNodes.indexOf(root);

		if (rootIndex >= 0) {
			this.parentNodes.splice(rootIndex, 1);
		}

		this.root = null;

		return root;
	}

	restoreRootFromLastInsertedNode(detached) {
		var left = detached.left;
		var right = detached.right;
		var last = right;

		if (last == null) {
			last = left;
		}

		if (last == null) {
			return
		}

		detached.removeChild(right);
		detached.removeChild(left);

		this.root = last;

		this.parentNodes = this.branchParentNodes(this.root);

		if (left != null && last != left) {
			this.insertNode(left);
		}

		this.parentNodes = this.branchParentNodes(this.root);
	}

	size() {
		return this.heapSize;
	}

	isEmpty() {
		return (this.root == null)
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
		this.heapSize = 0;
	}

	insertNode(node) {
		if (this.root == null) {
			this.root = node;
		} else {
			this.parentNodes[0].appendChild(node);

			if (this.parentNodes[0].left != null && this.parentNodes[0].right != null) {
				this.parentNodes.shift();
			}
		}

		this.parentNodes.push(node);
	}

	shiftNodeUp(node) {
		if (node.parent != null && node.parent.priority < node.priority) {
			var parent = node.parent;

			var nodeIndex = this.parentNodes.indexOf(node);
			var parentIndex = this.parentNodes.indexOf(parent);

			if (nodeIndex >= 0) {
				this.parentNodes[nodeIndex] = parent;
			}

			if (parentIndex >= 0) {
				this.parentNodes[parentIndex] = node;
			}

			node.swapWithParent();
			this.shiftNodeUp(node);
		}

		if (node.parent == null) {
			this.root = node;
		}
	}

	shiftNodeDown(node) {
		if (node == null) {
			return
		}

		var child = null;
		if (node.left != null && node.priority < node.left.priority) {
			child = node.left;
		} else if (node.right != null && node.priority < node.right.priority) {
			child = node.right;
		} else {
			child = null;
		}

		if (child != null) {
			child.swapWithParent();

			if (this.root == node) {
				this.root = child;
			}

			var childIndex = this.parentNodes.indexOf(child);
			var nodeIndex = this.parentNodes.indexOf(node);

			if (childIndex >= 0) {
				this.parentNodes[childIndex] = node;
			}

			if (nodeIndex >= 0) {
				this.parentNodes[nodeIndex] = child;
			}

			this.shiftNodeDown(node);
		}
	}

	branchParentNodes(node) {
		var parentNodes = [];

		if (node.left == null || node.right == null) {
			parentNodes.push(node);
		}

		if (node.left != null) {
			var nodes = this.branchParentNodes(node.left);
			nodes.forEach(n => {parentNodes.push(n)});
		}

		if (node.right != null) {
			var nodes = this.branchParentNodes(node.right);
			nodes.forEach(n => {parentNodes.push(n)});
		}

		return parentNodes;
	}
}

module.exports = MaxHeap;

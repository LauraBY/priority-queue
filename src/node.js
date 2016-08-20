class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		if (this.left != null && this.right != null) {
			return
		}

		if (this.left == null) {
			this.left = node;
		} else {
			this.right = node;
		}
	}

	removeChild(node) {
		if (this.left == node) {
			this.left = null;
		} else if (this.right == node) {
			 this.right = null;
		} else {
		 	const err = new Error('incorrect child');
			throw err;
		}
	}

	remove() {

	}

	swapWithParent() {

	}
}

module.exports = Node;

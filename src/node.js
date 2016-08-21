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
			this.left.parent = this; // создаем обратную связь ребенка с родителем
		} else {
			this.right = node;
			this.right.parent = this; // создаем обратную связь ребенка с родителем
		}
	}

	removeChild(node) {
		if (this.left == node) {
			this.left.parent = null;
			this.left = null;
		} else if (this.right == node) {
			this.right.parent = null;
			this.right = null;
		} else {
		 	const err = new Error('incorrect child');
			throw err;
		}
	}

	remove() {
		if (this.parent == null) {
			return
		}
		this.parent.removeChild(this);
	}

	swapWithParent() {

	}
}

module.exports = Node;

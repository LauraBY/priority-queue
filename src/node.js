class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		// does nothing if this.left and this.right exist
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
		// does nothing if node does not have parent
		if (this.parent == null) {
			return
		}

		// calls child.parent.removeChild with child as arg
		this.parent.removeChild(this);
	}

	swapWithParent() {
		// does nothing if node does not have parent
		if (this.parent == null) {
			return
		}

		var parent = this.parent;
		var parentOfParent = this.parent.parent;

		parent.parent = this; // updates parent.parent

		this.parent = parentOfParent; // updates child.parent

		// parent.left.parent = this; // updates parent.child.parent

		// // updates children of node and parent node
		// var parentLeft = parent.left;
		// var parentRight = parent.right;
		// parent.left = this.left;
		// parent.right = this.right;
		// this.left = parentLeft;
		// this.right = parentRight;
	}
}

module.exports = Node;

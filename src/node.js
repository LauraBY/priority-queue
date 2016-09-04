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

		if (node == null) {
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
		if (node == null) {
			return
		}

		if (this.left == node) {
			this.left.parent = null;
			this.left = null;
		} else if (this.right == node) {
			this.right.parent = null;
			this.right = null;
		} else {
			throw new Error('incorrect child');
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
		var parentOfParent = parent.parent;
		var parentLeft = parent.left;
		var parentRight = parent.right;
		var left = this.left;
		var right = this.right;

		if (parentOfParent != null) {
			parentOfParent.removeChild(parent);
		}
		parent.removeChild(parentLeft);
		parent.removeChild(parentRight);
		this.removeChild(left);
		this.removeChild(right);

		if (parentOfParent != null) {
			parentOfParent.appendChild(this);
		}
		if (parentLeft == this) {
			this.appendChild(parent);
		} else {
			this.appendChild(parentLeft);
		}
		if (parentRight == this) {
			this.appendChild(parent);
		} else {
			this.appendChild(parentRight);
		}

		parent.appendChild(left);
		parent.appendChild(right);
	}
}


module.exports = Node;

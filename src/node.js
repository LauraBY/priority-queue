class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		if (this.left != null && this.right != null){
			return
		}
		
		if (this.left == null) {
			this.left = node;
		} else {
			this.right = node;
		}
	}

	removeChild(node) {

	}

	remove() {

	}

	swapWithParent() {

	}
}

module.exports = Node;

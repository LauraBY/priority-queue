const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
	}

	push(data, priority) {
   var node = new Node(data, priority);
	 this.insertNode(node);
	 this.shiftNodeUp(node);
	}

	pop() {

	}

	detachRoot() {
		var root = this.root;
		var rootIndex = this.parentNodes.indexOf(root);

		if(rootINdex >=0){
			this.parentNodes.splice(rootIndex, 1);
		}
		this.root = null;

		return root;
	}

	restoreRootFromLastInsertedNode(detached) {

	}

	size() {

	}

	isEmpty() {
		return (this.root ==null)
	}

	clear() {
		this.root = null;
		this.parentNodes =[];
	}

	insertNode(node) {
		if (this.root == null){
			 this.root = node;
		} else{
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

			if(nodeIndex >= 0) {
				this.parentNodes[nodeIndex] = parent;
			}

			if (parentIndex >= 0){
				this.parentNodes[parentIndex] = node;
			}

			node.swapWithParent();
			this.shiftNodeUp(node);
		}

		if (node.parent ==null){
			this.root = node;
		}
	}

	shiftNodeDown(node) {

	}
}

module.exports = MaxHeap;

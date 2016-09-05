const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		if (typeof maxSize == 'undefined') {
			maxSize = 30
		}

		this.maxSize = maxSize;
		this.queueSize = 0;
		this.heap = new MaxHeap();
	}

	push(data, priority) {
		if (this.queueSize < this.maxSize) {
			this.heap.push(data, priority);
			this.queueSize = this.queueSize + 1;
		} else {
			throw new Error("No capacity");
		}
	}

	shift() {
		if (this.queueSize == 0) {
			throw new Error("Queue is empty");
		}

		var data = this.heap.pop();
		this.queueSize = this.queueSize - 1;
		return data
	}

	size() {
		return this.queueSize;
	}

	isEmpty() {
		return (this.queueSize == 0)
	}
}

module.exports = PriorityQueue;

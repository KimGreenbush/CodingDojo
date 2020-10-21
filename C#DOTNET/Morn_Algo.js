class DLNode {
	constructor(val) {
		this.value = val;
		this.prev = null;
		this.next = null;
	}
}

class DLList {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	isEmpty() {
		return this.head == null;
	}

	// Write a method that will add to the front of our doubly linked list
	addToFront(value) {
		let newNode = new DLNode(value);
		if (this.isEmpty()) {
			this.head = newNode;
			this.tail = newNode;
			return this;
		}
		this.head.prev = newNode;
		newNode.next = this.head;
		this.head = newNode;
		return this;
	}

	// Write a method that will add to the back of our doubly linked list
	addToBack(value) {
		// if empty set value as new node as head
		let newNode = new DLNode(value);
		if (this.isEmpty()) {
			this.head = newNode;
			this.tail = newNode;
			return this;
		}
		newNode.prev = this.tail;
		this.tail.next = newNode;
		this.tail = newNode;
		return this;
	}

	// seedFromArr(arr) {
	// 	arr.forEach((el) => {
	// 		this.addToBack(el);
	// 	});
	// 	return this;
	// }

	// Write a method that will remove a node with a given value from our list.
	// If no node with that value exists, return null. If that node is removed, return true
	removeNode(value) {
		if (this.isEmpty()) {
			return false;
		}
		if (this.head.value === value) {
			this.head = null;
			this.tail = null;
			return true;
		}
		let runner = this.head;
		while (runner.next !== null) {
			if (runner.value === value) {
				runner.prev.next = runner.next;
				runner.next.prev = runner.prev;
				return true;
			}
			runner = runner.next;
		}
		return false;
	}
}

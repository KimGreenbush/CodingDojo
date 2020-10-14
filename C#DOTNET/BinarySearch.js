class BSNode {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

// EXAMPLE TREE AS COMMENT
/*
                    root
                <-- 25 -->
              /            \
            15             50
          /    \         /    \
        10     22      35     70
      /   \   /  \    /  \   /  \
    4    12  18  24  31  44 66  90
*/
class BSTree {
	constructor() {
		this.root = null;
	}

	// Write a method that will return a boolean based on whether or not the tree is empty
	isEmpty() {
		return this.root == null;
	}

	// Write a method that will find the smallest value in the binary search tree
	min() {
		if (!this.isEmpty()) {
			let runner = this.root;
			while (runner.left != null) {
				runner = runner.left;
			}
			return runner.value;
		}
		return null;
	}

	// Write a method that will find the largest value in the binary search tree
	max() {
		if (!this.isEmpty()) {
			let runner = this.root;
			while (runner.right != null) {
				runner = runner.right;
			}
			return runner.value;
		}
		return null;
	}

	// Here's a method that will actually print the binary search tree out in a readable manner
	printTree() {
		if (this.root == null) {
			console.log("This tree is empty.");
			return this;
		}

		this.printHelper("", this.root);
	}
	printHelper(toPrint = "", runner) {
		if (runner == null) {
			return this;
		}

		toPrint += "\t";
		this.printHelper(toPrint, runner.right);
		console.log(`${toPrint}${runner.value}`);
		this.printHelper(toPrint, runner.left);
	}

	// Write a method that determines whether or not the binary search tree contains a node with a given value
	contains(value) {
		// if (this.isEmpty()) { //not necessary
		// 	return null;
		// }
		// if (this.root.value == value) {
		// 	return true
		// }
		let runner = this.root;
		while (runner != null) {
			if (runner.value == value) {
				return true;
			}
			if (runner.value > value) {
				runner = runner.left;
			}
			if (runner.value < value) {
				runner = runner.right;
			}
		}
		return false;
	}

	// Write a method that determines and returns the range of the binary search tree.
	// The range of a BST is the difference between the largest and smallest elements.
	range() {
		if (this.isEmpty()) {
			return null;
		}
		return this.max() - this.min();
	}

	// Write a method that adds a new node to the binary search tree in the appropriate place
	// REMEMBER!! greater than or equal to the right, less than to the left!
	insert(value) {
		let lagger = this.root
		let runner = this.root;
		let choice;
		while (runner != null) {
			lagger = runner
			if (runner.value > value) {
				runner = runner.left
				choice = 0
			}
			else if (runner.value < value || runner.value == value) {
				runner = runner.right
				choice = 1
			}
		}
		if (choice == 0) {
			lagger.left = new BSNode(value)
		} else {
			lagger.right = new BSNode(value)
		}
		return this
	}

	// BONUS:
	// The same as above, but recursively!
	insertRecursive(value /* and any other parameters you may need */) {}
}

let myTree = new BSTree();
myTree.root = new BSNode(10);
myTree.root.left = new BSNode(4);
myTree.root.right = new BSNode(12);
myTree.root.left = new BSNode(4);
// myTree.root.left.left = new BSNode(2);
myTree.root.left.right = new BSNode(7);
myTree.root.right = new BSNode(12);
myTree.root.right.left = new BSNode(11);
// myTree.root.right.right = new BSNode(17);

// console.log(myTree.isEmpty());
// console.log(myTree.min());
// console.log(myTree.max());
console.log(myTree.range());
// console.log(myTree.contains(7));

myTree.printTree()
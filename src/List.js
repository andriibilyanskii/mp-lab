class SinglyLinkedListNode {
	constructor() {
		this.data = 0;
		this.next = null;
	}
}

class ListController {
	listNodes = [];

	addNode(data) {
		let node = new SinglyLinkedListNode();
		node.data = this.listNodes.length + 1;
		node.next = null;

		let listTemp = this.listNodes;
		if (listTemp.at(-1)) {
			let lastNode = this.listNodes.at(-1);
			lastNode = { ...lastNode, next: node };
			listTemp.pop();
			listTemp.push(lastNode);
		}
		listTemp.push(node);

		if (listTemp.length > 1) {
			let listReversed = listTemp.reverse();

			for (let i = 0; i < listReversed.length; i++) {
				listReversed[i] = { ...listReversed[i], next: listReversed[i - 1] };
			}

			this.listNodes = listReversed.reverse();
		}
	}

	printList(n) {
		let list = [];

		while (n != null) {
			list.push({ data: n.data, next: n.next });
			n = n.next;
		}

		return list;
	}

	getFirstNode() {
		return this.listNodes[0];
	}

	getListNodes() {
		return this.listNodes;
	}
}

export { ListController };

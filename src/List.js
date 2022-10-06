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

		// let node = { data: this.listNodes.length + 1, next: null };

		let listTemp = this.listNodes;
		if (listTemp.at(-1)) {
			let lastNode = this.listNodes.at(-1);
			lastNode = { ...lastNode, next: node };
			listTemp.pop();
			// console.log('last', lastNode);
			// console.log('this', node);
			listTemp.push(lastNode);
		}
		listTemp.push(node);

		let listReversed = listTemp.reverse();
		// console.log(listReversed.map((e) => e.data));
		// listReversed = listReversed.map((e, i) => {
		// 	if (i !== 0) {
		// 		console.log(e, listReversed[i - 1]);
		// 		return { ...e, next: listReversed[i - 1] };
		// 	}

		// 	return e;
		// });

		for (let i = 0; i < listReversed.length; i++) {
			listReversed[i] = { ...listReversed[i], next: listReversed[i - 1] }
		}

		console.log();
		// listTemp = listTemp.map((element) => {});

		this.listNodes = listReversed.reverse();
	}

	printList(n) {
		let list = [];

		while (n != null) {
			// list.push(n.data);
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

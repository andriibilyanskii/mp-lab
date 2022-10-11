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
		node.data = data;
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

	sort() {
		if (this.listNodes.length) {
			let listTemp = this.listNodes.map((e) => e.data);

			listTemp.sort((a, b) => {
				const dataA = String(a).toUpperCase();
				const dataB = String(b).toUpperCase();
				if (dataA < dataB) {
					return -1;
				}
				if (dataA > dataB) {
					return 1;
				}

				return 0;
			});

			if (listTemp.length > 1) {
				let listReversed = listTemp.reverse();

				for (let i = 0; i < listReversed.length; i++) {
					listReversed[i] = { data: listReversed[i], next: listReversed[i - 1] };
				}

				this.listNodes = listReversed.reverse();
			}
		}

		return this.listNodes;
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

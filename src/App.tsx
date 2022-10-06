import React, { useState, useEffect } from 'react';
// import Tree from 'react-d3-tree';
// import { Tree } from 'react-tree-graph';
import 'react-tree-graph/dist/style.css';
import { ListController } from './List';
import './App.scss';

function App() {
	const [list, setList] = useState(new ListController());
	const [listNodes, setListNodes] = useState<any>([{}]);
	const [i, setI] = useState(0);

	// useEffect(() => {
	// 	setListNodes(list.getListNodes());
	// });

	const createTree = (data) => {
		if (data.next) {
			return (
				<ul>
					<li>
						<p>data: {data.data}</p>
						<p>next: </p>
						{createTree(data.next)}
					</li>
				</ul>
			);
		} else {
			return <p>{data.data}</p>;
		}
	};

	return (
		<div>
			<div className='list'>
				{/* <ul>
					{listNodes[0].map((e) => (
						<li key={Date.now()}>{}</li>
					))}
				</ul> */}
				<ul>{createTree(listNodes[0])}</ul>
				{/* <Tree data={listNodes[0]} /> */}
				{/* <Tree data={listNodes[0]} height={400} width={400} />; */}

				{/* {JSON.stringify(listNodes[0])} */}
			</div>
			<div className='buttons'>
				<button
					className='button'
					onClick={() => {
						list.addNode(new Date().toISOString());
						setList(list);
						setListNodes(list.getListNodes());
						setI(i + 1);
						console.log(listNodes);
					}}
				>
					Додати елемент
				</button>
			</div>
		</div>
	);
}
export default App;

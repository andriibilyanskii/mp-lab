import React, { useState } from 'react';
import { ListController } from './List';
import './App.scss';

function App() {
	const [list, setList] = useState(new ListController());
	const [listNodes, setListNodes] = useState([{}]);
	const [i, setI] = useState(0);
	const [value, setValue] = useState(listNodes.length);

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
			return (
				<ul>
					<li>
						<p>data: {data.data}</p>
					</li>
				</ul>
			);
		}
	};

	const addElement = (e) => {
		e.preventDefault();
		list.addNode(value);
		setList(list);
		setListNodes(list.getListNodes());
		setI(i + 1);
		console.log(listNodes);
		setValue(listNodes.length);
	};

	return (
		<div>
			<div className='list'>{!!i && <ul>{createTree(listNodes[0])}</ul>}</div>
			<div className='add'>
				<form onSubmit={addElement}>
					<input
						type='text'
						value={value}
						onChange={(e) => setValue(e.target.value)}
					/>
					<button className='button' type='submit'>
						Додати елемент
					</button>
				</form>
			</div>
		</div>
	);
}
export default App;

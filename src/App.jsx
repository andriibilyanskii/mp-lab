import React, { useState, useRef } from 'react';
import { ListController } from './List';
import './App.scss';

function App() {
	const [list, setList] = useState(new ListController());
	const [listNodes, setListNodes] = useState([{}]);
	const [i, setI] = useState(0);
	const [value, setValue] = useState(listNodes.length);
	const ref = useRef();

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
		list.addNode(value || listNodes.length + 1);
		setList(list);
		setListNodes(list.getListNodes());
		setI(i + 1);
		setValue('');
		console.log('Додано новий елемент:', listNodes);
		ref.current.focus();
	};

	const sort = () => {
		const sorted = list.sort();
		setList(list);
		setListNodes(list.getListNodes());
		setI(i + 1);
		console.log('Посортовано:', sorted);
	};

	return (
		<div>
			<div className='add-sort'>
				<form onSubmit={addElement}>
					<input
						type='text'
						ref={ref}
						value={value}
						placeholder={listNodes.length + 1}
						onChange={(e) => setValue(e.target.value)}
					/>
					<button className='button' type='submit'>
						Додати елемент
					</button>
				</form>
				<button className='button' onClick={sort}>
					Сортувати
				</button>
			</div>
			<div className='list'>{!!i && <ul>{createTree(listNodes[0])}</ul>}</div>
		</div>
	);
}
export default App;

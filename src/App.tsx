import React, {
	useState,
	// useEffect
} from 'react';
import './App.scss';
import { ListController } from './List';

function App() {
	const [list] = useState(new ListController());
	// const [listNodes, setListNodes] = useState(list.getListNodes());

	// useEffect(() => {
	// 	setListNodes(list.getListNodes());
	// }, [list]);

	return (
		<div>
			<button
				onClick={() => {
					list.addNode(new Date().toISOString());
					// setListNodes(list.getListNodes());
				}}
			>
				Add Node
			</button>
			{/* {listNodes.map((e) => (
				<div key={e.data}>{JSON.stringify(e)}</div>
			))} */}
			<button
				onClick={() => {
					console.log(list.getListNodes());
				}}
			>
				Print
			</button>
		</div>
	);
}
export default App;

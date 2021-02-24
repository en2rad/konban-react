import './App.css';
import Column from './components/Column'
import React, { useState } from 'react';
import Context from './components/Context'

function App() {
	const [data, setData] = useState({
		columns: [
			{
				name: 'Todo',
				tasks: [
					{
						id: 1,
						user: "Aleksey",
						title: "1 work hw",
						text: "just do it just do it just do it just do it",
						date:  "24.02.2021",
						comment: '',
					},
					{
						id: 2,
						user: "Aleksey",
						title: "2 work hw",
						text: "just do it just do it just do it just do it",
						date:  "24.02.2021",
						comment: '',
					}
				]
			},
			{
				name: 'In Progress',
				tasks: [
					{
						id: 3,
						user: "Aleksey",
						title: "3 work hw",
						text: "just do it just do it just do it just do it",
						date:  "24.02.2021",
						comment: '',
					},
				]
			},
			{
				name: 'Done',
				tasks: [
					{
						id: 4,
						user: "4 Aleksey",
						title: "work hw",
						text: "just do it just do it just do it just do it",
						date:  "24.02.2021",
						comment: '',
					},
				]
			},
		]
	});

	function clearColumn(columnIndex) {
		setData(prev => {
			const { columns } = prev
			columns[columnIndex].tasks.splice(0, (columns[columnIndex].tasks).length )
			return { columns }
		})
	}

	function deleteTask(columnIndex, taskIndex) {
		setData(prev => {
			const { columns } = prev
			columns[columnIndex].tasks.splice(taskIndex, 1)
			return { columns }
		})
	}

	function moveTask(columnIndex, taskIndex) {
		setData(prev => {
			const { columns } = prev
			const task = columns[columnIndex].tasks.splice(taskIndex, 1)
			if((columnIndex + 1) === columns.length) {
				columns[0].tasks.push(...task)
			} else {
				columns[columnIndex + 1].tasks.push(...task)
			}
			return { columns }
		})
	}

	function createTask(user, title, text) {
		setData(prev => {
			const { columns } = prev
			const task = {
			 	id: Math.random().toLocaleString(36).substr(2, 16),
				user: user,
				title: title,
				text: text,
				date: new Date().toLocaleDateString(),
				comment: '',	
			}
			columns[0].tasks.push(task)
			return { columns }
		})
	}	

	return (
		<Context.Provider value={{ createTask, moveTask, deleteTask }}>
			<div className="wrapper">
				<div className="board-canvas">
					{data.columns.map((column, columnIndex) => {
						return <Column column={column} columnIndex={columnIndex} clearColumn={clearColumn}key={columnIndex}/> 
					})}
				</div>
			</div>
		</Context.Provider>
	);
}

export default App;

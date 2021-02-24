import React, {useState} from 'react';
import { Paper, makeStyles, Button } from "@material-ui/core";
import Task from './Task'
import FromTask from './FromTask'


const useStyles = makeStyles({
    createTask: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '15px',
        border: '1px solid',
        margin: '15px',
    },

})

function Column({column, columnIndex, clearColumn}) {
    const classes = useStyles();
    const [form, setFrom] = useState(false)

    return (
        <div className="board-canvas__colum colum colum--todo">
			<div className="colum__header">
				<h2 className="colum__title">{column.name}</h2>
				<div className="colum__counter">{(column.tasks).length}</div>	
			</div>
				
			<div className="colum__body">
                { form && 
                    <FromTask onClose={setFrom}/>
                }

                {column.tasks.map((task, taskIndex) => {
                    return <Task task={task} taskIndex={taskIndex} key={taskIndex} columnIndex={columnIndex}/> 
                })}
			</div>

			<div className="colum__footer">
				{columnIndex === 0 && 
                    <button onClick={() => setFrom(true)}  className="colum__footer-btn btn-primary">Create new</button>
                }
       
				<button onClick={() => clearColumn(columnIndex)} className="colum__footer-btn btn-primary">Clean all</button>
			</div>		
		</div>	  
    )
}

export default Column
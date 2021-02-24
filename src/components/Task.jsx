import React, { useContext} from 'react';
import { Card } from "@material-ui/core";
import Context from './Context'
function Task( { task, taskIndex, columnIndex } ) {
    // console.log(task)
    const { deleteTask } = useContext(Context)
    const { moveTask } = useContext(Context)
    
    return (
       <div className="colum__item card">	
            <div className="card__header">
                <h4 className="card__user-name">{task.user}</h4>
                <span className="card__create-date">{task.date}</span>
            </div>
            <div className="card__body">
                <h4 className="card__title">{task.title}</h4>
                <p className="card__text">
                {task.text}
                </p>    
            </div>
            <div className="card__footer">
                <button onClick={() => deleteTask(columnIndex, taskIndex)} className="card__btn btn-primary">Delete</button>
                <button onClick={() => moveTask(columnIndex, taskIndex)} className="card__btn btn-primary">></button>
            </div>
        </div>
    )
}

export default Task
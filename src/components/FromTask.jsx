import React, { useState, useContext } from 'react';
import {Card, makeStyles, TextField, Button } from "@material-ui/core";
import SelectUsers from './SelectUsers'
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import Context from './Context'

const useStyles = makeStyles({
    createTask: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '15px',
        border: '1px solid',
        margin: '15px',
    },
    margin: {
        margin: '10px 0',
    }
})

function FromTask({onClose}) {
    const [user, setUser] = useState('')
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    
    const { createTask } = useContext(Context)


    const classes = useStyles();
   
    function saveTask(ev) {
      
        ev.preventDefault()
        if (title.trim() && text.trim()) {
            createTask(user, title, text)
            setUser('')
            setTitle('')
            setText('')
            onClose(false)
        }
    }

    function closeTaskFrom() {
        onClose(false)
        setUser('')
        setTitle('')
        setText('')
    }

    return (
        <div className="colum__item card">  
            <form onSubmit={(ev) => saveTask(ev)} className="card__form">
                <div className="card__header card__header--form">
                    <SelectUsers onChange={setUser}/>
                </div>
                <div className="card__body">
                    <label className="card__label">Task title</label>
                    <input  onChange={ev => setTitle(ev.target.value)} className="card__input" type="text"/>

                    <label className="card__label">Task</label>
                    <textarea  onChange={ev => setText(ev.target.value)} className="card__textarea" type="text"></textarea>
                </div>
                <div className="card__footer">
                    <button type="submit" className="card__btn btn-primary">Create</button>
                    <button onClick={() => closeTaskFrom(false)} className="card__btn btn-primary">Delete</button>
                </div>
            </form> 
        </div>
    )
}

export default FromTask



{/* <Card className={classes.createTask}>
<form action="" onSubmit={saveTask}>
    <SelectUsers onChange={setUser}/>
    <TextField 
        value={title} 
        onChange={e => setTitle(e.target.value)} 
        className={classes.margin}
        id="outlined-basic" 
        label="Title" 
        variant="outlined" 
    />
    <TextField
        value={Text} onChange={e => setText(e.target.value)}
        className={classes.margin}
        id="outlined-multiline-static"
        label="Multiline"
        multiline
        rows={4}
        defaultValue="Default Value"
        variant="outlined"
    />
    <div  className={classes.margin}>
        <Button
            variant="contained"
            color="secondary"
            className="{classes.button}"
            startIcon={<DeleteIcon />}
        >
            Delete
        </Button>
    
        <Button
            type="submit"
            variant="contained"
            color="primary"
            className="{classes.button}"
            endIcon={<SaveIcon>Save</SaveIcon>}
        >
            Save
        </Button>
    </div>
</form>
</Card> */}
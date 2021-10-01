import React, { useState, useEffect } from 'react';

const initialFormValues = {
    title: '',
    description: ''
}

const TodoForm = ({ todoAdd, todoEdit, todoUpdate, setTodoEdit }) => {

    const [formValues, setFormValues] = useState(initialFormValues)
    const {title, description} = formValues
    const [error, setError] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null)

    useEffect( () => {
        
        if(todoEdit) {
            setFormValues(todoEdit)
        }

        else {
            setFormValues(initialFormValues)
        }

    }, [todoEdit])

    const handleInputChange = (e) => {

        const changedFormValues = {
            ...formValues,
            [e.target.name] : e.target.value
        }

        setFormValues(changedFormValues)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(title.trim() === '') {
            setError('Inserire un titolo')
            return
        }

        if(description.trim() === '') {
            setError('Inserire una descrizione')
            return
        }
       
        if(todoEdit) {
            todoUpdate(formValues)
            setSuccessMessage('Aggiornato con successo')
        }
        
        else {
            todoAdd(formValues)
            setSuccessMessage('Aggiunto con successo')
            setFormValues(initialFormValues)
        }


        setTimeout( () => {
            setSuccessMessage(null)
        }, 2000)

        setError(null)
    }

    return(
        <div className="m-3">
            <h2>{ todoEdit ? 'Edit task' : 'New task'}</h2>

            {
                todoEdit && 
                <button
                    onClick={() => setTodoEdit(null)}
                    className="btn btn-sm btn-warning mb-3"
                > Annulla 
                </button>
            }

            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="Titolo"
                    className="form-control mb-3"
                    value={title}
                    name="title"
                    onChange={handleInputChange}
                />

                <textarea
                    placeholder="Descrizione"
                    className="form-control mb-3"
                    value={description}
                    name="description"
                    onChange={handleInputChange}
                >
                </textarea>

                <button
                    className="btn btn-primary"
                >
                    {todoEdit ? 'Aggiorna' : 'Aggiungere'}
                </button>
            </form>

            {
                error &&
                (
                    <div className="alert alert-danger mt-3">
                        {error}
                    </div>
                )
            }

            {
                successMessage && (
                    <div className="alert alert-success mt-3">
                        {successMessage}
                    </div>
                )
            }
        </div>
    )
}

export default TodoForm
import React from 'react';

const Todo = ({ todo, todoDelete, todoToogleCompleted, setTodoEdit }) => {
    return(
        <div className="card mb-3">
            <div className="card-body">
                <h3 className="card-title text-right">
                    {todo.title}
                    <button
                        onClick={() => todoToogleCompleted(todo.id)}
                        className={`btn btn-sm ${todo.completed ? 'btn-outline-success' : 'btn-success'} m-1`}
                    >
                        { todo.completed ? 'Fatto' : 'Da Fare'}
                    </button>
                </h3>
                <p className="card-text text-right">
                    {todo.description}
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                    <button
                        onClick={() => setTodoEdit(todo)}
                        className="btn btn-sm btn-outline-primary m-1">
                        Edit
                    </button>
                    <button
                        onClick={() => todoDelete(todo.id)}
                        className="btn btn-sm btn-outline-danger m-1">
                            Eliminare
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Todo;
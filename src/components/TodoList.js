import React from 'react';
import Todo from './Todo'; 

const TodoList = ({ todos, todoDelete, todoToogleCompleted, setTodoEdit }) => {

    return(
        <div className="m-3">
            <h2 className="text-right">To Do List</h2>

            {
                todos.length === 0
                ? (
                    <div className="alert alert-primary">
                        Nessuna attività
                    </div>
                )
                : (
                    todos.map(todo => (
                        <Todo 
                            todo={todo} 
                            key={todo.id}
                            todoDelete={todoDelete}
                            todoToogleCompleted={todoToogleCompleted}
                            setTodoEdit={setTodoEdit}
                        />
                    ))
                )
            }
        </div>
    )
}

export default TodoList
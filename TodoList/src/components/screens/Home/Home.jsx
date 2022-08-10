import React, { useState } from 'react'
import CreateTodoField from './create-todo-field/CreateTodoField'
import TodoItem from './TodoItem'

const data = [
    {
        _id:"2",

        title: "lorem ewfwefwefr23r",
        isCompleted: false

    },
    {
        _id:"3",
        title: "finish the school",
        isCompleted: false
    }
]


const Home = () => {

    const [todos,setTodos]= useState(data)


    const  changeTodo =id=>{
        const copy =[...todos]

        const current=copy.find (t=> t._id=== id)
        current.isCompleted=!current.isCompleted
        setTodos(copy)
    }


    // const  removeTodo = (id) =>{
    //     const newArr = todos.filter(item => item._id != id)
    //     console.log(newArr)
    //     setTodos(prev => prev.filter(item => item._id != id))
    // }

    const removeTodo = (id) =>{
        setTodos(todos.filter(todo =>todo._id !== id))
    }
    return (
        <div className=' text-white w-4/5 mx-auto'>
        <h1 className='text-2xl font-bold text-center mb-10 mt-5'>
            Список заметок
        </h1>
        <CreateTodoField setTodos={setTodos}/>

            {
                todos.map(todo =>
                (
                    <TodoItem
                     key={todo._id}
                      todo={ todo } 
                      changeTodo={changeTodo}
                      removeTodo={removeTodo}
                       />


                ))
            }
        </div>
    )
}

export default Home
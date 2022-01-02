import React,{useEffect, useState} from 'react'
import CreateTask from '../modals/createTask'
import Card from '../components/Card'

function TodoList() {
    const [modal, setModal] = useState(false)
    const [taskList, setTaskList] = useState([])
    
    const toggle =()=>{
        setModal(!modal)
    }
    const saveTask = (taskObj) =>{
        let tempList = taskList
        tempList.push(taskObj)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        setModal(false)
    }
    useEffect(()=>{
        let arr= localStorage.getItem("taskList")
        
        if(arr){
            let obj = JSON.parse(arr)
            setTaskList(obj)
        }
    },[])
    const deleteTask = (index)=>{
        let templist =taskList
        templist.splice(index,1)
        localStorage.setItem("taskList", JSON.stringify(templist))
        setTaskList(templist)
        window.location.reload()
    }
    const updateListArray =(obj, index) =>{
        let tempList =taskList
        tempList[index] = obj
        localStorage.setItem("taskList",JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }
    return (
        <>
        <div className="header text-center">
            <h3 className="pt-5">Todo List</h3>
            <button className="btn btn-primary mt-2" onClick={()=> setModal(true)}>Create Task</button>
        </div>
        <div className="task-container">
            {taskList.map((obj,index)=> <Card index={index} taskObj={obj} deleteTask={deleteTask} updateListArray={updateListArray}/>)}
        </div>
        <CreateTask toggle ={toggle} modal={modal} save={saveTask}/>
        </>
    )
}

export default TodoList

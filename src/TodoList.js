import { Component, Fragment } from "react";
import TodoBorder from "./TodoBorder"
import './style.css'



class TodoList extends Component {
    constructor(props) {
        super(props)
        const taskList = localStorage.getItem('taskList')
        const competedList = localStorage.getItem('completedList')
        this.state = {
            inputValue: '',
            taskList: taskList ? JSON.parse(taskList) : [],
            completedList: competedList ? JSON.parse(competedList) : []
        }
    }
    keyDown = (e) => {
        if (e.keyCode === 13) {
            this.addTask()
        }
    }

    handleInput = (e) => {
        this.setState(() => {
            return { inputValue: e.target.value }
        })
    }

    addTask = () => {
        if (this.state.inputValue !== '') {
            this.setState((prevState) => {
                return {
                    taskList: [...prevState.taskList, this.state.inputValue],
                    inputValue: ''
                }
            })
        }
    }

    handleClick = (index) => {
        const moveItem = this.handleDelete(index)
        this.setState((prevState) => {
            return {
                completedList: [...prevState.completedList, moveItem]
            }
        })
    }
    handleItemClick = (index) => {
        const moveItem = this.handleItemDelete(index)
        this.setState((prevState) => {
            return {
                taskList: [...prevState.taskList, moveItem]
            }
        })
    }
    handleDelete = (index) => {
        this.setState((prevState) => {
            const newTaskList = [...prevState.taskList]
            newTaskList.splice(index, 1)
            return {
                taskList: newTaskList
            }
        })
        return this.state.taskList[index]
    }
    handleItemDelete = (index) => {
        this.setState((prevState) => {
            const newTaskList = [...prevState.completedList]
            newTaskList.splice(index, 1)
            return {
                completedList: newTaskList
            }
        })
        return this.state.completedList[index]
    }
    listener = (e) => {
        localStorage.setItem('taskList', JSON.stringify(this.state.taskList))
        localStorage.setItem('completedList', JSON.stringify(this.state.completedList))

    }
    componentDidMount() {
        window.addEventListener('beforeunload', this.listener)
    }

    render() {
        return (
            <Fragment>
                <div className='header'>
                    <div className='wrapper'>
                        <div className='nav'>ToDoList</div>
                        <input className='input' placeholder="添加todo" value={this.state.inputValue} onChange={this.handleInput} onKeyDown={this.keyDown} maxLength="25" />
                        <button className='button' onClick={this.addTask}>添加</button>
                    </div>
                </div>
                <div className="context">
                    <div className='taskList'>
                        <TodoBorder title='正在进行'
                            taskList={this.state.taskList} handleDelete={this.handleDelete} handleClick={this.handleClick} checked='' />
                        <TodoBorder title='已经完成' taskList={this.state.completedList} handleDelete={this.handleItemDelete} handleClick={this.handleItemClick} checked='checked' />
                    </div>
                    <div className='copyright'>
                        Created by WXC<br />
                        Copyright © 2021
                    </div>
                </div>
            </Fragment>
        )
    }

}

export default TodoList
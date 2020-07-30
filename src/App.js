import React, { Component } from 'react';
import './App.css';

class App extends Component{

  constructor(props){
    super(props)

    this.state = {
      todo: [
        {
          id: 1,

          text: 'get lunch'
        },
        {
          id: 2,
          text: 'stream some ranked valorant'
        },
        {
          id: 3,
          text: 'Dua Lipa Auckland concert.'
        },
      ],
      todoInputValue : ''
    }
  
  }

  handletodoInputChange = (e)=>{
    this.setState({todoInputValue:e.target.value})
    
  }

  handleAddButtonClick = (e)=>{
    e.preventDefault()
    var todo = {
      id:Date.now(),
      text:this.state.todoInputValue
    }

    var newtodo = [todo, ...this.state.todo]

    this.setState({
      todo:newtodo,
      todoInputValue : ''
    })
  }

  handletodoDelete = (e)=>{
    var todoIdToDelete = parseInt(e.target.id)
    var todo = this.state.todo


    var filteredtodo = todo.filter((item)=>{
      return item.id !== todoIdToDelete
    })

    this.setState({todo:filteredtodo})
  }


  render() {
    return (
      <div className="wrap">
        <div className="container">
          <h1>Hello stonye<br />Try and do something today 🤔</h1>
          <div className="todo">
          <div className="todo new-todo">
                  <div className="form-group">
                      <label htmlFor="todo-input">
                          Add a new todo
                      </label>
                  </div>
                      <div className="group-flex">
                      <input type="text" className="form-control" id="todo-input" placeholder="got something to do?" value={this.state.todoInputValue} onChange={this.handletodoInputChange} />
                      <button type="submit" className="btn btn-primary" onClick={this.handleAddButtonClick}> Add </button>
                    </div>  
              </div>
  
            {
              this.state.todo.map(todo=>{
                return (
                        
                        <div className="todo" key={todo.id}>
                          <div className="todo-body">
                            <i id={todo.id} className="far fa-times-circle todo-remove" onClick={this.handletodoDelete} ></i>
                            <div className="todo-text">
                            {todo.text}
                            </div>
                          </div>
                        </div>
                      )
                })
            }

          </div>
        </div>
      </div>
    );
  }
}



export default App;
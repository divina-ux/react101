import React, { Component } from 'react';
import './App.css';

class App extends Component{

  constructor(props){
    super(props)

    this.state = {
      notes: [
        {
          id: 1,

          text: 'try and finish before 3:30pm'
        },
        {
          id: 2,
          text: 'change the pink background its getting stale'
        },
        {
          id: 3,
          text: 'list item 3'
        },
        {
          id: 4,
          text: 'Dua Lipa Auckland concert.'
        },
        {
          id: 5,
          text: 'Go home'
        }
      ],
      noteInputValue : ''
    }
  
  }

  handleNoteInputChange = (e)=>{
    this.setState({noteInputValue:e.target.value})
    
  }

  handleAddButtonClick = (e)=>{
    e.preventDefault()
    var note = {
      id:Date.now(),
      text:this.state.noteInputValue
    }

    var newNotes = [note, ...this.state.notes]

    this.setState({
      notes:newNotes,
      noteInputValue : ''
    })
  }

  handleNoteDelete = (e)=>{
    var noteIdToDelete = parseInt(e.target.id)
    var notes = this.state.notes


    var filteredNotes = notes.filter((item)=>{
      return item.id !== noteIdToDelete
    })

    this.setState({notes:filteredNotes})
  }


  render() {
    return (
      <div className="wrap">
        <div className="container">
          <h1>Hello User<br />Try and do something today :)</h1>
          <div className="notes">
  
            {
              this.state.notes.map(note=>{
                return (
                  <div className="note" key={note.id}>
                    <div className="note-body">
                      <i id={note.id} className="far fa-times-circle note-remove" onClick={this.handleNoteDelete} ></i>
                      <div className="note-text">
                      {note.text}
                      </div>
                    </div>
                  </div>
              )
            })
          }
  
              <div className="note new-note">
                  <div className="form-group">
                      <label htmlFor="note-input">
                          Add a new note
                      </label>
                      <input type="text" className="form-control" id="note-input" value={this.state.noteInputValue} onChange={this.handleNoteInputChange} />
                  </div>
  
                  <button type="submit" className="btn btn-primary" onClick={this.handleAddButtonClick}> Add </button>
              </div>
          </div>
        </div>
      </div>
    );
  }
}



export default App;
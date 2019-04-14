import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoList from './components/ToDoItem'

// const styles = {
// 	fontSize: 20,
// 	backgroundColor: "black",
// 	}
// const date = new Date( )
// const hours = date.getHours( )
// let time

// if(hours < 12) {
// 	time = "morning"
// 	styles.color = "green"
// } else if(hours > 12 && hours < 17) {
// 	time = "afternoon"
// 	styles.color = "yellow"
// } else {
// 	time = "night"
// 	styles.color = "teal"
// }

const App = ( ) => (
	<div className="todo-list"> 
    	{/* <h1 style={styles}> Good {time}, date is {`${date}`} </h1>
	  	<h1 style={{color:"yellow"}}> I am enjoying react </h1> */}
		< ToDoList />
		< ToDoList />
		< ToDoList />
		< ToDoList />
  </div>
)

export default App;

import React, { Component } from "react";
import uuid from "uuid/v4";
import axios from "axios";
import moment from "moment";
import logo from './images/tasq_logo_6.png';
import Header from "./components/Header";
import Footer from "./components/Footer";
import ItemCount from "./components/ItemCount";
import AddItem from "./components/AddItem";
import Item from "./components/Item";
import Greet from "./components/Greet";
import Quantity from "./components/Quantity";
import "./App.css";

class App extends Component {
  state = {
    tasks: []
      // { text: "Book Flights", completed: true, date: "2019-10-21", id: uuid(), dueBy: "2019-11-18" },
      // { text: "Wash The Car", completed: false, date: "2019-10-23", id: uuid(), dueBy: "2019-11-13" },
      // { text: "Book Gym Session", completed: true, date: "2019-10-25", id: uuid(), dueBy: "2019-10-18" },
      // { text: "Purchase Fruit", completed: true, date: "2019-10-25", id: uuid(), dueBy: "2019-11-19" },
      // { text: "Organise Vets", completed: false, date: "2019-10-26", id: uuid(), dueBy: "2019-11-22" },
    
  };
componentDidMount() {
  axios.get("https://r8cberekcc.execute-api.eu-west-1.amazonaws.com/dev/tasks")
  .then((response) => {
    const tasks = response.data;
    this.setState({
      tasks: tasks
    })
 
  })
  .catch((err) => {
console.log("Error getting taks data", err);
})
}


  //This func should update the state with a new task
  addNewTask = (taskText, dueByDate) => {
    const tasksCopy = this.state.tasks.slice();

    const newTask = {
      text: taskText,
      completed: false,
      dateCreated: moment().format("YYYY-MM-DD"),
      // id: uuid(),
      dateDue: dueByDate,
      userId: 1
    };



    axios.post("https://r8cberekcc.execute-api.eu-west-1.amazonaws.com/dev/tasks", newTask)
      .then((response) => {
        const taskFromDB = response.data;
         tasksCopy.push(taskFromDB)

         this.setState({
         tasks: tasksCopy
      });
      })  

     .catch((err) => {
          console.log("Error creating task", err);
        });

  };

  deleteTask = id => {

    axios.delete("https://r8cberekcc.execute-api.eu-west-1.amazonaws.com/dev/tasks/" + id)
      .then(()=> {
        const filteredTasks = this.state.tasks.filter(task => {
      return task.taskId !== id
    });

      this.setState({
      tasks: filteredTasks
      });
    })
           
      .catch((err) => {  
    console.log(err);
  })
}

 

  completeTask = id => {
    const updatedTasks = this.state.tasks.map(task => {
      if (task.taskId === id) {
        task.completed = true;
      }

      return task;
    });

    this.setState({
      tasks: updatedTasks
    });
  }


  render() {
    const completedTasks = this.state.tasks.filter(task => {
      return task.completed;
    })
    const incompleteTasks = this.state.tasks.filter(task => {
      return task.completed ? false : true;
    });

    const styles = {
      padding: 20
    }
  

    return (

      <div className="container">

        <Header />  
        <Footer />
        <Greet />      
        <AddItem addNewTaskFunc={this.addNewTask} />
        <Quantity />
        <ItemCount count={this.state.tasks.length} />

        <h2 style={styles}>TASQs 2DO</h2>
        {incompleteTasks.map(task => {
          return (
            <Item text={task.text} completed={task.completed} key={task.taskId} deleteTaskFunc={this.deleteTask} id={task.taskId} completeTaskFunc={this.completeTask} date={task.dateCreated} dueBy={task.dateDue} />
          );
        })}

        <h2 style={styles}>TASQs DONE</h2>

        {completedTasks.map(task => {
          return (
            <Item text={task.text} completed={task.completed} key={task.id} deleteTaskFunc={this.deleteTask} id={task.id} date={task.dateCreated} dueBy={task.dateDue} />
          );
        })}
      </div>
    );
  }
}
export default App;
import React, { Component } from "react";
import uuid from "uuid/v4";
import moment from "moment";
import logo from './images/tasq_logo_6.png';
import Header from "./components/Header";
import Footer from "./components/Footer";
import ItemCount from "./components/ItemCount";
import AddItem from "./components/AddItem";
import Item from "./components/Item";
import Greet from "./components/Greet";
import "./App.css";

class App extends Component {
  state = {
    tasks: [
      { text: "Book Flights", completed: true, date: "2019-10-21", id: uuid(), dueBy: "2019-11-18"},
      { text: "Wash The Car", completed: false, date: "2019-10-23", id: uuid(), dueBy: "2019-11-13"},
      { text: "Book Gym Session", completed: true, date: "2019-10-25", id: uuid(), dueBy: "2019-10-18"},
      { text: "Purchase Fruit", completed: true, date: "2019-10-25", id: uuid(), dueBy: "2019-11-19"},
      { text: "Organise Vets", completed: false, date: "2019-10-26", id: uuid(), dueBy: "2019-11-22" },
    ]
  };
  //This func should update the state with a new task
  addNewTask = (taskText, dueByDate) => {
    const tasksCopy = this.state.tasks.slice();

    const newTask = {
      text: taskText,
      completed: false,
      date: moment().format("YYYY-MM-DD"),
      id: uuid(),
      dueBy: dueByDate
    };

    tasksCopy.push(newTask)
    this.setState({
      tasks: tasksCopy
    });
  }

    deleteTask = id => {
    const filteredTasks = this.state.tasks.filter(task => {
      return task.id !== id
    });

    this.setState({
      tasks: filteredTasks
    });
  }

  completeTask = id => {
    const updatedTasks = this.state.tasks.map(task => {
      if (task.id === id) {
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

   

    return (

      <div className="container">

        <Header />
        <Footer />
        <Greet />

        <AddItem addNewTaskFunc={this.addNewTask} />
        <ItemCount count={this.state.tasks.length} />

        <h2 style={{ padding: 20 }}>TASQs 2DO</h2>
        {incompleteTasks.map(task => {
          return (
            <Item text={task.text} completed={task.completed} key={task.id} deleteTaskFunc={this.deleteTask} id={task.id} completeTaskFunc={this.completeTask} date={task.date} dueBy={task.dueBy} />
          );
        })}

        <h2 style={{ padding: 20 }}>TASQs DONE</h2>

        {completedTasks.map(task => {
          return (
            <Item text={task.text} completed={task.completed} key={task.id} deleteTaskFunc={this.deleteTask} id={task.id} date={task.date} dueBy={task.dueBy} />
          );
        })}
      </div>
    );
  }
}
export default App;
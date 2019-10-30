import React, { Component } from "react";
import uuid from "uuid/v4";
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
      { text: "Book Flights", completed: true, date: "2019-10-21", id: uuid() },
      { text: "Wash The Car", completed: false, date: "2019-10-23", id: uuid() },
      { text: "Book Gym Session", completed: true, date: "2019-10-25", id: uuid() },
      { text: "Purchase Fruit", completed: true, date: "2019-10-25", id: uuid() },
      { text: "Organise Vets", completed: false, date: "2019-10-26", id: uuid() },
    ]
  }
  //This func should update the state with a new task
  addNewTask = taskText => {
    const tasksCopy = this.state.tasks.slice();
    const newTask = {
      text: taskText,
      completed: false,
      date: "2019-10-23",
      id: 6
    }
    tasksCopy.push(newTask)
    this.setState({
      tasks: tasksCopy
    });
  }


  render() {
    const completedTasks = this.state.tasks.filter(task => {
      return task.completed;
    })
    const incompletedTasks = this.state.tasks.filter(task => {
      return !task.completed;
    })
    console.log(completedTasks);
    console.log(incompletedTasks);

    return (

      <div className="container">

        <Header />
        <Footer />
        <Greet />


        <AddItem addNewTaskFunc={this.addNewTask} />

        <ItemCount count={this.state.tasks.length} />
        <h2>TASQs 2DO</h2>
        {incompletedTasks.map(task => {
          return <Item text={task.text} completed={task.completed} key={task.id} />
        })}
        <h2>TASQs DONE</h2>
        {completedTasks.map(task => {
          return <Item text={task.text} completed={task.completed} key={task.id} />
        })}
        <Item text="brush the cat" completed={true} />
      </div>
    );
  }
}
export default App;
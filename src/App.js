import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputTag from './components/InputTag';
import Modal from './components/Modal/Modal';
import AppDragDropDemo from './AppDragDropDemo';
import withBorder from './components/HOC/withBorder';


class App extends Component {
  state = {
    show: false,
  }

  showModal = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  }
  render() {
    let tasks = [
        {name:"Learn Angular",category:"wip", bgcolor: "yellow"},
        {name:"React", category:"wip", bgcolor:"pink"},
        {name:"Vue", category:"complete", bgcolor:"skyblue"}
      ]
    let WithBorderInput = withBorder (InputTag);

    return (
      <div className="App">
        <AppDragDropDemo tasks={tasks} />
      </div>
    );
  }
}

export default App;

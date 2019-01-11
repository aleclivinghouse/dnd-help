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
    let questions = [
        {name:"Learn Angular",category:"truth", bgcolor: "yellow"},
        {name:"React", category:"truth", bgcolor:"pink"},
        {name:"Vue", category:"lie", bgcolor:"skyblue"}
      ]
    let WithBorderInput = withBorder (InputTag);

    return (
      <div className="App">
        <AppDragDropDemo questions={questions} />
      </div>
    );
  }
}

export default App;

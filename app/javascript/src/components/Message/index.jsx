import React from 'react';
import actionCable from 'actioncable';
import { ToastContainer } from "react-toastify";

class Message extends React.Component {
  constructor() {
    super()
    this.state = {
      messages: []
    }
    this.cable = actionCable.createConsumer('ws://localhost:3000/cable')
  }

  componentDidMount() {
    // debugger
    this.fetch
    this.createSubscription()
  };

  fetchMessages = () => {
    fetch('http://localhost:3000/messages')
      .then(res => res.json())
      .then(messages => this.setState({ messages: messages }));
  }

  createSubscription = () => {
    this.cable.subscriptions.create(
      { channel: 'MessagesChannel' },
      { received: message => this.handleReceivedMessage(message) }
    )
  }

  mapMessages = () => {
    return this.state.messages.map((content, i) => 
      <li key={i}>{content.message}</li>)
  }

  handleReceivedMessage = message => {
    this.setState({ messages: [...this.state.messages, message] })
  }

  handleMessageSubmit = e => {
    e.preventDefault();
    const messageObj = {
      message: {
        content: e.target.message.value
      }
    }
    const fetchObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(messageObj)
    }
    fetch('http://localhost:3000/messages', fetchObj)
    e.target.reset()
  }

  render() {
    return (
      <div className='App'>
        <actionCable 
          channel={{ channel: 'MessagesChannel' }}
          onReceived={this.handleReceivedMessages}
        />
        <h2>Messages</h2>
        <ul>{this.mapMessages()}</ul>
      </div>
    );
  }
}

export default Message;

// SimpleTodos.js
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import './index.css';
import TodoItem from '../TodoItem';

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = { mainList: initialTodosList, inputValue: '' };

  deleteItem = (id) => {
    const { mainList } = this.state;
    const finalTodoList = mainList.filter((each) => each.id !== id);
    this.setState({ mainList: finalTodoList });
  };

  editItem = (id) => {
    const { mainList } = this.state;
    const updatedList = mainList.map((item) => {
      if (item.id === id) {
        return { ...item, editing: true };
      }
      return item;
    });
    this.setState({ mainList: updatedList });
  };

  saveItem = (id, updatedText) => {
  const { mainList } = this.state;
  const updatedList = mainList.map((item) => {
    if (item.id === id) {
      return { ...item, title: updatedText, editing: false };
    }
    return item;
  });
  this.setState({ mainList: updatedList });
};

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  handleAddTodo = () => {
    const { inputValue } = this.state;
    const numberOfTodos = parseInt(inputValue.match(/\d+$/)?.[0]) || 1;

    if (inputValue.trim() !== '') {
      const newTodos = Array.from({ length: numberOfTodos }, (_, index) => ({
        id: initialTodosList.length + index + 1,
        title: inputValue.trim(),
      }));

      this.setState((prevState) => ({
        mainList: [...prevState.mainList, ...newTodos],
        inputValue: '',
      }));
    }
  };

  render() {
    const { mainList, inputValue } = this.state;

    return (
      <div>
        <h1>Simple Todos</h1>
        <input
          type="text"
          value={inputValue}
          onChange={this.handleInputChange}
          placeholder="Enter todo text"
        />
        <button onClick={this.handleAddTodo}>Add</button>
        <ul>
          {mainList.map((eachUser) => (
            <TodoItem
              items={eachUser}
              key={eachUser.id}
              deleteItem={this.deleteItem}
              editItem={this.editItem}
              saveItem={this.saveItem}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default SimpleTodos;

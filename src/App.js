import React from 'react';
import './App.css';
import Header from './Components/Header';
import ListItems from './Components/ListItems';
import Item from './Components/Item';


class App extends React.Component {

  state = {
    items: [
      { id: 1, name: "tea", active: true },
      { id: 2, name: "potatoes", active: false },
      { id: 3, name: "coffee", active: false },
      { id: 4, name: "chocolate", active: false },
      { id: 5, name: "cake", active: false },
      { id: 6, name: "bread", active: true },
    ]
  }


  handleChangeStatus = (id) => {
    console.log(id);

    const items = this.state.items.map(item => {
      if (id === item.id) {
        item.active = !item.active
      }
      return item
    })

    this.setState({
      items: items
    })
  }


  render() {

    return (
      <React.Fragment>
        <Header content={this.state.items} />
        <ListItems content={this.state.items} changeStatus={this.handleChangeStatus} />
        <Item />
      </React.Fragment>



    );
  }
}








export default App;




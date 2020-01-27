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





  render() {

    return (
      <React.Fragment>
        <Header content={this.state.items} />
        <ListItems content={this.state.items} />
        <Item />
      </React.Fragment>



    );
  }
}








export default App;




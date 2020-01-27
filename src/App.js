import React from 'react';
import './App.css';
import ListItems from './Components/ListItems';
import Header from './Components/Header';
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
        <ListItems />
        <Item />
      </React.Fragment>



    );
  }
}








export default App;




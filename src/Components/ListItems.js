import React from 'react';
import Item from './Item';


const ListItems = (props) => {

    const items = props.content.map(item => (

        <Item
            key={item.id}
            id={item.id}
            name={item.name}
            active={item.active}
            changeStatus={props.changeStatus}
        />
    ))

    return (
        <div className="list">
            <h1>Your order</h1>

            <ul>

                {items}
            </ul>
        </div>
    );

}
















export default ListItems;
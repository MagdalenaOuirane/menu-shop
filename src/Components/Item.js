import React from 'react';

const Item = (props) => (

    <div>
        <li className={props.active ? 'enabled' : 'disabled'}
            onClick={() => props.changeStatus(props.id)}

        >{props.name}</li>

    </div>
)



//style={props.active ? { fontWeight: 'bold' } : { color: 'gray' }}








export default Item;
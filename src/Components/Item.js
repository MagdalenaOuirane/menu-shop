import React from 'react';

const Item = (props) => (

    <div>
        <li style={props.active ? { fontWeight: 'bold' } : { color: 'gray' }}
            onClick={() => props.changeStatus(props.id)}

        >{props.name}</li>

    </div>
)












export default Item;
import React from 'react';




const Header = (props) => {


    const activeItems = props.content.filter(item => item.active)


    return (
        <header>
            <h1>Order quantity : {activeItems.length}</h1>
            <h2>
                To pay : {activeItems.length ? `${activeItems.length * 10} złotych` : ' dont buy, dont pay'}

            </h2>
        </header>
    )
}

















export default Header;

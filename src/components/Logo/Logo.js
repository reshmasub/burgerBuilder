import React from 'react';
import burgerLogo from '../../../src/assets/images/burger-logo.png';
import classes from './Logo.css'
const logo = (props)=> (
    <div className={classes.Logo}>
        <img src={burgerLogo} alt="Reshma's Burger World"/>
    </div>
);

export default logo;
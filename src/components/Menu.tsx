import React from "react";
import { Link } from 'react-router-dom';

const Menu = () => <ul className="nav">
    <li><Link to='/'>главная</Link></li>
    <li><Link to='/prices'>цены</Link></li>
    <li><Link to='/contacts'>контакты</Link></li>
</ul>

export default Menu;
import React from "react";
import Menu from "./Menu";
import headerImage from '../source/img/header-image.svg'
import {PHONE_NUMBER, PHONE_URL} from "../constants/commonConstants";

import {Link} from 'react-router-dom';

const Header = () => <header className="App-header">
    <div className="header" >
        <Link to={'/'} className="header__image">
            <img src={headerImage} alt="М10"/>
        </Link>
        <div className="header__info">
            <div className="header__title-organization">
                <div><Link to={'/'}>Служба эвакуации&nbsp;</Link></div>
                <div><Link to={'/'}>"М10"</Link></div>
            </div>
            <a className="header__phone-number" href={PHONE_URL}>{PHONE_NUMBER}</a>
        </div>
    </div>
    <Menu/>
</header>

export default Header;
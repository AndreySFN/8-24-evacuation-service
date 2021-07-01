import React from "react";
import Menu from "./Menu";
import headerImage from '../source/img/header-image.svg'
import {PHONE_NUMBER, PHONE_URL} from "../constants/commonConstants";

const Header = () => <header className="App-header">
    <div className="header">
        <img className="header__image" src={headerImage} alt="8.24"/>
        <div className="header__info">
            <div className="header__title-organization">Служба эвакуации&nbsp;
                <div>"8.24"</div>
            </div>
            <a className="header__phone-number" href={PHONE_URL}>{PHONE_NUMBER}</a>
        </div>
    </div>
    <Menu/>
</header>

export default Header;
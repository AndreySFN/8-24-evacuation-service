import React from "react";
import Recall from "../components/Recall";
import "./main.scss"
import ProductCard from "../components/ProducCard";
import klinImg from '../source/img/products/klin.jpg'
import moscowImg from '../source/img/products/moscow.jpg'
import solnechnogorskImg from '../source/img/products/solnechnogorsk.jpg'
import zelenogradImg from '../source/img/products/zelenograd.jpg'

import {Link} from 'react-router-dom';

const Main = () => <div id="main_page">
    <div className='main_page__recall_container'>
        <Recall/>
    </div>
    <div id="main_content">
        <div id="main_content__products">
            <ProductCard
                imageUrl={klinImg}
                title={'Клин'}
                price={'2000'}
            />
            <ProductCard
                imageUrl={moscowImg}
                title={'Клин - Москва'}
                price={'5500'}
            />
            <ProductCard
                imageUrl={solnechnogorskImg}
                title={'Клин - Солнечногорск'}
                price={'3500'}
            />
            <ProductCard
                imageUrl={zelenogradImg}
                title={'Клин - Зеленоград'}
                price={'5000'}
            />
        </div>
        <button id="all_price_button"><Link to="/prices">СМОТРЕТЬ ВСЕ ЦЕНЫ</Link></button>
    </div>
</div>

export default Main;
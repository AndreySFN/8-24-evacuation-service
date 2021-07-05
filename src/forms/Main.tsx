import React from "react";
import Recall from "../components/Recall";
import "./main.scss"
import ProductCard from "../components/ProducCard";
import noImg from '../source/img/NoImg.png'

import {Link} from 'react-router-dom';

const Main = () => <div id="main_page">
    <div className='main_page__recall_container'>
        <Recall/>
    </div>
    <div id="main_content">
        <div id="main_content__products">
            <ProductCard
                imageUrl={noImg}
                title={'эвакуация эвакуатора'}
                price={'213125'}
            />
            <ProductCard
                imageUrl={noImg}
                title={'унести машину на руках'}
                price={'213125'}
            />
            <ProductCard
                imageUrl={noImg}
                title={'кто не понял тот поймёт'}
                price={'213125'}
            />
            <ProductCard
                imageUrl={noImg}
                title={'иные услуги эвакуатора'}
                price={'213125'}
            />
        </div>
        <button id="all_price_button"><Link to="/prices">СМОТРЕТЬ ВСЕ ЦЕНЫ</Link></button>
    </div>
</div>

export default Main;
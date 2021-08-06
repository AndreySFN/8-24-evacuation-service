import React from "react";
import Recall from "../components/Recall";
import './Contacts.scss';
import phoneImg from '../source/img/logos/phone_logo.png'
import {ADDRESS, PHONE_NUMBER, PHONE_URL} from "../constants/commonConstants";

const Contacts = () => <div id='contacts'>
    <div className='contacts__main_info'>
        <div className='contacts__main_info__contacts_info'>
            <a href={PHONE_URL} className='contacts__main_info__contacts_info__phone'>{PHONE_NUMBER}</a>
            <div className='contacts__main_info__contacts_info__logo_container'>
                <a href={PHONE_URL}><img src={phoneImg}/></a>
                {/*<a href={TELEGRAM_URL}><img src={tgImg}/></a>*/}
                {/*<a href={WHATSAPP_URL}><img src={whatsappImg}/></a>*/}
            </div>
        </div>
        <div className='contacts__main_info__map'>
            <iframe className='contacts__main_info__yandex_map'
                    src='https://yandex.ru/map-widget/v1/?um=constructor%3A5dc691de634d55e463729450c06453ee9a5acf81779af39640d3fda1fe16f925&amp;source=constructor'/>
            <div>{ADDRESS}</div>
        </div>
    </div>
    <div className='contacts__recall_container'>
        <Recall/>
    </div>
</div>

export default Contacts;
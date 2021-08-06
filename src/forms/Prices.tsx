import React from "react";
import {PricelistRow} from "../types";
import './Prices.scss'
const pricelist = require('../pricelist.json');

const Prices = () => {
    return <div className={'prices'}>
        <table className={'prices__table'}>
            <tbody>
            {pricelist && pricelist.map((row: PricelistRow) => <tr>
                <td className={'prices__table__desc'}>{row.description}</td>
                <td className={'prices__table__price'}>{row.price}</td>
            </tr>)}
            </tbody>
        </table>
    </div>
}

export default Prices;
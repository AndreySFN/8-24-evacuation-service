import React, {ReactElement} from "react";
import "./ProductCard.scss"

interface Props {
    imageUrl: string;
    title: string;
    price: string;
}

const ProductCard = (props:Props): ReactElement => <div className="product_card">
    <img src={props.imageUrl} className="product_card__img"/>
    <div className="product_card__title">{props.title}</div>
    <div className="product_card__price">от {props.price} руб.</div>
</div>

export default ProductCard;
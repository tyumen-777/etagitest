import React from 'react';
import {Link} from 'react-router-dom'
import './Card.css'

function Card({card}) {

    return (
        <li className="card">
            <Link className="card__link" to={`/details/${card.id}`}>
                <div className="card__img-wrap">
                    <img src={card.layout_image} className="card__image" alt={card.layout_image}/>

                </div>
                <div>
                    <p className="card__title">{card.rooms}-комн. квартира</p>
                    <p className="card__info"><b>Площадь:</b> {card.area_total}м²</p>
                    <p className="card__info">Цена <b>{card.price} &#8381;</b></p>
                    <p className="card__info"><b>Этаж:</b> {card.floor} из 10</p>
                </div>
            </Link>
        </li>
    );
}

export default Card;
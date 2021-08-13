import React, {useEffect} from 'react';
import './CardInfo.css'
import {useParams, Link} from "react-router-dom";
import Api from '../../utils/Api'

function CardInfo({match}) {

    let {id} = useParams()
    const [currentCard, setCurrentCard] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    useEffect(() => {
        if (!id) return
        Api.getCardById(id).then(res => {
            setCurrentCard(res)
            setLoading(true)
        })

    }, [id])

    //const chosenCard = currentCard && currentCard.filter(el => el.id ===id)


    return (
        loading ? (<div className='cardinfo__container'>
            <div className='cardinfo__wrapper'>
                <img className='cardinfo__image' src={currentCard.layout_image} alt='План квартиры'>
                </img>
                <div className="cardinfo__description">
                    <h1 className="cardinfo__title">{currentCard.rooms}-комн. квартира, {currentCard.area_total} м2</h1>
                    <p className="cardinfo__description"><b>Этаж: {currentCard.floor}</b></p>
                    <p className="cardinfo__description"><b>Цена: {currentCard.price} &#8381;</b></p>
                    <p className="cardinfo__description"><b>Количество комнат: {currentCard.rooms}</b></p>
                    <p className="cardinfo__description"><b>Общая площадь: {currentCard.area_total}</b></p>
                    <p className="cardinfo__description"><b>Площадь кухни: {currentCard.area_kitchen}</b></p>
                    <p className="cardinfo__description"><b>Жилая площадь: {currentCard.area_live}</b></p>
                    <Link to='/' className="cardinfo__title">&#129044; Вернуться к списку квартир</Link>
                </div>
            </div>
        </div>) : (<div className='cardinfo__loading'>Данные загружаются...</div>)

    );
}

export default CardInfo;
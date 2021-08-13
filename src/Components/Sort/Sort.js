import React from 'react';
import './Sort.css'

function Sort({cards, setRenderedCards}) {
    const temp = [...cards]
    const [show, setShow] = React.useState(false)
    const sortByPrice = () => {
        temp.sort((a, b) => a.price > b.price ? 1 : -1)
        //setCards(temp);
        setRenderedCards(temp);
        console.log(temp)
    }
    const sortByFloors = () => {
        temp.sort((a, b) => a.floor > b.floor ? 1 : -1)
        setRenderedCards(temp);
    }
    const sortBySquare = () => {
        temp.sort((a, b) => a.area_total > b.area_total ? 1 : -1)
        setRenderedCards(temp);
        console.log(temp)
    }
    const sortByRooms = () => {
        temp.sort((a, b) => a.rooms > b.rooms ? 1 : -1)
        setRenderedCards(temp);
        console.log(temp)
    }
    const sortByKitchen = () => {
        temp.sort((a, b) => a.area_kitchen > b.area_kitchen ? 1 : -1)
        setRenderedCards(temp);
        console.log(temp)
    }
    const sortByLiveArea = () => {
        temp.sort((a, b) => a.area_live > b.area_live ? 1 : -1)
        setRenderedCards(temp);
        console.log(temp)
    }

    return (
        <div className='sort'>
            <p>Соритровка по:</p>
            <div className='sort__buttons'>
                <button className='sort__button' onClick={sortByPrice}>По цене</button>
                <button className='sort__button' onClick={sortByFloors}>По этажам</button>
                <button className='sort__button' onClick={sortBySquare}>По площади</button>
            </div>
            <button className='sort__button-more' onClick={() => setShow(!show)}>&#9660;Показать дополнительные
                фильтры&#9660;</button>
            {
                show ? <div className='sort__buttons'>
                    <button className='sort__button' onClick={sortByRooms}>По комнатам</button>
                    <button className='sort__button' onClick={sortByKitchen}>Площадь кухни</button>
                    <button className='sort__button' onClick={sortByLiveArea}>Жилая площадь</button>
                </div> : null
            }
        </div>
    );
}

export default Sort;
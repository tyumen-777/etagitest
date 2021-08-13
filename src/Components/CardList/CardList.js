import React from 'react';
import Card from "../Card/Card";
import './CardList.css'

function CardList({searchValue, setSearchValue, cards, setCards, renderedCards, setRenderedCards}) {
    const [next, setNext] = React.useState(8);
    const countAddedCards = 3;
    const handleShowMoreCard = () => {
        loopWithSlice(next, next + countAddedCards)
        setNext(next + countAddedCards)
    }
    const loopWithSlice = (start, end) => {
        const slicedCards = cards.slice(start, end);
        setRenderedCards([...renderedCards, ...slicedCards])
    };
    return (
        <>
            <ul className="card-list">
                {
                    renderedCards.filter(card => {
                        if (searchValue === "" || searchValue.length < 3) {
                            return card;

                        } else if (String(card.id).includes(searchValue)) {
                            return card;
                        }
                        return false
                    })
                        .map((card) =>
                            <Card
                                key={card.id}
                                card={card}
                            />
                        )
                }
            </ul>
            {renderedCards.length === cards.length ? '' :
                <button className="card-list__button" onClick={handleShowMoreCard}>
                    See more
                    <svg className="card-list__icon" width="7" height="17" viewBox="0 0 7 17" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L5.043 8.41667L1 15.8333" stroke="#363636" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                </button>
            }

        </>
    );
}

export default CardList;
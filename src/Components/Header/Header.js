import React from 'react';
import './Header.css'
import Filter from "../Filter/Filter";
import Sort from "../Sort/Sort";

function Header({searchValue, setSearchValue, cards, setCards, setRenderedCards}) {
    return (
        <div className="header">
            <h1 className="header__title">Квартиры от застройщика</h1>
            <Filter
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            <Sort
                cards={cards}
                setCards={setCards}
                setRenderedCards={setRenderedCards}/>
        </div>
    );
}

export default Header;
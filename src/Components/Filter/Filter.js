import React from 'react';
import './Filter.css'

function Filter({searchValue, setSearchValue}) {
    return (
        <div className="filter">
            <form className="filter__form">
                <label htmlFor="search" className="filter__lable">Filter</label>
                <input
                    placeholder='Введите id квартиры'
                    id="search"
                    className="filter__input"
                    value={searchValue}
                    onChange={(evt) => {
                        setSearchValue(evt.target.value);
                    }}
                />
            </form>
        </div>
    );
}

export default Filter;
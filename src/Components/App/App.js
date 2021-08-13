import React from "react";
import './App.css';
import Header from "../Header/Header";
import {Route} from "react-router-dom";
import Main from "../Main/Main";
import Api from '../../utils/Api'
import CardInfo from "../CardInfo/CardInfo";

function App() {
    const [cards, setCards] = React.useState([]);
    const [renderedCards, setRenderedCards] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState('');
    // Getting card from backend for render
    React.useEffect(() => {
        Api.getCard().then(cardList => {
            setCards(cardList)
            setRenderedCards(cardList.slice(0, 8))
        })
    }, []);
    return (
        <div className="page">
            <Route exact path='/'>
                <Header
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    setCards={setCards}
                    cards={cards}
                    setRenderedCards={setRenderedCards}
                />
                <Main searchValue={searchValue}
                      setSearchValue={setSearchValue}
                      cards={cards}
                      setCards={setCards}
                      renderedCards={renderedCards}
                      setRenderedCards={setRenderedCards}/>
            </Route>
            <Route exact path='/details/:id'>
                <CardInfo/>
            </Route>
        </div>
    );
}

export default App;

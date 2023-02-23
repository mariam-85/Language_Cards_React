import CardsContainer from "../CardsContainer";
import { words } from "../../data/words";
import { useEffect, useState } from "react";
import Triggers from '../Triggers';
import AddPostForm from "../AddPostForm";

export default function App() {

    const [ cards, setCards ] = useState(words);

    useEffect(() => {
        const res = JSON.parse(localStorage.getItem('cards'));
        setCards(res)
      }, []); // следить за состоянием не нужно, функция запускается один раз при перезагрузке страницы
    
    
      useEffect(() => {
        localStorage.setItem('cards', JSON.stringify(cards))
      }, [cards]); // функция выпоняется каждый раз при изменении состояния cards
    
      // второй аргумент - указание на то, за каким состоянием надо следить

    const change_to_eng = () => {
        setCards(cards.map(el => {
            el.lang = 'eng';
            return el
        }))
    }

    const change_to_rus = () => {
        setCards(cards.map(el => {
            el.lang = 'rus';
            return el
        }))
    }
    
const change_lang = (id) => {
    setCards(cards.map(el => {
        if(el.id === id){
            el.lang = el.lang === 'rus' ? 'eng' : 'rus'
        }
        return el
    }))
}

const add_card = (rus_value, eng_value) => setCards([
    ...cards,
    {
        id: Date.now(), // cards.length + 1
        eng: eng_value,
        rus: rus_value,
        lang: 'eng'
    }
]);


// const change_lang = (id) => {
  //   cards[id - 1].lang = cards[id - 1].lang === 'rus' ? 'eng' : 'rus';
  //   setCards([...cards]);
  // }

    return (

      <div>
          <AddPostForm add_card={add_card} />
          <CardsContainer words_array={cards} change_lang={change_lang} />
          <Triggers change_to_eng={change_to_eng} change_to_rus={change_to_rus} />

      </div>
    );
  }
  
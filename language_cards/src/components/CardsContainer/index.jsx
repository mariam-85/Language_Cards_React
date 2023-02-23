import React from 'react'
import Card from '../Card'
import style from './index.module.css'

export default function CardsContainer({words_array, change_lang} ) {
  return (
    <div className={style.cards_container}>
        {
            words_array.map(el => <Card key={el.id} {...el} change_lang={change_lang}/>)
        }
    </div>
  )
}

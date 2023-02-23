import React from 'react'
import style from './index.module.css'

export default function AddPostForm({ add_card }) {

    const form_submit = (event) => {
        event.preventDefault();
        const { rus, eng } = event.target;
        add_card(rus.value, eng.value);
        rus.value = '';
        eng.value = '';
    }

  return (
    <div>
        <form onSubmit={form_submit} className={style.add_form}>
            <input type="text" name='rus' placeholder='Russian' />
            <input type="text" name='eng' placeholder='English' />
            <button>Add</button>
        </form>
    </div>
  )
}

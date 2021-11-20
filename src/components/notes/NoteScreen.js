import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar />

            <div className="notes__content">
                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                />
                <textarea
                    placeholder="what happened today"
                    className="notes__textarea"
                >

                </textarea>

                <div className="notes__images">
                    <img
                        src="https://img.freepik.com/vector-gratis/escena-naturaleza-rio-colinas-bosque-montana-ilustracion-estilo-dibujos-animados-planos-paisaje_1150-37326.jpg?size=626&ext=jpg&ga=GA1.2.863125021.1635033600"
                        alt="imagen"
                    />
                </div>
            </div>

        </div>
    )
}

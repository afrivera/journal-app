import React from 'react'
import { NoteScreen } from '../notes/NoteScreen'
import { SideBar } from './SideBar'

export const JournalScreen = () => {
    return (
        <div className="journal__main-content">
            <SideBar />

            <main>
                {/* <h1>Main Content</h1> */}
                <NoteScreen />
            </main>
            
        </div>
    )
}

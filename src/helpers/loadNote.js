import { db } from "../firebase/firebase-config"


export const loadNotes= async (uid) => {
    const noteSnap = await db.collection(`${uid}/journal/notes`).get();
    const note = [];
    // console.log(noteSnap)
    noteSnap.forEach( snapHijo => {
        // console.log(snapHijo.data())
        note.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
    })
    // console.log(note)
    

    return note
}
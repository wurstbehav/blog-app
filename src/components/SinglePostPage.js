import React, { useState } from 'react'
import database from '../firebase/firebase'



export const SinglePostPage = (props) => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    database.ref(`users/${props.match.params.user}/posts/${props.match.params.id}`).once('value').then((snapshot) => {
        setTitle(snapshot.val().title)
        setBody(snapshot.val().body)
    })

    return (
        <div>
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    )


}



export default (SinglePostPage)
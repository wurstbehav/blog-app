import React, { useState } from 'react'
import BodyBackgroundColor from 'react-body-backgroundcolor'
import database from '../firebase/firebase'
import { CopyToClipboard } from 'react-copy-to-clipboard';


export const SinglePostPage = (props) => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [copied, setCopied] = useState(false)
    const [value, setValue] = useState(window.location.href)

    const onClick = ({ target: { innerHTML } }) => {
        console.log(`Clicked on "${innerHTML}"!`);
        document.getElementById("myTooltip").innerHTML = "Copied"
    };

    const onCopy = () => {
        setCopied(true)
    };

    database.ref(`users/${props.match.params.user}/posts/${props.match.params.id}`).once('value').then((snapshot) => {
        setTitle(snapshot.val().title)
        setBody(snapshot.val().body)
    })



    return (
        <BodyBackgroundColor backgroundColor='#000'>
            <div>
                <div className="page-header page-header-black">
                    <div className="content-container">
                        <h1 className="post-title">{title}</h1>
                    </div>


                    <div className="content-container">


                        <CopyToClipboard
                            onCopy={onCopy}
                            options={{ message: 'Whoa!' }}
                            text={value}>
                            <div className="tooltip">
                                <button className="button button-copy-link" onClick={onClick}>
                                    <span className="tooltiptext" id="myTooltip">Copy the link</span>
                                    Copy Link
                                </button>
                            </div>
                        </CopyToClipboard>


                    </div>




                </div>
                <div className="content-container">
                    <p className="post-body">{body}</p>
                </div>
            </div>
        </BodyBackgroundColor>
    )


}



export default (SinglePostPage)
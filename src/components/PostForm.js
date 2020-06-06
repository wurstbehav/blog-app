import React, { useState } from 'react'
import moment from 'moment'


export const PostForm = (props) => {
    const [title, setTitle] = useState(props.post ? props.post.title : '')
    const [body, setBody] = useState(props.post ? props.post.body : '')
    const [createdAt] = useState(props.post ? props.post.createdAt : moment())
    const [error, setError] = useState('')
    const [editPage] = useState(encodeURI(window.location.href).includes('edit'))


    const onTitleChange = (e) => {
        const title = e.target.value
        setTitle(title)
        setError('Some changes has occured make sure u save it.')
        if (props.post.title === title) {
            setError('')
        }

    }



    const onBodyChange = (e) => {
        const body = e.target.value
        setBody(body)
        setError('Some changes has occured make sure u save it.')
        if (props.post.body === body) {
            setError('')
        }
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if (!title) {
            setError('Please provide title your post.')
        } else {
            setError('')
            props.onSubmit({
                title,
                body,
                createdAt: createdAt.valueOf(), //valueOf() returns timeStamp 
            })
        }
    }

    return (
        <div>
            <form className="form" onSubmit={onSubmit}>
                {
                    error && <p className="form-error">{error}</p> //checks if (this.state.error) is true or false . empty string is false so acts as this line doesnot exist. if string exists it is true and following jsx runs
                }
                {
                    editPage && <label className="edit-label">Title</label>
                }  <input className="text-input"
                    type="text"
                    placeholder="title"
                    autoFocus
                    value={title}
                    onChange={onTitleChange}
                />
                {
                    editPage && <label className="edit-label">Body</label>
                }
                <textarea className="text-area"
                    placeholder="Add a body for your post"
                    value={body}
                    onChange={onBodyChange}
                >
                </textarea>

                <div>
                    <button className="button">Save Post</button>
                </div>
            </form>

        </div>
    )

}

export default (PostForm)

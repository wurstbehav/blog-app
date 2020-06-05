import React from 'react'
import moment from 'moment'

export default class PostForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: props.post ? props.post.title : '',
            body: props.post ? props.post.body : '',
            createdAt: props.post ? moment(props.post.createdAt) : moment(),
            error: '',
            editPage: encodeURI(window.location.href).includes('edit')
        }
    }

    onTitleChange = (e) => {
        const title = e.target.value
        this.setState(() => ({ title }))
    }
    onBodyChange = (e) => {
        const body = e.target.value
        this.setState(() => ({ body }))
    }

    onSubmit = (e) => {
        e.preventDefault()

        if (!this.state.title) {
            this.setState(() => ({ error: 'Please provide title too your post.' }))
        } else {
            this.setState(() => ({ error: '' }))
            this.props.onSubmit({
                title: this.state.title,
                body: this.state.body,
                createdAt: this.state.createdAt.valueOf(),
            })
        }
    }

    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>
                {
                    this.state.error && <p className="form-error">{this.state.error}</p> //checks if (this.state.error) is true or false . empty string is false so acts as this line doesnot exist. if string exists it is true and following jsx runs
                }

                {
                    this.state.editPage && <label className="edit-label">Title</label>
                }  <input className="text-input"
                    type="text"
                    placeholder="title"
                    autoFocus
                    value={this.state.title}
                    onChange={this.onTitleChange}
                />
                {
                    this.state.editPage && <label className="edit-label">Body</label>
                }
                <textarea className="text-area"
                    placeholder="Add a body for your post"
                    value={this.state.body}
                    onChange={this.onBodyChange}
                >
                </textarea>
                <div>
                    <button className="button">Save Post</button>
                </div>
            </form>

        )
    }
}

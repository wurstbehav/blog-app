import React from 'react'
import { connect } from 'react-redux'
import PostForm from './PostForm'
import { startremovePost, starteditPost } from '../actions/posts';
import SweetAlert from 'react-bootstrap-sweetalert';

export class EditPostPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            alert: null
        };
    }

    showAlert = () => {
        this.setState(() => ({
            alert: (
                <SweetAlert
                    danger
                    showCancel
                    title="Are you sure?"
                    onConfirm={this.onClick}
                    onCancel={this.hideAlert}
                    style={{ backgroundColor: '#ffe277' }}
                    customButtons={
                        <React.Fragment>
                            <button className="button button--cancel" onClick={this.hideAlert}>Cancel</button>
                            <button className="button button--confirm" onClick={this.onClick}>Yes, Delete it</button>
                        </React.Fragment>
                    }
                >
                    You will not be able to recover the expense!
                </SweetAlert>
            )
        }))

    }

    hideAlert = () => {
        this.setState(() => ({ alert: null }))
    }

    onSubmit = (postFromPostForm) => {
        this.props.starteditPost(this.props.post.id, postFromPostForm)
        this.props.history.push('/')
    }

    onClick = () => {
        this.props.startremovePost({ id: this.props.post.id })
        this.props.history.push('/')
    }



    SeeBlogButtonClick = () => {

        const url = `${`/post/${this.props.userId}/${this.props.post.id}`}`;
        window.open(url, '_blank');
        //  this.props.history.push(`${`/post/${this.props.userId}/${this.props.post.id}`}`)

    }


    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container wrapper">
                        <h1 className="page-header__title">Edit Post</h1>

                        <div>
                            <button className="button" onClick={this.SeeBlogButtonClick}>See Your Blog</button>
                        </div>

                    </div>
                </div>
                <div className="content-container">
                    <PostForm
                        post={this.props.post} //sending post as a props to PostForm
                        onSubmit={this.onSubmit}
                    />
                    <div className="remove-button">
                        <button className="button button--secondary" onClick={this.showAlert}>Remove Post</button>
                        {this.state.alert}
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state, props) => {
    return {
        post: state.posts.find((post) => {
            return post.id === props.match.params.id
        }),
        userId: state.auth.uid
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        starteditPost: (id, postFromPostForm) => {
            dispatch(starteditPost(id, postFromPostForm))
        },
        startremovePost: (data) => {
            dispatch(startremovePost(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPostPage)
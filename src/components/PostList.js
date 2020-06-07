import React from 'react'
import { connect } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import getVisiblePosts from '../selectors/posts'
import PostListItem from './PostListItem'

export const PostList = (props) => {

    return (
        <div className="content-container">
            <div className="list-header">
                {props.posts.length === 1 ? (<div>Post</div>) : (<div>Posts</div>)}
            </div>
            <div className="list-body">
                {
                    props.posts.length === 0 ? (
                        <div className="list-item list-item--message">
                            <span>No Posts</span>
                        </div>
                    ) : (
                            props.posts.map((post, index) => {
                                return <PostListItem key={uuidv4()}
                                    id={post.id}
                                    title={post.title}
                                    createdAt={post.createdAt} />
                            })
                        )
                }
            </div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        posts: getVisiblePosts(state.posts, state.filters)
    }
}

export default connect(mapStateToProps)(PostList)
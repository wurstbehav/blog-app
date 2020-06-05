import React from 'react'
import { Link } from 'react-router-dom'

const PostListItem = (props) =>

    (
        <Link className="list-item" to={`/edit/${props.id}`}>
            <div>
                <h3 className="list-item__title">{props.title}</h3>
            </div>
        </Link>
    )

export default (PostListItem)  
// Posts Reducer
const initalPostState = [{
    title: '',
    body: '',
    createdAt: 0
}]

const PostsReducer = (state = initalPostState, action) => {
    switch (action.type) {
        case 'ADD_POST':
            return [
                ...state,
                action.post
            ]

        case 'REMOVE_POST':
            return state.filter((post) => post.id !== action.id)

        case 'EDIT_POST':
            return state.map((post) => {
                if (post.id === action.id) {
                    return {
                        ...post,
                        ...action.updates
                    }
                } else {
                    return post
                }
            })
        case 'SET_POSTS':
            return action.post

        default:
            return state
    }
}

export default PostsReducer
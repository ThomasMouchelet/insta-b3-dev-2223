import axios from 'axios'

const getAll = async () => {
    const response = await axios.get('http://localhost:8000/posts')
    return response.data
}

const create = async (credentials) => {

}

const PostService = {
    getAll,
    create
}

export default PostService
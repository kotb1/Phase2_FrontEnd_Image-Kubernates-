import axios from 'axios'
import React ,{useState , useEffect} from 'react'

function SinglePost() {
    const [post,setPost] = useState({})
    
    useEffect(()=>{
    axios(`http://localhost:5000/posts/5e9f9b8f8b9c9d3f8c8b9b8f`)
    },[])

    return (
        <div>
            <h1>single post</h1>
        </div>
    )
}

export default SinglePost

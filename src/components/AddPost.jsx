import React ,{useState} from 'react'
import axios from 'axios'
import cover from '../images/cover2.jpg'

function AddPost() {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')

  const addPost = ()=> {
    axios.post('http://localhost:5000/addPost', {
      title:title,
      desc:desc
      
    })
    .then(
        console.log('post added'));
    
  }


  return (
    
        <div className="write">
        <img
          className="writeImg"
          src={cover}
          alt=""
        />
        <form className="writeForm">
          <div className="writeFormGroup">
            {/* <label htmlFor="fileInput">
              <i className="writeIcon"></i>
            </label>
            <input id="fileInput" type="file" style={{ display: "none" }} /> */}
            <input
              className="writeInput"
              placeholder="Title"
              type="text"
              autoFocus={true}
              onChange={(e) => setTitle(e.target.value)
              
              }
            />
          </div>
          <div className="writeFormGroup">
            <textarea
              className="writeInput writeText"
              placeholder="Tell your story..."
              type="text"
              autoFocus={true}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <button className="writeSubmit" type="submit" onClick={addPost}>
            Publish
          </button>
        </form>
      </div>
    )
}

export default AddPost

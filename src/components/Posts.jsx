import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import deleteicon from '../images/delete.png'

function Posts() {
    const [data,setData] =useState([]);
    const [showModal,setShowModal] =useState(false);
    const [newTitle, setNewTitle] = useState('');
    const [newDesc,setNewDesc]= useState("");
        useEffect(()=>{
        fetch('http://localhost:5000/')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[]);


    const updatePost = (id)=>{
        axios.put(`http://localhost:5000/updatePost/${id}`,{
            id:id,
            newTitle:newTitle,
        newDesc:newDesc
        }).then(
            alert("memo updated please refresh the page")
        )
    }
    const deletePost = (id)=>{
        axios.delete(`http://localhost:5000/deletePost/${id}`)
        .then(res=>res.json())
        .then(data=>setData(data))
        .then(
            alert("memo deleted please refresh the page")
        )
    }

    return (
        <div className='postContainer'>
            <h2 className='link'><Link to="/add" >add new memo</Link></h2>
            <h1>posts</h1>
            {
             data.map(p=>{
                    return(
                        <div key={p._id
                        } className='singlePost'>
                           <h1>{p.title}</h1>
                           <p>{p.desc}</p>
                           {/* <p>{p._id}</p> */}
                       
                       <button className='btn' onClick={()=>{deletePost(p._id)}  }>
                       <img src={deleteicon} alt="delete" 
                       width={25} height={25}
                       />
                       <p className="btntext">
                           delete memory?
                       </p>
                       
                       </button>
                       <br />
                       <button className='upbtn' onClick={
                           ()=>{
                               setShowModal(!showModal);
                           }
                       }>update</button>
                       <div className={showModal? "showed" : "notshowed"}>
                        <input type="text" placeholder='enter new title' onChange = {(e)=>{
                            setNewTitle(e.target.value)
                            console.log(e.target.value);
                        }}/>
                        <input type="text" placeholder='enter new memo'
                        onChange = {(e)=>{
                            setNewDesc(e.target.value)
                        }} />
                        <button className='updatebtn' onClick={()=>{updatePost(p._id)}}>update memo</button>
                       </div>
                        </div>
                    )
              })
            }
        </div>
    )
}

export default Posts

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
    const [post, setPost]=useState([]);
    const [comments,setComments]=useState([]);
    const {id}=useParams();
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res=>res.json()).then(data=>setPost(data));
    },[id])
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`).then(res=>res.json()).then(data=>setComments(data));
    },[id])

    const {title,body}=post;
    return (
        <div>
            <h1>{title}</h1>
            <h4>{body}</h4>
            <p>{comments.map(comment=>{
                return (
                    <div>
                        <div><strong>{comment.name}</strong></div>
                        <div>{comment.body}</div>
                    </div>
                )
            })}</p>

        </div>
    );
};

export default PostDetail;
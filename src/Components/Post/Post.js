import React from 'react';
import { useHistory } from 'react-router-dom';

const Post = ({post}) => {
    const {id, title, body}=post;
    const history=useHistory();
    const showComments = id =>{
        const url= `post/${id}`;
        history.push(url);
    }
    return (
        <div>
            <h3> Id: {id} </h3>
            <h2>Title: {title}</h2>
            <p>{body}</p>
            <button onClick={()=>showComments(id)}>Show comments</button>
        </div>
    );
};

export default Post;
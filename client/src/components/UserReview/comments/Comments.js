import React, { Component }  from 'react';
import { useEffect, useState } from "react";
import { getComments as getCommentsApi, 
        createComment as createCommentApi, 
        deleteComment as deleteCommentApi,
        updateComment as updateCommentApi} from "../api";
import Commnet from "./Comment";
import CommentForm from "./CommentForm"

const Commnets = ({currentUserId}) => {

    const[backendComments, setBackedComments] = useState([]);
    
    const [activeComment, setActiveComment] = useState(null);


    const rootComments = backendComments.filter(
        (backendComments) => backendComments.parentId === null
    );

    const getReplies = commenId => {
        return backendComments.filter(backendComments => backendComments.parentId === commenId)
        .sort((a,b) => 
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
    };

    const addComment = (text, parentId) => {
        console.log("addComment", text, parentId);
        createCommentApi(text, parentId).then(comment => {
            setBackedComments([comment, ...backendComments])
            // Close the reply box
            setActiveComment(null);
        });
    };

    const deleteComment = (commenId) => {
        if(window.confirm('Are you sure to remove?')){
            deleteCommentApi(commenId).then(() => {
                const updatedBackendComments = backendComments.filter(
                    backendComments => backendComments.id !== commenId);
                    setBackedComments(updatedBackendComments);
            });
        }
    };

    const updateComment = (text, commenId) => { 
        updateCommentApi(text, commenId).then(() => {
            const updatedBackendComments = backendComments.map(backendComments => {
                if(backendComments.id === commenId){
                    return {...backendComments, body: text};
                }
                return backendComments;
            });
            setBackedComments(updatedBackendComments);
            setActiveComment(null);
        });
    };


    // Fetch data 
    useEffect(() => {
        getCommentsApi().then(data => {
            setBackedComments(data);
        })
    }, [])
 
    return (
        <div className="comments">
            <h3 className="comments-title">Comments</h3>
            <div className="comment-form-title">Write comment</div>
            <CommentForm submitLable="Write" handleSubmit={addComment}/>
            <div className="comments-container">
                {rootComments.map((rootComment) => (
                    // <div key={rootComment.id}>{rootComment.body}</div>
                    <Commnet 
                        key={rootComment.id} 
                        comment={rootComment} 
                        replies={getReplies(rootComment.id)}
                        currentUserId={currentUserId}
                        delteComment={deleteComment}
                        updateComment={updateComment}
                        activeComment={activeComment}
                        setActiveComment={setActiveComment}
                        addComment={addComment}
                    />
                ))}
            </div>
        </div>
    );
};

export default Commnets;
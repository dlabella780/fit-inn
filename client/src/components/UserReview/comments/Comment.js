import { updateComment } from "../api";
import CommnetForm from "./CommentForm";

const Commnet = ({comment, replies, currentUserId, delteComment,
                    activeComment, setActiveComment, parentId = null,
                    addComment, updateComment}) => {

    const fiveMinutes = 300000;
    const timePassed = new Date() - new Date(comment.createdAt) > fiveMinutes;
    const canReply = Boolean(currentUserId);
    const canEdit = currentUserId === comment.userId && !timePassed;
    const canDelete = currentUserId === comment.userId && !timePassed;
    const createdAt = new Date(comment.createdAt).toLocaleDateString();
    
    const isReplying = 
        activeComment && 
        activeComment.type === 'replying' && 
        activeComment.id === comment.id;
    const isEditing = 
        activeComment && 
        activeComment.type === 'editing' && 
        activeComment.id === comment.id;
    const replyId = parentId ? parentId : comment.id;

    return (
        <div className="comment">
            <div className="comment-image-container">
                <img src="/user-icon.png" />
            </div>
            <div className="comment-right-part">
                <div className="comment-content">
                    <div className="comment-author">{comment.username}</div>
                    <div>{createdAt}</div>
                </div>
                {!isEditing && <div className="comment-text">{comment.body}</div>}
                {isEditing && (
                    <CommnetForm 
                        submitLable="Update" 
                        hasCancelButton 
                        initialText={comment.body}
                        handleSubmit={(text) => updateComment(text, comment.id)}
                        handleCancel={() => setActiveComment(null)}
                    />
                )}
                <div className="comment-actions">
                    {canReply && 
                    <div className="comment-action"
                        onClick={() => setActiveComment({id: comment.id, type: "replying"})}>
                        Reply
                    </div>}

                    {canEdit && <div className="comment-action"
                        onClick={() => setActiveComment({id: comment.id, type: "editing"})}>
                        Edit
                    </div>}
                    
                    {canDelete && 
                    <div className="comment-action"
                        onClick={() => delteComment(comment.id)}>
                        Delete
                    </div>}
                </div>
                {isReplying && (
                    <CommnetForm submitLable="Reply"
                    handleSubmit={(text) => addComment(text, replyId)}
                    />
                )}
                {replies.length > 0 && (
                    <div className="replies">
                        {replies.map(reply => (
                            <Commnet 
                            comment={reply} 
                            key={reply.id} 
                            replies={[]} 
                            currentUserId={currentUserId}
                            delteComment={delteComment}
                            addComment={addComment}
                            updateComment={updateComment}
                            setActiveComment={setActiveComment}
                            activeComment={activeComment}
                            parentId={comment.id}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
};

export default Commnet;
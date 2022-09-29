import { useState } from "react";

const CommnetForm = ({handleSubmit, 
                        submitLable, 
                        hasCancelButton = false, 
                        initialText = '',
                        handleCancel
    }) => {
    
    const [text, setText] = useState(initialText);
    
    // Text area is empty, can't click submit button
    const isTextareaDisabled = text.length === 0;

    const onSubmit = event => {
        event.preventDefault()
        handleSubmit(text)
        // After submiting the text, the text area becomes empty
        setText("")
    }

    return (
        <form onSubmit={onSubmit}>
            <textarea className="comment-form-textarea" 
            value={text} 
            onChange={(e) => setText(e.target.value)}
        />
        <button className="comment-form-button" disabled={isTextareaDisabled}>{submitLable}</button>
        {hasCancelButton && (
            <button type = "button" className="comment-form-button comment-form-cancel-button"
            onClick={handleCancel}
            >
                Cancel
            </button>
        )}
        </form>
    ); 
};

export default CommnetForm;
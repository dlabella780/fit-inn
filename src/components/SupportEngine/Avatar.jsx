import React, { useState } from "react";

import {styles} from './styles';

const Avatar = props => {

    // create hover action 
    const [hovered, setHovered] = useState(false)
    return (
        // Add the little icon at the bottom
        <div style={props.style}>
            <div

            // Display Hello message with hover 
                className='transition-3'
                style={{
                    
                    ...styles.avatarHello,
                    ...{ opacity: hovered ? '1' : '0'} 
                }}
            >
                Hey it's FIT-INN</div>
            <div
                className='transition-3'
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                
                // Trigger function when we click the icon 
                onClick={() => props.onClick && props.onClick()}

                style = {{
                    ...styles.chatWithMeButton,
                    ...{ border: hovered ? '1px solid #f9f0ff' : '4px solid #7a39e0'}
                }}
            />
        </div>
    )
}

export default Avatar
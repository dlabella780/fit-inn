import React , {useRef, useEffect, useState} from "react";

import Avatar from './Avatar';
import SupportWindow from './SupportWindow'


const SupportEngine = () => {

    const ref = useRef(null)

    // Make render for SupportWindow action 
    const [visible, setVisible] = useState(false)

    // Function: click outside to close the chatbox
    useEffect(() =>{
        function handleClickOutside(event){
            if(ref.current && !ref.current.contains(event.target)){
                setVisible(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () =>{
            document.removeEventListener("mousedown", handleClickOutside)
        };
    }, [ref])

    return (
        <div className='support-win' ref={ref}>
            <SupportWindow visible={visible}/>
            <Avatar onClick={() => setVisible(true)}/>
        </div>
    )
}

export default SupportEngine;
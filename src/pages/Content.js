
import "./style.css"
import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap'

const Content = () => {
    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
           setInterval(() => setDateState(new Date()), 1);
    }, []);
    return (
        <div>
            <div className="imgrounded"/>
            <p className="date" style={{textAlign: "center"}}>
             {dateState.toLocaleString('id', {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: false
            })}
            </p>
            <p className="satu">Hi, My name is</p>
            <p className="dua">Anne Sullivan</p>
            <p className="tiga">I build things for the web</p>
            <Button style={{background: "#F47522"}}>Get in touch</Button>
            
        </div>
    )
}

export default Content
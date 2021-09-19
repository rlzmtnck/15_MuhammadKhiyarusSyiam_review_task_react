import React from 'react';
import "./style.css"

import { Button } from 'react-bootstrap'

const Content = () => {
    return (
        <div>
            <div className="imgrounded"/>
            <p className="satu">Hi, My name is</p>
            <p className="dua">Anne Sullivan</p>
            <p className="tiga">I build things for the web</p>
            <Button style={{background: "#F47522"}}>Get in touch</Button>
            
        </div>
    )
}

export default Content

import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

const HideShowForm = ({ children, eventKey }) => {
    
    const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!'),
    );

    const [isOn, setIsOn] = useState(false);
    const handleSwitch = () => {
        setIsOn(!isOn);
    };

    return (
    //     <Form.Check 
    //     type="switch"
    //     id="custom-switch"
    //     onClick={decoratedOnClick}
    //     >

    //     {children}
    // </Form.Check>

    <div onClick={handleSwitch} >
        <Button className= {`btn_switch ${isOn ? 'on' : 'off'}`} style={{background:"#7126B5", border:"none", borderRadius:"20px", }}
        onClick={decoratedOnClick}>
            <span className= {`btn_switchSlider ${isOn ? 'on' : 'off'}`}></span>
            {children}
        </Button>
    </div>

);
}

export default HideShowForm
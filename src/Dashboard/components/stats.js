import React from 'react' 
import { Col } from 'react-bootstrap' ;
import logo from  "../../logo.svg"

const Stats = (props) => {
    return (
        <Col sm={4} className = "stats-col">
            <div style={{display:"flex"}}>
            <img
                src={logo}
                width="100"
                height="100"
                className="d-sm-none d-lg-block"
                alt="React Bootstrap logo"
            /> 
            <span className = 'num-display'><strong>{props.count} </strong> </span>
            <span className = 'txt-display'>{props.label}</span>
           </div>
        </Col>
    ) ;
}

export default Stats ;
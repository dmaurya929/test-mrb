import React from 'react' ;
import {ListGroup,ListGroupItem} from 'react-bootstrap' ;

const BookingInfo = ({room, date, name}) => {
    return (
       
            <ListGroupItem>
                <div>
                    {room}
                </div>
                <div>
                    Date: {date}
                </div>
                <div >
                    <span className="text-primary">{name}</span>
                </div>
            </ListGroupItem>
       
    ) ;
}

export default BookingInfo ;
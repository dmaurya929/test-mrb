import React, { useEffect, useState } from 'react' ;

const Timer = () => {
   

    const [currentTime, setCurrentTime] = useState(new Date()) ;

    let timer = null;
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    useEffect(() => {
        timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return  () => { if (timer) clearInterval(timer); }
    }, [] ) ;

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

     
        return(
            <div className="float-right">
               <span className="h2 border-right p-1 m-1"> {currentTime.toLocaleTimeString([],{ hour: '2-digit', minute: '2-digit' })}</span>
               <div className = "day-date "><span>{days[currentTime.getDay()].toUpperCase()} <br/>{currentTime.toLocaleDateString("en-US")}</span></div>
            </div>
        )
    
}

export default Timer ;

import React, { useState } from 'react'
import {Bookmark} from 'lucide-react'



function Card(props) {
  const [saved, setSaved] = useState(false);
  return (
    
       
        
    
      <div className="card">
        <div className="top">
          <img src={props.logo} alt="img" />
          <button onClick={() => setSaved(!saved)}>save <Bookmark size={18}
          fill={saved ? "black" : "none"}/></button>
        </div>

        <div className="center">
          <h3>{props.company_name} <span>{props.timeline}</span></h3>
          <h2>{props.position}</h2>
          <div className='tag'>
            <h4>{props.tag}</h4>
            <h4>{props.level}</h4>
          </div>

        </div>

        <div className="bottom">
          <div>
            <div>{props.cost}</div>
            <div><h5>{props.location}</h5></div>
          </div>
          <button>Apply Now</button>
        </div>

      </div>
       
      
      )
    
  
}
export default Card;
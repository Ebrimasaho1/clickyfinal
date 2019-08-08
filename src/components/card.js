import React from "react";
import './card.css';

function Cards(props){
        return(
            <img alt="" onClick={() => props.onClick(props.id)} src ={props.image} id={props.id}/>
               
        )
    //onClick={}
}

export default Cards;
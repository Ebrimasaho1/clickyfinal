import React from "react";

function navBar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <p className="navbar-brand" >Clicker Game</p>

            <p className="navbar-brand">Start clicking image to Start!</p>

            <p className="navbar-brand" >Score:<span>{props.score}</span></p>

        </nav>
    )
}

export default navBar;
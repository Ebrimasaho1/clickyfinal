import React from "react";
import Card from './card';
import images from '../data';
import Navbar from './navBar';
import './card.css';

class gameBoard extends React.Component {
    state = {
        images: images,
        clickedCards: [],
        score: 0
    };

    score = () => {
        if(images === true){

        }
    }

    //shuffle cards after images are clicked
    shuffleCard = (id) =>{
        console.log("I got clicked");
        console.log(id);
        var clickedCards = [...this.state.clickedCards];    //spread operator
        if(!clickedCards.includes(id)){
            clickedCards.push(id);
            var tempArray = this.state.images;
        var i, j, x;
        for ( i = tempArray.length-1;i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = tempArray[i];
            tempArray[i] = tempArray[j];
            tempArray[j] = x;
        };
        this.setState({images: tempArray,clickedCards:clickedCards,score:this.state.score+1});
        console.log("you won");
        
        }else{
            this.setState({score:this.state.score});
            console.log("You lose");
        }
        console.log(this.state.clickedCards);
       
    }

    render() {
        console.log(this.state.images);

        return (
        <div>
            <Navbar score={this.state.score}>
                
            </Navbar>

            <div className="gameDesc">
                <div className="jumbotron text-center">
                    <h1>Clicky Game!</h1>,
            <p> Click on an image to earn points, but don't click on any more than once! </p>
                </div>
                <div className="container">
                    <div className="wrapper">
                        {this.state.images.map(image => <Card key={image.id} onClick={this.shuffleCard} image={image.url} id={image.id}/>)}
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default gameBoard;
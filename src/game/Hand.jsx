import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
let cardDeck = require('../utils/Deck.json');

export default class Hand extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            playersHand: []
        }
    }

    // let shuffledDeck = shuffle(cardDeck.deck);
    // let playerHand = [shuffledDeck.shift(), shuffledDeck.shift()];
    // let dealerHand = [shuffledDeck.shift(), shuffledDeck.shift()];

    // function shuffle(a) {
    //     for (let i = a.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         [a[i], a[j]] = [a[j], a[i]];
    //     }
    //     return a;
    // }

    // function playerHit(playerHand) {
    //     playerHand.concat(shuffledDeck.shift());
    // }

    handleClick = () => {

    }

    render() {
    return (
        <div>
            <h1>Welcome to the Blackjack React game</h1>
            <Card>
                <Card.Title>
                    <h2>Dealers hand</h2>
                </Card.Title>
                <Card.Body>
                    {/* {dealerHand[0].rank}{dealerHand[0].suit}, {dealerHand[1].rank}{dealerHand[1].suit} */}
                </Card.Body>
            </Card>
            <Card>
                <Card.Title>
                    <h2>Players hand</h2>
                </Card.Title>
                <Card.Body>
                    {/* {playerHand[0].rank}{playerHand[0].suit}, {playerHand[1].rank}{playerHand[1].suit} */}
                </Card.Body>
            </Card>
            <Button>
                Hit
            </Button>
        </div>
    )
    }
}
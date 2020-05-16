import React from 'react'

export default function PlayGround() {
    const squareArrow = (x) => x * x;
    console.log(squareArrow(9));

    const fullName = "Jen James";

    const getFullName = name => name.split(' ')[0];
    console.log(getFullName(fullName));

    const user = {
        name: 'Andrew',
        location: ['New York', 'Paris', 'Rome'],
        printLivedPlace(){
            return this.location.map(city => `${this.name} has lived in ${city}`)
        }
    }

    console.log(user.printLivedPlace())

    const multiplyer = {
        numbers: [10,20,30],
        multiplyBy: 3,
        multiply(){
            return this.numbers.map(number => number * this.multiplyBy)
        }
    }

    console.log(multiplyer.multiply())

    return (
        <div>
            <h2>PlayGround</h2>
        </div>
    )
}

import React from 'react';
import ReactDOM from 'react-dom';
import Library from "./Library"

let bookList = [
    {"key": 1,"title": "book1", "author": "John Smith", "pages": 260},
    {"key": 2,"title": "book2", "author": "Ernest Smith", "pages": 360},
    {"key": 3,"title": "book3", "author": "Sam Smith", "pages": 460},
]

let skiData = {
    total: 50,
    powder: 20,
    backcountry: 10,
    goal: 100
}

const getPercent = decimal => {
    return decimal * 100 + '%'
}

const calcGoalProgress = (total, goal) => {
    return getPercent(total/goal)
}

const SkiDayCounter = ({total, backcountry, powder, goal}) => {
    return(
        <section>
            <div>
                <p>Total Days: {total}</p>
            </div>
            <div>
                <p>Powder Days: {powder}</p>
            </div>
            <div>
                <p>Backcountry Days: {backcountry}</p>
            </div>
            <div>
                <p>Goal Days: {calcGoalProgress(total,goal)}</p>
            </div>
        </section>
    )
}

// class SkiDayCounter extends React.Component {
//     getPercent = decimal => {
//         return decimal * 100 + '%'
//     }
//     calcGoalProgress = (total, goal) => {
//         return this.getPercent(total/goal)
//     }
//     render(){
//         const {total,powder,backcountry,goal} = this.props;
//         return(
            
//         )
//     }
// }

ReactDOM.render(
    <Library books={bookList}/>,
    // <SkiDayCounter 
    //     total={skiData.total}
    //     powder={skiData.powder}
    //     backcountry={skiData.backcountry}
    //     goal={skiData.goal}
    // />,
    document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


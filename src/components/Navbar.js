export default function Navbar(props){

    return (
        <nav>
            <h1>Highest Score</h1>
            {props.highestScore.length === 0 ? 
                <div className="highest-score-container">
                    <h4 className="highest-score-item">Name:  </h4>
                    <h4 className="highest-score-item">Time: </h4>
                    <h4 className="highest-score-item">Rolls: </h4>
                </div>
                :
                <div className="highest-score-container">
                    <h4 className="highest-score-item">Name:  {props.highestScore[0].player}</h4>
                    <h4 className="highest-score-item">Time: {props.highestScore[0].minutes<10 ? "0": ""}{props.highestScore[0].minutes}
                                                                :
                                                            {props.highestScore[0].seconds<10 ? "0" : ""}{props.highestScore[0].seconds}</h4>
                    <h4 className="highest-score-item">Rolls: {props.highestScore[0].roll}</h4>
                </div>
            }
        </nav>
    )
}
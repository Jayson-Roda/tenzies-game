export default function Navbar(props){
    return (
        <nav>
            <h1>Highest Score</h1>
            <div className="highest-score-container">
                <h4 className="highest-score-item">Name: {props.highestScore.player}</h4>
                <h4 className="highest-score-item">Time: {props.highestScore.minutes}:{props.highestScore.seconds}</h4>
                <h4 className="highest-score-item">Rolls: {props.highestScore.roll}</h4>
            </div>
        </nav>
    )
}
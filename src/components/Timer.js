export default function Timer(props){

    return (
    <div className="player-info-item">
        <span>Timer: <b>{props.minutes<10 ? "0"+props.minutes : props.minutes}</b></span>
        <b>:</b>
        <span><b>{props.seconds<10 ? "0"+props.seconds : props.seconds}</b></span>
    </div>
    )
}
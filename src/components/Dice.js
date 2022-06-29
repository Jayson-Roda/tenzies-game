

export default function Dice(props){
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }

    function dotValue(){
        if(props.value === 1){
            return (
                <div className="dice-box">
                    <span className='dot middle center'></span>
                </div>
            )
        } else if (props.value === 2){
            return (
                <div className="dice-box">
                    <p className='dot top left'></p>
                    <p className='dot bottom right'></p>
                </div>
            )  
        }  else if (props.value === 3) {
            return (
                <div className="dice-box">
                    <p className='dot top left'></p>
                    <p className='dot center middle'></p>
                    <p className='dot bottom right'></p>
                </div>
            )
        }  else if (props.value === 4) {
            return (
                <div className="dice-box">
                    <p className='dot top left'></p>
                    <p className='dot top right'></p>
                    <p className='dot bottom left'></p>
                    <p className='dot bottom right'></p>
                </div>
            )
        }  else if (props.value === 5) {
            return (
                <div className="dice-box">
                    <p className='dot top left'></p>
                    <p className='dot top right'></p>
                    <p className='dot center middle'></p>
                    <p className='dot bottom left'></p>
                    <p className='dot bottom right'></p>
                </div>
            )
        }  else {
            return (
                <div className="dice-box">
                    <p className='dot top left'></p>
                    <p className='dot middle left'></p>
                    <p className='dot bottom left'></p>
                    <p className='dot top right'></p>
                    <p className='dot middle right'></p>
                    <p className='dot bottom right'></p>
                </div>
            )
        }
    }

    return (
        <div
            className="dice-box"
            style={styles} 
            onClick={props.holdDice}
        >
            {dotValue()}
        </div>
    )
}
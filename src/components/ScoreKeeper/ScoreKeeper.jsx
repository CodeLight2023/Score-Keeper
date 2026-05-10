import { useState, useEffect } from "react"
import './ScoreKeeper.css'
function ScoreKeeper() {
    const [score1, setScore1] = useState(0)
    const [score2, setScore2] = useState(0)

    const handleScore1Increment = () => {
        setScore1(prev => prev + 1)
    }
    const handleScore1Decrement = () => {
        setScore1(prev => prev > 0 ? prev - 1 : 0)
    }

    const handleScore2Increment = () => {
        setScore2(prev => prev + 1)
    }
    const handleScore2Decrement = () => {
        setScore2(prev => prev > 0 ? prev - 1 : 0)
    }

    useEffect(() => {
        document.title = `Player 1: ${score1} | Player 2: ${score2}`
    }, [score1, score2])

    return (
        <>
        <div className="container">
            <div className="score-box">
                <div className="heading">
                    <h1>Score Keeper</h1>
                </div>
                <Scores score1={score1} score2={score2} />
                <Buttons handleScore1Increment={handleScore1Increment} handleScore1Decrement={handleScore1Decrement} handleScore2Increment={handleScore2Increment} handleScore2Decrement={handleScore2Decrement} />
                <div className="reset-btn-box">
                    <button className="reset" onClick={() => setScore1(0)}>Reset Player 1</button>
                    <button className="reset" onClick={() => setScore2(0)}>Reset Player 2</button>
                    <button style={{width: '100%', height: 'auto', background: '#0394fc', padding: '15px', color: '#fff', borderRadius: '50px', margin: '20px auto' }} onClick={() => {setScore1(0), setScore2(0)}}>Reset Both</button>
                </div>
            </div>
        </div>
        </>
    )
}

function Scores(props) {
    return (
        <>
        <div className="scores">
            <div className="score">
                <p>{props.score1}</p>
                <h2>Player 1</h2>
            </div>
            <div className="score">
                <p>{props.score2}</p>
                <h2>Player 2</h2>
            </div>
        </div>
        </>
    )
}

function Buttons(props) {
    return (
        <>
        <div className="buttons-container">
            <div className="buttons">
                <h2>Player 1</h2>
                <div className="button">
                    <button onClick={props.handleScore1Increment}>+</button>
                    <button onClick={props.handleScore1Decrement}>-</button>
                </div>
            </div>
            <div className="buttons">
                <h2>Player 2</h2>
                <div className="button">
                    <button onClick={props.handleScore2Increment}>+</button>
                    <button onClick={props.handleScore2Decrement}>-</button>
                </div>
            </div>
        </div>
        </>
    )
}
export default ScoreKeeper
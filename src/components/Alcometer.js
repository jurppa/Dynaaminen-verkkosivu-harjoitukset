import React from "react"
import { useState } from "react"
const Alcometer = () => {
    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
    
    const [weight,setWeight] = useState(0)
    
    const [bottle,setBottle] = useState(0)
    const [gender, setGender] = useState(0)
    const [time,setTime] = useState(0)
    const [alcoholLevel, setAlcoholLevel] = useState(null)

    const bloodAlcoholLevel = (event) => {
        event.preventDefault()
        const litres = Number(bottle) * 0.33
        let grams = Number(litres) * 8 * 4.5
        const burning = Number(weight) / 10
        let gramsLeft = Number(grams) - (Number(burning) * Number(time))
        switch (gender) {
            case "female":
                setAlcoholLevel(Number(gramsLeft) / (Number(weight) * 0.6))
                break;
            case "male":
                setAlcoholLevel(Number(gramsLeft) / (Number(weight) * 0.7))
                break;
            default:
                break;
        }

}

    return(<div>
    <h1>Calculating blood alcohol level</h1>
    <form onSubmit={bloodAlcoholLevel}>
        Weight <input min="1" type="number" onChange={e => setWeight(e.currentTarget.value)}/>

          <label>Bottles</label>
          <select value={bottle} onChange={e => setBottle(e.currentTarget.value)}>
          {numbers.map((a) => <option key={a} value={a}>{a}</option>)}
        
          </select>
          <label>Time</label>
          <select value={time} onChange={e => setTime(e.currentTarget.value)}>

          {numbers.map((a) => <option key={a} value={a}>{a}</option>)}

          </select>
          <h2>Gender</h2>
         Male <input type="radio" name="gender" onClick={() => {setGender("male")}}></input>

         Female <input type="radio" name="gender" onClick={() => {setGender("female")}}></input><br />
        <button>Calculate</button>
    </form>
    {alcoholLevel != null ? <h3>{alcoholLevel.toFixed(2)}</h3> : ""}
    </div>)
}

export default Alcometer
// Code Keypad Component Here

function Keypad (){
    return (
        <div>
        <input type="password" onChange={() => console.log('Entering password...')} />
        <button onClick={() => console.log('Entering password...')}>Submit</button>

        </div>
    )
}

export default Keypad;
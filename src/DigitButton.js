import actions from './App'

export default function DigitButton ({ dispatch, digit }) {
 return <button className="btn" id={"number-"+ digit} onClick = {() => dispatch({ type: actions.add_digit, payload: { digit}})}>{digit}</button>
};
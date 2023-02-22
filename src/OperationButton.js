import actions from './App'

export default function OperationButton ({ dispatch, operation, call }) {
 return <button className="btn" id={"btn-"+ call} onClick = {() => dispatch({ type: actions.choose_operation, payload: { operation}})}>{operation}</button>
};
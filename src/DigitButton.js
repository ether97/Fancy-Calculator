import {ACTIONS} from './App';

export default function DigitButton ({color, dispatch, digit}) {
    return <button style={color} onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit }})}>{digit}</button>
}
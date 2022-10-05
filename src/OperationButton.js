import {ACTIONS} from './App';

export default function OperationButton ({color, dispatch, operation}) {
    return <button style = {color} onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation }})}>{operation}</button>
}
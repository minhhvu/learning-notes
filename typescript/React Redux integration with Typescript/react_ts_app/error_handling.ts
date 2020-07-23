/*
** Error Handling in Typescript
* Problem: In the front-end development, you will fetch data from one server and then get the response. It is called
* an asynchronous action which has 3 states: loading, completed or failed. It also is managed into the Redux store.
* The question is to build a automated centralize error handing with redux + ts for the number of requests.
*
*
* Reference:
* https://www.pluralsight.com/guides/centralized-error-handing-with-react-and-redux
* https://morioh.com/p/57625a9b2288 redux-saga
* https://dev.to/_gdelgado/type-safe-error-handling-in-typescript-1p4n
 */

//Response object shape
import {Reducer} from "redux";

type ErrorResponse = string | string[];

interface ResponseObject<T>{
    isFetching: boolean,
    data?: T | T[],
    // message?: string | string[],
    errors?: ErrorResponse
}

interface Action {
    //list all properties with types
}

enum ActionTypes {
    FETCH_REQUEST = "@@action/FETCH_REQUEST",
    FETCH_SUCCESS = "@@action/FETCH_SUCCESS",
    FETCH_ERROR = "@@action/FETCH_ERROR"
}

type ActionState = ResponseObject<Action>;


//Action Creator
const fetchSuccess = (data: Action) => ({
    type: ActionTypes.FETCH_SUCCESS,
    data,
})
const fetchRequest = () => ({
    type: ActionTypes.FETCH_REQUEST,
})
const fetchError = (errors: ErrorResponse) => ({
    type: ActionTypes.FETCH_ERROR,
    errors
})

//Error Reducer
const initialState: ActionState = {
    isFetching: false
}
const reducer: Reducer<ActionState> = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_REQUEST:
            return {...state, isFetching: true}
        case ActionTypes.FETCH_SUCCESS:
            return {...state, isFetching: false, data: action.payload}
        case ActionTypes.FETCH_ERROR:
            return {...state, isFetching: false, errors: action.payload}
        default:
            return state;
    }
}

//Manually Triggering Errors


//Display Errors
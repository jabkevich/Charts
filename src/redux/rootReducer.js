import {combineReducers} from "redux";
import {budgetExecutionReducer} from "./graph/budgetExecution/budgetExecutionReducer";


export const rootReducer = combineReducers({
    budget: budgetExecutionReducer,

})
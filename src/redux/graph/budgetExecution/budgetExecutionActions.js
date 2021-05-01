import {GET_BUDGET_EXPENDITURE} from "./types";
import { BD } from "./BD"



function getBudgetExecutionApi(year, bd = BD) {
        if(year.toString() in BD.expenditureProgram){
            return BD.expenditureProgram[year.toString()]
        } else{
            return "no data"
        }

}


export const getBudgetExecution = (year) => dispatch =>{
    setTimeout(()=>{
        const data = getBudgetExecutionApi(year)
        if(data!=="no data")
            dispatch({
                type: GET_BUDGET_EXPENDITURE,
                payload: data
            })
    }, 0)
}
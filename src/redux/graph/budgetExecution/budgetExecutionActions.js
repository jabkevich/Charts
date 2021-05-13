import {GET_BUDGET_EXPENDITURE, GET_LEVEL_NUMBERS, GET_LEVEL_PRECENT} from "./types";
import { BD } from "./BD"



function getBudgetExecutionApi(year, bd = BD) {
        if(year.toString() in BD.expenditureProgram){
            return BD.expenditureProgram[year.toString()]
        } else{
            return "no data"
        }

}
function getLevelLivePrecentApi(year, bd = BD) {
    if(year in BD.levelLive){
        console.log("22")
        return BD.levelLive[year]
    } else{
        return "no data"
    }

}
function getLevelLiveNumberApi(bd = BD) {
    if(BD.levelLiveNumber){
        console.log("22")
        return BD.levelLiveNumber
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

export const getLevelLivePrecent = (year) => dispatch =>{
    setTimeout(()=>{
        const data = getLevelLivePrecentApi(year)
        if(data!=="no data")
            dispatch({
                type: GET_LEVEL_PRECENT,
                payload: data
            })
    }, 0)
}

export const getLevelLiveNumber = (year) => dispatch =>{
    setTimeout(()=>{
        const data = getLevelLiveNumberApi(year)
        if(data!=="no data")
            dispatch({
                type: GET_LEVEL_NUMBERS,
                payload: data
            })
    }, 0)
}
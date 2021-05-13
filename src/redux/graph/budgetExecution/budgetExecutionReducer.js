import {GET_BUDGET_EXPENDITURE, GET_LEVEL_NUMBERS, GET_LEVEL_PRECENT} from "./types";
/*
* healthCare: []
*
*
* */

const initialState = {
    /*
    * предполагаю что есть возможность загружать данные из API по годам.
    *  По этому в этом поле будут храниться помесечно расходы по кадой программе
    * {
    *   year: str
    *   budget: int
    *   september: {
    *       healthCare: int
    *       ...
    *   }
    *   november: {
    *   healthCare: int
    *       ...
    *   }
    * }
    *
    * */
    expenditureProgram: {},
    levelLiveToPresent: {},
    levelLiveToNumber: {}
}


export const budgetExecutionReducer = (state = initialState, action) =>{
    switch (action.type){
        case GET_BUDGET_EXPENDITURE:
            return{
                ...state,
                expenditureProgram: action.payload
            }
        case GET_LEVEL_PRECENT:
            return{
                ...state,
                levelLiveToPresent: action.payload
            }
        case GET_LEVEL_NUMBERS:
            return{
                ...state,
                levelLiveToNumber: action.payload
            }
        default:
            return state
    }
}
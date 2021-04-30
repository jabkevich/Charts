import {GET_BUDGET_EXPENDITURE} from "./types";
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
    expenditureProgram: {

    }
}


export const budgetExecutionReducer = (state = initialState, action) =>{
    switch (action.type){
        case GET_BUDGET_EXPENDITURE:
            return{
                expenditureProgram: action.payload
            }
        default:
            return state
    }
}
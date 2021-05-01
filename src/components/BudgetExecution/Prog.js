import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getBudgetExecution} from "../../redux/graph/budgetExecution/budgetExecutionActions";
import {
    ComposedChart,
    Line,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Area, Cell
} from "recharts";
import { scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";





const toPercent = (decimal, fixed = 0) =>{
    return `${((decimal * 100)/12000000).toFixed(fixed)}`;
}

const colors = scaleOrdinal(schemeCategory10).range();

const App = (props)=> {

    useEffect(()=>{
        props.getBudgetExecution(2017)
    })

    const color =["#FF1493",
        "#228B22", "#FF4500", "#40E0D0", "#8A2BE2",
        "#4B0082", "#483D8B", "#2F4F4F", "#008080", "#556B2F", "#7B68EE", "#ADFF2F"]

    const domain = [0, 100];
    if(props.expenditureProgram.January){
        return (
            <ComposedChart
                layout="vertical"
                width={900}
                height={350}
                data={props.expenditureProgram.January}
                margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20
                }}

            >
                <CartesianGrid strokeDasharray="3 3" stroke="#d1d1d2" opacity={0.2} />
                <XAxis type="number" domain={domain}/>
                <YAxis dataKey="name" type="category" stroke="#6f809c" width={100} />
                <Tooltip />
                <Bar dataKey="budget" barSize={15} background={{ fill: '#252932' }} fill="#413ea0" label={{ position: "right" }} radius={[0, 10, 10, 0]}>
                    {props.expenditureProgram.January.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={color[index]} />
                    ))}
                </Bar>

            </ComposedChart>
        );
    }else{
        console.log(props.expenditureProgram)
        return (
            <div>
                загрузка
            </div>
        )
    }

}

const mapStateToProps =state=> {
    return{
        expenditureProgram: state.budget.expenditureProgram
    }

}

export default connect(mapStateToProps, {getBudgetExecution})(App)

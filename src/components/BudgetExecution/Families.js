
import React from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";

const data = [
    { name: "Group A", value: 31.7 },
    { name: "Group B", value: 19.7 },
    { name: "Group C", value: 7 },
    { name: "Group D", value: 5 },
    { name: "Group E", value: 2 },
    { name: "Group F", value: 34.3 }
];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, value}) => {
    return (`${(value)}%`
    );
}
const COLORS = ["#31acfd", "#3f84fc", "#fc605d", "#505172", "#99a1b3", "#cfd7df"];

const Families = props=> {
    return (
        <PieChart width={600} height={400}>
            <Pie
                data={props.levelLiveToPresent}
                cx={300}
                cy={200}
                innerRadius={80}
                outerRadius={120}
                fill="#8884d8"
                label={renderCustomizedLabel}
                labelLine={false}
                dataKey="value"
            >
                { props.levelLiveToPresent.length>0?
                    props.levelLiveToPresent.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                )): <div>Загрузка</div>}
            </Pie>

        </PieChart>
    );
}

export default Families

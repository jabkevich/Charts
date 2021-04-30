
import React from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";

const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 }
];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    return (`${(percent * 100).toFixed(0)}%`
    );
}
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function Families() {
    return (
        <PieChart width={600} height={400}>
            <Pie
                data={data}
                cx={300}
                cy={200}
                innerRadius={80}
                outerRadius={120}
                fill="#8884d8"
                label={renderCustomizedLabel}
                labelLine={false}
                dataKey="value"
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>

        </PieChart>
    );
}

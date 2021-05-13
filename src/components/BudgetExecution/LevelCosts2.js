
import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend } from "recharts";

const data = [
    {
        name: "2010",
        uv: 4000,
        pv: 2400,
        amt: 5000
    },
    {
        name: "2011",
        uv: 3000,
        pv: 1398,
        amt: 2210
    },
    {
        name: "2012",
        uv: 2000,
        pv: 9800,
        amt: 2290
    },
    {
        name: "2013",
        uv: 2780,
        pv: 3908,
        amt: 2000
    },
    {
        name: "2014",
        uv: 1890,
        pv: 4800,
        amt: 2181
    },
    {
        name: "2015",
        uv: 2390,
        pv: 3800,
        amt: 2500
    },

];

export default function LevelCosts2(props) {
    if(props.levelLiveToNumber)
        return (
            <div>

                <LineChart width={731} height={349} data={props.levelLiveToNumber.data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" interval={0} angle={30} dx={20} />
                    <YAxis />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="group1"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                    />
                    <Line type="monotone" dataKey="group2" stroke="#82ca9d" />
                    <Line type="monotone" dataKey="group3" stroke="#82ca9d" />
                    <Line type="monotone" dataKey="group4" stroke="#82ca9d" />
                    <Line type="monotone" dataKey="group5" stroke="#82ca9d" />
                    <Line type="monotone" dataKey="group6" stroke="#82ca9d" />
                    <Line type="monotone" dataKey="group7" stroke="#82ca9d" />
                </LineChart>
            </div>
        )
    else{
        return <div>loading</div>
    }
}

import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Button } from "@material-ui/core";
import Prog from "./Prog"
import Costs from "./Costs"
import LevelCosts from "./LevelCosts";
import Families from "./Families";
import LevelCosts2 from "./LevelCosts2";
import {getBudgetExecution,getLevelLivePrecent, getLevelLiveNumber} from "../../redux/graph/budgetExecution/budgetExecutionActions"
import {useDispatch, useSelector} from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: "hidden",

    },
    control: {
        padding: theme.spacing(2),
    },
    test: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        minHeight: "450px"
    },
    color:{
        background: "#181a1e",
        borderTop: "solid #22252a 5px",
        borderBottom: "solid #22252a 5px",
        border: "solid #22252a 1px",
        padding: "43px"
    },
    label:{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        minHeight: "100px"
    },

}));
const COLORS = ["#31acfd", "#3f84fc", "#fc605d", "#505172", "#99a1b3", "#cfd7df"];
export const BudgetExection = props=>  {
    const dispatch = useDispatch();
    const expenditureProgram= useSelector(state=>state.budget.expenditureProgram)
    const levelLiveToPresent= useSelector(state=>state.budget.levelLiveToPresent)
    const levelLiveToNumber= useSelector(state=>state.budget.levelLiveToNumber)
    const [butYear, butYearSetState] = useState("but2018")
    useEffect(() => {
        dispatch(getLevelLivePrecent(2018))
        dispatch(getBudgetExecution(2018))
        dispatch(getLevelLiveNumber(2018))
    }, [dispatch])

    const getLevePr = (year)=>{
        dispatch(getLevelLivePrecent(year))
        dispatch(getLevelLiveNumber(year))
        butYearSetState(`but${year}`)
    }

    const [spacing, setSpacing] = React.useState(10);
    const classes = useStyles();

    function FormRow() {
        return (
            <React.Fragment>
                <Grid item xs={4}  className={classes.col}>
                    <Paper className={classes.paper}/>dgdglkndgjkdngkjdgfnjkdfgnjkgdnjkgdnkjdg
                </Grid>
                <Grid item xs={4} className={classes.col}>
                    <Paper className={classes.paper}/>dgdgdggddggdffdgjdfghjdfgbhdjgfdgf
                </Grid>
            </React.Fragment>
        );
    }


    return (
        <div>
            <Grid container  className={classes.root} spacing={1}>
                <Grid container justify="flex-start" spacing={spacing}>
                    <Grid item >
                        <h1>Исполнение бюджета</h1>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container className={classes.root} spacing={1}>
                <Grid container justify="space-around" spacing={spacing}>
                    <Grid item className={classes.color} >
                        <h3>Распределение уровня исполнения рограммы расходов январь-сентябрь 2018</h3>
                        <Prog expenditureProgram={expenditureProgram}/>
                    </Grid>
                    <Grid className={classes.test} item>
                        <Costs />
                        <LevelCosts />
                    </Grid>
                </Grid>
            </Grid>
            <Grid container  className={classes.root} spacing={1}>
                <Grid container justify="flex-start" spacing={spacing}>
                    <Grid item >
                        <h1>Уровень жизни</h1>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container className={classes.root} spacing={1}>
                <Grid container justify="space-around" spacing={spacing}>
                    <Grid item className={classes.color}>
                        <div style={{"display": "flex",  "justifyContent": "space-between", "height": "30px", "alightItems": "center"}}>
                            <div style={{"margin": "0", "padding": "4px"}}>оценка уровня дохода семей</div>
                            <div>
                                <Button id={"but2017"} color="primary" variant={butYear==="but2017"?"contained":""}onClick={()=>getLevePr(2017)}>2017</Button>
                                <Button id={"but2018"} color="secondary"  variant={butYear==="but2018"?"contained":""}onClick={()=>getLevePr(2018)}>2018</Button>
                                <Button id={"but2019"} color="primary"  variant={butYear==="but2019"?"contained":""} onClick={()=>getLevePr(2019)}>2019</Button>
                            </div>
                        </div>
                        <Families levelLiveToPresent={levelLiveToPresent}/>
                        <div style={{"width": "100%", "display": "flex", "flexDirection": "column", "flexWrap":"wrap", "height": "150px"}}>
                            {levelLiveToPresent.length>0?levelLiveToPresent.map((data, i)=>(
                                <div key={i} style={{"width": "250px","display": "flex"}}><div style={{"maxWidth": "20px", "maxHeight": "20px","minWidth": "20px", "minHeight": "20px", "background": COLORS[i], "borderRadius": "5px", "marginRight": "5px"}}/>{data.group}</div>
                            )):""}

                        </div>
                    </Grid>
                    <Grid item className={classes.color}>
                        <div style={{"display": "flex",  "justifyContent": "space-between", "height": "30px", "alightItems": "center", "marginBottom": "37px"}}>
                            <div style={{"margin": "0", "padding": "4px"}}>оценка уровня дохода семей</div>
                        </div>
                        <LevelCosts2 levelLiveToNumber={levelLiveToNumber}/>
                        <div style={{"width": "100%", "display": "flex", "flexDirection": "column", "flexWrap":"wrap", "height": "150px"}}>
                            {levelLiveToNumber.types?levelLiveToNumber.types.map((data, i)=>(
                                <div key={i} style={{"width": "250px","display": "flex"}}><div style={{"maxWidth": "20px", "maxHeight": "20px","minWidth": "20px", "minHeight": "20px", "background": COLORS[i], "borderRadius": "5px", "marginRight": "5px"}}/>{data}</div>
                            )):""}
                        </div>
                    </Grid>
                </Grid>

            </Grid>
        </div>

    );
}


export default BudgetExection



import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import {FormControlLabel} from "@material-ui/core";
import Prog from "./Prog"
import Costs from "./Costs"
import LevelCosts from "./LevelCosts";
import Families from "./Families";
import {style} from "redux-logger/src/diff";
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: "hidden"
    },
    control: {
        padding: theme.spacing(2),
    },
    test: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        minHeight: "500px"
    },
    color:{
        background: "#181a1e",
        borderTop: "solid #22252a 5px",
        borderBottom: "solid #22252a 5px",
        border: "solid #22252a 1px"
    },
    label:{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        minHeight: "100px"
    }
}));

export default function BudgetExection() {
    const [spacing, setSpacing] = React.useState(10);
    const classes = useStyles();
    return (
        <div>
            <Grid container fixed className={classes.root} spacing={1}>
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
                        <Prog  />
                    </Grid>
                    <Grid className={classes.test} item>
                        <Costs />
                        <LevelCosts />
                    </Grid>
                </Grid>
            </Grid>
            <Grid container fixed className={classes.root} spacing={1}>
                <Grid container justify="flex-start" spacing={spacing}>
                    <Grid item >
                        <h1>Уровень жизни</h1>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container className={classes.root} spacing={1}>
                <Grid container justify="space-around" spacing={spacing}>
                    <Grid item className={classes.color}>
                        <h3>Распределение уровня исполнения рограммы расходов январь-сентябрь 2018</h3>
                        <Families />
                    </Grid>
                    <Grid item className={classes.color}>
                        <h3>Распределение уровня исполнения рограммы расходов январь-сентябрь 2018</h3>
                        <Families />
                    </Grid>
                </Grid>

            </Grid>
        </div>

    );
}

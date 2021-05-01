import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import { Button, ButtonGroup, FormControlLabel } from "@material-ui/core";
import Prog from "./Prog"
import Costs from "./Costs"
import LevelCosts from "./LevelCosts";
import Families from "./Families";
import {style} from "redux-logger/src/diff";
import LevelCosts2 from "./LevelCosts2";
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
        border: "solid #22252a 1px"
    },
    label:{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        minHeight: "100px"
    },

}));

export default function BudgetExection() {
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
                        <Prog  />
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
                            <div  >
                                <Button color="primary">2017</Button>
                                <Button color="secondary">2018</Button>
                                <Button variant="contained" color="primary">2019</Button>
                            </div>
                        </div>
                        <Families />
                        <div style={{"width": "100%", "display": "flex", "flexDirection": "column", "flexWrap":"wrap", "height": "150px"}}>
                            <div style={{"width": "250px","display": "flex"}}><div style={{"maxWidth": "20px", "maxHeight": "20px","minWidth": "20px", "minHeight": "20px", "background": "red", "borderRadius": "5px", "marginRight": "5px"}}/>Денег не хватает даже на продукты питания</div>
                            <div style={{"width": "250px","display": "flex"}}><div style={{"maxWidth": "20px", "maxHeight": "20px", "minWidth": "20px", "minHeight": "20px","background": "red", "borderRadius": "5px", "marginRight": "5px"}}/>Вызывает затрудение покупка одежды</div>
                            <div style={{"width": "250px","display": "flex"}}><div style={{"maxWidth": "20px", "maxHeight": "20px", "minWidth": "20px", "minHeight": "20px","background": "red", "borderRadius": "5px", "marginRight": "5px"}}/>Вызывает затрудение покупка вещей длительного пользования</div>
                            <div style={{"width": "250px","display": "flex"}}><div style={{"maxWidth": "20px", "maxHeight": "20px", "minWidth": "20px", "minHeight": "20px","background": "red", "borderRadius": "5px", "marginRight": "5px"}}/>Вызывает затрудение покупка дорогих вещей</div>
                            <div style={{"width": "250px","display": "flex"}}><div style={{"maxWidth": "20px", "maxHeight": "20px", "minWidth": "20px", "minHeight": "20px","background": "red", "borderRadius": "5px", "marginRight": "5px"}}/>Могут позволить себе покупать дорогие вещи</div>
                            <div style={{"width": "250px","display": "flex"}}><div style={{"maxWidth": "20px", "maxHeight": "20px", "minWidth": "20px", "minHeight": "20px","background": "red", "borderRadius": "5px", "marginRight": "5px"}}/>нет ответа</div>
                        </div>
                    </Grid>
                    <Grid item className={classes.color}>
                        <LevelCosts2/>
                    </Grid>
                </Grid>

            </Grid>
        </div>

    );
}






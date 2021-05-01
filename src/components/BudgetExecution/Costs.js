import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import {Chip, withStyles} from "@material-ui/core";
import DoneIcon from '@material-ui/icons/Done';
import DescriptionIcon from "@material-ui/icons/Description";
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        minWidth: "500px",
        background: "#181a1e",
        flexDirection: "column",
        border: "solid #22252a 1px",
        color: "#d1d1d2",
        minHeight: "180px"
    },
    details: {
        width: "100%",
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    },
    playIcon: {
        height: 38,
        width: 38,
    },
    center:{
        display: 'flex',
        justifyContent: 'center',
        fontSize: "2em"
    },
    label:{
        fontSize: "1em"
    },
    test: {
        display: 'flex',
        justifyContent: 'center',
        fontSize: "0.7em",
        marginTop: "10px"
    }
}));


const MyChip = withStyles({
    root: {
        color: '#20c6bd',
        border: '#20c6bd solid 1px',
    },
})(Chip);
const Done = withStyles({
    root: {
        color: '#20c6bd',
    },
})(DoneIcon)

export default function Cost() {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <Card className={classes.root}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography className={classes.label} component="p" >
                        Бюджетные расходы администрации района
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography className={classes.center} gutterBottom variant="h5" component="h2">
                            44 936.30 тыс. руб.
                    </Typography>
                    <Typography className={classes.center} variant="body2" color="textSecondary" component="div">
                    <MyChip
                        variant="outlined"
                        color="secondary"
                        label="18.3%"
                        onDelete={()=>{}}
                        deleteIcon={<Done />}
                    />
                    </Typography>
                    <Typography className={classes.test}>
                        за первый квартал 2019 года в расчете на 1 000 человек
                    </Typography>
                </CardContent>
            </div>

        </Card>
    );
}

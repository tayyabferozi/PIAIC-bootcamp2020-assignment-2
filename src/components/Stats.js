import React, { useContext } from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import NumberFormat from "react-number-format";

import { GlobalContext } from "../context/GlobalState";

const useStyles = makeStyles({
  cardsRoot: {
    marginTop: "2rem",
    flexGrow: 1,
  },
  gridRoot: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  },
  card: {
    minWidth: 275,
    minHeight: 200,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  subTitle: {
    color: "#a7a7a7",
    fontWeight: "bold",
  },
  danger: {
    color: "#b2102f",
  },
  success: {
    color: "#00a152",
  },
  infected: {
    color: "#4615b2",
  },
});

const Stats = () => {
  const {
    state: { stats },
  } = useContext(GlobalContext);
  const classes = useStyles();

  return (
    <div className={classes.cardsRoot}>
      <Grid container spacing={3} className={classes.gridRoot}>
        <Grid item>
          <Card className={classes.card}>
            <Typography
              className={`${classes.title} ${classes.danger}`}
              variant="h5"
            >
              <NumberFormat
                value={stats.deaths}
                displayType={"text"}
                thousandSeparator={true}
              />
            </Typography>
            <Typography
              className={classes.subTitle}
              variant="button"
              display="block"
              gutterBottom
            >
              deaths
            </Typography>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.card}>
            <Typography
              className={`${classes.title} ${classes.success}`}
              variant="h5"
            >
              <NumberFormat
                value={stats.recovered}
                displayType={"text"}
                thousandSeparator={true}
              />
            </Typography>
            <Typography
              className={classes.subTitle}
              variant="button"
              display="block"
              gutterBottom
            >
              recovered
            </Typography>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.card}>
            <Typography
              className={`${classes.title} ${classes.infected}`}
              variant="h5"
            >
              <NumberFormat
                value={stats.confirmed}
                displayType={"text"}
                thousandSeparator={true}
              />
            </Typography>
            <Typography
              className={classes.subTitle}
              variant="button"
              display="block"
              gutterBottom
            >
              confirmed
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Stats;

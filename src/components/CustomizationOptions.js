import React, { useState, useContext, useEffect } from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core";
import countries from "../shared/countries";

import { GlobalContext } from "../context/GlobalState";
import { apiDomain } from "../constants/constants";
import { setUIState, setStats, setIsLoading } from "../context/actionCreators";

const useStyles = makeStyles({
  buttons: {
    marginTop: "1rem",
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  formControl: {
    minWidth: 120,
  },
  selectContainer: {
    marginTop: "1.5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const CustomizationOptions = () => {
  const classes = useStyles();
  const {
    state: { UIState, selectedCountry },
    dispatch,
  } = useContext(GlobalContext);
  const [checkBoxState, setCheckBoxState] = useState({
    checkedA: UIState.showStats,
    checkedB: UIState.showChart,
  });

  const [countryState, setCountryState] = useState(selectedCountry);

  const handleCheckBoxChange = (e) => {
    const { name } = e.target;

    setCheckBoxState((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };

  const handleSelectChange = (e) => {
    const { value } = e.target;

    setCountryState(value);
  };

  useEffect(() => {
    dispatch(setUIState(checkBoxState.checkedA, checkBoxState.checkedB));
  }, [checkBoxState, dispatch]);

  useEffect(() => {
    let api = apiDomain;

    if (countryState !== "global") {
      api = apiDomain + "/countries/" + countryState;
    }
    const fetchStats = async () => {
      dispatch(setIsLoading(true));
      const res = await fetch(api);
      const parsedRes = await res.json();
      dispatch(setIsLoading(false));

      const stats = {
        confirmed: parsedRes.confirmed.value,
        deaths: parsedRes.deaths.value,
        recovered: parsedRes.recovered.value,
      };

      dispatch(setStats(stats));
    };

    fetchStats();
  }, [countryState, dispatch]);

  return (
    <div>
      <FormGroup row className={classes.buttons}>
        <FormControlLabel
          checked={checkBoxState.checkedA}
          onChange={handleCheckBoxChange}
          control={<Checkbox name="checkedA" />}
          label="Show stats"
        />
        <FormControlLabel
          checked={checkBoxState.checkedB}
          onChange={handleCheckBoxChange}
          control={<Checkbox name="checkedB" />}
          label="Show chart"
        />
      </FormGroup>
      <div className={classes.selectContainer}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">
            Country
          </InputLabel>
          <Select
            name="country"
            value={countryState}
            onChange={handleSelectChange}
            label="Country"
          >
            <MenuItem value="global">Global</MenuItem>
            {countries.map((el) => {
              return (
                <MenuItem key={el} value={el}>
                  {el}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default CustomizationOptions;

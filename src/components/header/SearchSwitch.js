import React from "react";
import "./header.css";
import { Switch, FormControlLabel, FormGroup } from "@material-ui/core";

const SearchSwitch = () => {
  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };
  const [state, setState] = React.useState({
    gilad: true
  });

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Switch
            checked={state.checkedB}
            onChange={handleChange("checkedB")}
            value="checkedB"
            color="primary"
          />
        }
        label="Primary"
      />
    </FormGroup>
  );
};

export default SearchSwitch;

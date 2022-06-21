import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";

export default function ToggleSwitch(props) {
  return (
    <FormGroup className="toggle-group">
      <Grid component="label" container alignItems="center" spacing={1}>
        <Grid item>Email Me</Grid>
        <Grid item>
          <Switch
            checked={props.phoneSelected}
            onChange={props.onToggleChange}
          />
        </Grid>
        <Grid item>Call Me</Grid>
      </Grid>
    </FormGroup>
  );
}

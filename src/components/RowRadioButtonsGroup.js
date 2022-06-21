import React, { useState } from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';




export default function RowRadioButtonsGroup(props) {
  return (
    <FormControl id="radio-group-flex">
      {/* <FormLabel id="demo-row-radio-buttons-group-label">Please Contact Me By:</FormLabel> */}
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={props.onRadioChange}
      >
        <FormControlLabel value="phone" control={<Radio checked={props.phoneSelected}/>} label="Phone" />
        <FormControlLabel value="email" control={<Radio checked={!props.phoneSelected}/>} label="Email" />
      </RadioGroup>
    </FormControl>
  );
}

import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function ToggleButtons(props) {
  const [alignment, setAlignment] = React.useState(props.options[0]);

  const handleChange = (
    event,
    newAlignment
  ) => {
    setAlignment(newAlignment);
    props.handleToggleChange(event);
  };


  return (
    <FormControl>
    <FormLabel id="demo-row-radio-buttons-group-label">{props.label}</FormLabel>
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleChange}
    >
         {props.options.map((option, i) =>  <ToggleButton value={option} key={i}>{option}</ToggleButton>)}
     
    </ToggleButtonGroup>
    </FormControl>
  );
}

import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ColorToggleButton() {
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup

      color="secondary"
      border-color="black"
      value={alignment}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value="web">User</ToggleButton>
      <ToggleButton value="android">Admin</ToggleButton>
     
    </ToggleButtonGroup>
  );
}

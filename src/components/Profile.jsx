import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
function Profile(props) {
  const [choose, setChoose] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState([null, null]);

  const handleChange = (event) => {
    setChoose(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (<>
  <h1>Profile</h1>
  <Button sx={{ display: 'block', mt: 2 }} onClick={handleOpen}>
        Open the select
      </Button>
      <FormControl sx={{ m: 1, minWidth: 250 }}>
        <InputLabel id="demo-controlled-open-select-label">Ordenar</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={choose}
          label="Sort"
          onChange={handleChange}
        >
          <MenuItem value="Sort Movies"></MenuItem>
          <MenuItem value={10}>Más cerca de la fecha de lanzamiento</MenuItem>
          <MenuItem value={20}>Favoritos</MenuItem>
          <MenuItem value={30}>Lista visto</MenuItem>
        </Select>
      </FormControl>

  </>);
}

export default Profile;
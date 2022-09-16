import { FC } from 'react';

import { Grid, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Box } from '@mui/system';

export const FilterBar: FC = () => {
  return (
    <Box marginBottom={5} marginTop={10}>
      <Grid container spacing={2} justifyContent="space-between">
        <Grid>
          <TextField
            label="Search field"
            type="search"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid>
          <FormControl fullWidth>
            <InputLabel>Sort</InputLabel>
            <Select value={1} label="Sort">
              <MenuItem value={1}>By popularity</MenuItem>
              <MenuItem value={2}>By price: low to high</MenuItem>
              <MenuItem value={3}>By price: high to low</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
};

import { FC } from 'react';

import { AppBar, Toolbar, Typography } from '@mui/material';

export const Header: FC = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Wine and Beer Finder
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

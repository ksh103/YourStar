import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Grid from '@mui/material/Grid';
import BasicCard from './ItemCard';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="나의 팬미팅" value="1" />
            <Tab label="추억 보관함" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            sx={{
              color: 'black',
            }}
          >
            <BasicCard></BasicCard>
          </Grid>
        </TabPanel>
        <TabPanel value="2"></TabPanel>
      </TabContext>
    </Box>
  );
}

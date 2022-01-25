import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Grid from '@mui/material/Grid';
import { StarCard, ItemCard } from './ItemCard';

export default function StarLabTabs() {
  const [value, setValue] = React.useState('1');
  // 받아오는 정보에 따라 변경될 state
  const [permission, setPermission] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function PermissionCheck() {
    const perInfo = permission;
    if (perInfo === false) {
      return <StarCard></StarCard>;
    } else {
      return <ItemCard></ItemCard>;
    }
  }

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="내가 신청한 미팅" value="1" />
            <Tab label="미팅기록" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{
              color: 'black',
            }}
          >
            <PermissionCheck></PermissionCheck>
          </Grid>
        </TabPanel>
        <TabPanel value="2"></TabPanel>
      </TabContext>
    </Box>
  );
}

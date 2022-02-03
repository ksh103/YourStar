import React from 'react';
import poster from '../../assets/images/poster1.jpg';
import Grid from '@mui/material/Grid';
export default function MypageCard() {
  return (
    <Grid xs={12} sm={6} md={4} item>
      <div style={{ padding: '10px' }}>
        <img
          src={poster}
          alt="poster"
          style={{ width: '100%', objectFit: 'cover' }}
        />
      </div>
    </Grid>
  );
}

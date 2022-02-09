import React from 'react';
import poster from '../../assets/images/poster1.jpg';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

export default function UserMypageCard({ meeting }) {
  return (
    <>
      <Grid xs={12} sm={6} md={4} item>
        <div style={{ padding: '10px' }}>
          <Link to={{ pathname: `/schedule/${meeting.meetingId}` }}>
            <img
              src={poster}
              alt="poster"
              style={{ width: '100%', objectFit: 'cover', cursor: 'pointer' }}
            />
          </Link>
        </div>
      </Grid>
    </>
  );
}

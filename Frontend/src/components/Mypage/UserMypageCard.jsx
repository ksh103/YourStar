import React from 'react';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { IMAGE_URL } from '../../utils/contants';

export default function UserMypageCard({ meeting }) {
  return (
    <>
      <Grid xs={12} sm={6} md={4} item>
        <div style={{ height: '90%', padding: '20px' }}>
          <Link to={{ pathname: `/schedule/${meeting.meetingId}` }}>
            {meeting && meeting.image === null ? (
              <img
                src={'/images/noimg.gif'}
                alt="noimage"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  cursor: 'pointer',
                }}
              />
            ) : (
              <img
                src={`${IMAGE_URL}${meeting.image}`}
                alt={meeting.image}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  cursor: 'pointer',
                }}
              />
            )}
          </Link>
        </div>
      </Grid>
    </>
  );
}

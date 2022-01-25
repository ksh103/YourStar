import React from 'react';
import { ImageCard, NonStarCard } from './Mypage.style';
import Grid from '@mui/material/Grid';

function ItemCard() {
  return (
    <Grid
      xl={3}
      md={4}
      sm={6}
      sx={{
        width: '100%',
        marginBottom: '20px',
        marginRight: '0px',
      }}
    >
      <ImageCard>아아아</ImageCard>
    </Grid>
  );
}

function StarCard() {
  return (
    <Grid
      xl={3}
      md={4}
      sm={6}
      sx={{
        width: '100%',
        marginBottom: '20px',
        marginRight: '0px',
      }}
    >
      <NonStarCard>이건실패용</NonStarCard>
    </Grid>
  );
}

export { StarCard, ItemCard };

import React from 'react';
import { useParams } from 'react-router';

export default function Room() {
  const { id } = useParams();

  return <div style={{ color: 'white' }}>{id}</div>;
}

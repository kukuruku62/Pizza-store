import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function Variants() {
  return (
    <Stack spacing={1} className="pizza-block">
      <Skeleton variant="circular" width={240} height={240}  />
      <Skeleton variant="rounded" width={260} height={50} sx={{ bgcolor: '#f9f8f1' }} />
      <Skeleton variant="rounded" width={260} height={40} />
      <Skeleton variant="rounded" width={260} height={40} />
    </Stack>
  );
}
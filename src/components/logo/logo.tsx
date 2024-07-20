import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

interface Props {
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

const Logo: FC<Props> = ({ onClick, variant }) => (
  <Box onClick={onClick} sx={{ cursor: onClick ? 'pointer' : 'default' }}>
    <Typography
      variant="h4"
      component="h1"
      sx={{ fontWeight: 700, display: 'flex', alignItems: 'center' }}
    >
      <Image
        src="/images/pve.svg"
        alt="Course Logo"
        width={80} // Adjust width as needed
        height={80} // Adjust height as needed
      />
      {/* Course<span>space</span> */}
    </Typography>
  </Box>
);

Logo.defaultProps = {
  variant: 'primary',
};

export default Logo;
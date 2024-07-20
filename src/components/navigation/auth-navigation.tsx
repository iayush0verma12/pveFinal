import React, { FC, useState } from 'react';
import Box from '@mui/material/Box';
import { StyledButton } from '@/components/styled-button';
import Typography from '@mui/material/Typography';

const AuthNavigation: FC = () => {
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);

  const handleButtonClick = () => {
    setShowPhoneNumber(!showPhoneNumber);
  };

  return (
    <Box sx={{ '& button:first-child': { mr: 2 } }}>
      <StyledButton disableHoverEffect={true} onClick={handleButtonClick}>
        {showPhoneNumber ? 'Hide' : 'CALL NOW'}
      </StyledButton>
      {showPhoneNumber && (
        <Box sx={{ mt: 2 }}>
          <Typography variant="body1">
            Know more about our products. Contact Now!
          </Typography>
          <Box display="flex" alignItems="center">
            <img
              src="/images/contact.png"
              alt="Logo"
              width={20}
              height={20}
              style={{ marginRight: 8 }}
            />
            <Typography variant="body1">
              Phone Number: +91-7033664425
            </Typography>
          </Box>
          {/* <Box display="flex" alignItems="center">
            <img
              src="/images/alternate.png"
              alt="Logo"
              width={20}
              height={20}
              style={{ marginRight: 8 }}
            />
            <Typography variant="body1">
              Alternate Number: 7033664425
            </Typography>
          </Box> */}
          <Box display="flex" alignItems="center">
            <img
              src="/images/email.png"
              alt="Logo"
              width={20}
              height={20}
              style={{ marginRight: 8 }}
            />
            <Typography variant="body1">
              Email: premvishalenterprises@gmail.com
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default AuthNavigation;
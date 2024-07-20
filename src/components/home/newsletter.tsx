import React, { FC } from 'react';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { StyledButton } from '../styled-button';

const HomeNewsLetter: FC = () => {
  const handleEmailClick = () => {
    window.location.href = `mailto:premvishalenterprises@gmail.com?subject=Inquiry about products&body=Dear Prem Vishal Enterprises,%0D%0A%0D%0AI would like to receive catalogues, product details, and more information about your offerings.[Enter Specific detail about any particular product.]%0D%0A%0D%0AThank you,%0D%0A[Your Name]`;
  };

  return (
    <Box sx={{ backgroundColor: 'background.paper', py: { xs: 8, md: 10 } }}>
      <Container>
        <Box
          sx={{
            backgroundColor: 'secondary.main',
            borderRadius: 10,
            py: { xs: 4, md: 10 },
            px: { xs: 4, md: 8 },
            textAlign: 'center',
          }}
        >
          <Typography variant="h1" component="h2" sx={{ mb: 1, fontSize: { xs: 32, md: 42 } }}>
          Click here to receive catalogs, product details, and more information
          </Typography>
          <Typography sx={{ mb: 6 }}>Click the button below to send us an email and get information about our products.</Typography>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-around',
              width: { xs: '100%', md: 560 },
              mx: 'auto',
            }}
          >
            <InputBase
              sx={{
                backgroundColor: 'background.paper',
                borderRadius: 3,
                width: '100%',
                height: 48,
                px: 2,
                mr: { xs: 0, md: 3 },
                mb: { xs: 2, md: 0 },
              }}
              placeholder="Enter your Email Address"
            />
            <Box>
              <StyledButton disableHoverEffect size="large" onClick={handleEmailClick}>
                Email
              </StyledButton>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeNewsLetter;
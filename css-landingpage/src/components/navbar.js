import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AppBar position="fixed" className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <Toolbar>
        <img 
          src="https://media.licdn.com/dms/image/v2/C560BAQF6lm99eoAgjg/company-logo_200_200/company-logo_200_200/0/1675197081133?e=1738195200&v=beta&t=szOUDVXkf9UwESK3xpGJTC8Du0qJr8NcuDFx_p01CdY" 
          alt="CSS NIT Durgapur Logo" 
          style={{ height: '50px', marginRight: '1rem' }} 
        />
        <Box sx={{ display: 'flex', marginLeft: 'auto' }}>
          <Button component={Link} to="/" color={isScrolled ? 'inherit' : 'primary'}>
            Home
          </Button>
          <Button component={Link} to="/events" color={isScrolled ? 'inherit' : 'primary'} style={{ marginLeft: '1rem' }}>
            Events
          </Button>
          <Button component={Link} to="/team" color={isScrolled ? 'inherit' : 'primary'} style={{ marginLeft: '1rem' }}>
            Team
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

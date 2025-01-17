import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, Box, List, ListItem, ListItemText} from '@mui/material';
import { Menu } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


// Estilos para los botones con hover
const buttonStyle = {
  padding: '10px 20px',
  margin: '0 5px',
  borderRadius: '5px',
  transition: '0.3s',
};

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  
  // Función para alternar el Drawer (menú lateral)
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar position="static" style={{ backgroundColor: '#1b1c1c ' , position: 'fixed', 
//   top: 0, 
//   left: 0, 
//   right: 0, 
  zIndex: 1000,
  }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1, fontWeight: 'bold' }}>
            DP
          </Typography>

          {/* Botones para pantallas grandes */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {['Inicio', 'Sobre mí', 'Portfolio', 'Contacto'].map((text, index) => (
              <motion.div
                key={index}
                whileHover={{ backgroundColor: '#555' }} // Efecto de cambio de color al posicionarse
                style={{ ...buttonStyle }}
              >
                <Button
                  color="inherit"
                  component={Link}
                  to={index === 0 ? '/' : `/${text.replace(' ', '').toLowerCase()}`}
                  style={{ color: '#fff', fontWeight: 'bold' }}
                >
                  {text}
                </Button>
              </motion.div>
            ))}
          </Box>

          {/* Menú hamburguesa para pantallas pequeñas */}
          <IconButton
            sx={{ display: { xs: 'block', md: 'none' }, color: '#fff' }}
            onClick={toggleDrawer(true)}
          >
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer para el menú lateral */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 250,
            backgroundColor: '#223',
            height: '100%',
            color: '#fff',
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {['Inicio', 'Sobre mí', 'Portfolio', 'Contacto'].map((text, index) => (
              <ListItem
                button
                key={index}
                component={Link}
                to={index === 0 ? '/' : `/${text.replace(' ', '').toLowerCase()}`}
                sx={{
                  '&:hover': {
                    backgroundColor: '#555',
                  },
                  color: '#fff',
                }}
              >
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;

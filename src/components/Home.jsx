import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import piano from "../assets/piano.jpg";



// Animación general para secciones
const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
const Home = () => (
<Box
  component={motion.div}
  variants={sectionVariants}
  initial="hidden"
  animate="visible"
  textAlign="center"
  py={2}
  style={{
    background: 'linear-gradient(to right, #07244f, #445062)',
    backgroundImage: `url(${piano})`, // Aplica la imagen de fondo correctamente
    backgroundSize: 'cover',          // Ajusta la imagen al tamaño del contenedor
    // backgroundPosition: 'center',     // Centra la imagen de fondo
    backgroundRepeat: 'no-repeat',    // Evita que la imagen se repita
    minHeight: '80vh',               // Asegura que el Box ocupe al menos toda la altura de la ventana
    display: 'flex',
    flexDirection: 'column',
    color: '#fff',
    width: '100%',                   // Asegura que ocupe el 100% del ancho del body
    position: 'relative',            // Para asegurar que el fondo cubra todo el Box
    overflow: 'hidden',              // Elimina el scroll vertical
    height: '95vh',    
  }}
>

      <Typography  variant="h2" style={{ fontWeight: 'bold', marginBottom: '20px' ,marginTop:"100px",marginLeft:"5px",marginRight:"5px"}}>
        Damián Paz V
      </Typography>
      <Typography variant="h5" style={{ marginBottom: '30px' }}>
        Compositor de Música 
      </Typography>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
  <Button
    component={motion.a}
    href="/portfolio"
    variant="contained"
    style={{
      background: '#676a6a',
      color: '#fff',
      padding: '10px 20px',
      fontSize: '18px',
      borderRadius: '30px',
      boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.3)',
      maxWidth: '250px',
      width: '100%',
    }}
    whileHover={{ scale: 1.1 }}
  >
    escucha mi trabajo
  </Button>
</div>

    </Box>
  );

export default Home;

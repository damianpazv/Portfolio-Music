import React from 'react';
import { Container, Typography, Grid, Paper, Grid2, Box } from '@mui/material';
import { motion } from 'framer-motion';

// Animación general para secciones
const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const Portfolio = () => (
    <Container maxWidth="lg" component={motion.div} variants={sectionVariants} initial="hidden" animate="visible" style={{ paddingTop: '40px' }}>
      <Typography variant="h4" gutterBottom style={{ fontWeight: 'bold', color: '#333', marginBottom: '20px', paddingTop: "60px" }}>
        Mis Trabajos
      </Typography>
      <Grid2 container spacing={3}>
  {/* Video 1 */}
  <Grid2 item xs={12} sm={6} md={6}>
    <Box
      style={{
        border: '1px solid #ddd',
        borderRadius: '10px',
        padding: '15px',
        textAlign: 'center',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
      }}
    >
      <iframe
        width="100%"
        height="200"
        src="https://www.youtube.com/embed/-ive1ZdbRTE?si=QgvzO7cMh_a2Z8LQ"
        title="Proyecto 1"
        style={{ borderRadius: '10px' }}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      {/* Descripción adicional */}
      <Box style={{ textAlign: 'left', marginTop: '10px' }}>
        <Typography variant="body2" style={{ color: '#555' }}>
          <strong>Título:</strong> Sangre de mi sangre
        </Typography>
        <Typography variant="body2" style={{ marginTop: '10px', color: '#555' }}>
          <strong>Tipo:</strong> Cortometraje
        </Typography>
        <Typography variant="body2" style={{ marginTop: '10px', color: '#555' }}>
          <strong>Año:</strong> 2023
        </Typography>
        <Typography variant="body2" style={{ color: '#555' , marginTop: '10px' }}>
          <strong>Reconocimientos:</strong> Nominado a mejor banda sonora en los premios Mercedes Sosa 2024
        </Typography>
      </Box>
    </Box>
  </Grid2>

  {/* Video 2 */}
  <Grid2 item xs={12} sm={6} md={6}>
    <Box
      style={{
        border: '1px solid #ddd',
        borderRadius: '10px',
        padding: '15px',
        textAlign: 'center',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
      }}
    >
      <iframe
        width="100%"
        height="200"
        src="https://www.youtube.com/embed/ZxcNkFpLk-k?si=ll7MT6ubivJrUP93"
        title="Proyecto 2"
        style={{ borderRadius: '10px' }}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <Box style={{ textAlign: 'left', marginTop: '10px' }}>
        <Typography variant="body2" style={{ color: '#555' }}>
          <strong>Título:</strong> Responsables
        </Typography>
        <Typography variant="body2" style={{ marginTop: '10px', color: '#555' }}>
          <strong>Tipo:</strong> Cortometraje
        </Typography>
        <Typography variant="body2" style={{ marginTop: '10px', color: '#555' }}>
          <strong>Año:</strong> 2021
        </Typography>
        <Typography variant="body2" style={{ color: '#555', marginTop: '10px' }}>
          <strong>Reconocimientos:</strong> Nominado a mejor banda sonora en los premios Mercedes Sosa 2022
        </Typography>
      </Box>
    </Box>
  </Grid2>

  {/* Video 3 */}
  <Grid2 item xs={12} sm={6} md={6}>
    <Box
      style={{
        border: '1px solid #ddd',
        borderRadius: '10px',
        padding: '15px',
        textAlign: 'center',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
      }}
    >
      <iframe
        width="100%"
        height="200"
        src="https://www.youtube.com/embed/ahWcAYpo2Lw"
        title="Proyecto 3"
        style={{ borderRadius: '10px' }}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </Box>
  </Grid2>

</Grid2>

    </Container>
  );
  

export default Portfolio;

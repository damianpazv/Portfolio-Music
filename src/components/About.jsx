import React from 'react';
import { Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

// Animación general para secciones
const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
  
const About = () => (
    <Container component={motion.div} variants={sectionVariants} initial="hidden" animate="visible" style={{ paddingTop: '40px' }}>
      <Typography variant="h4" gutterBottom style={{ fontWeight: 'bold', color: '#333' }}>
        Sobre mí
      </Typography>
      <Typography variant="body1" style={{ lineHeight: 1.8, fontSize: '18px', color: '#555' }}>
        Soy un compositor apasionado por la música, con experiencia en bandas sonoras, jingles y más. He trabajado en múltiples
        proyectos que buscan transmitir emociones únicas a través del sonido.
      </Typography>
    </Container>
  );

export default About;

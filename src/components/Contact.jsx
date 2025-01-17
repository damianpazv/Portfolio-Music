import React from 'react';
import { Container, Typography, Box, TextField, Button } from '@mui/material';
import { motion } from 'framer-motion';

// Animación general para secciones
const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

const Contact = () => (
    <Container component={motion.div} variants={sectionVariants} initial="hidden" animate="visible" style={{ paddingTop: '40px' }}>
      <Typography variant="h4" gutterBottom style={{ fontWeight: 'bold', color: '#333' }}>
        Contacto
      </Typography>
      <Box component="form" mt={3}>
        <TextField fullWidth label="Nombre" margin="normal" variant="outlined" />
        <TextField fullWidth label="Email" margin="normal" variant="outlined" />
        <TextField fullWidth label="Mensaje" margin="normal" variant="outlined" multiline rows={4} />
        <Button
          variant="contained"
          color="primary"
          size="large"
          style={{
            marginTop: '16px',
            background: 'linear-gradient(to right, #6a11cb, #2575fc)',
            color: '#fff',
          }}
        >
          Enviar
        </Button>
      </Box>
    </Container>
  );

export default Contact;

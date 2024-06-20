import React, { useEffect } from 'react';

const InstagramAuth = () => {
  useEffect(() => {
    const clientId = '423180797362646'; // Reemplaza con tu app ID
    const redirectUri = 'https://vamps-of-the-world.vercel.app/'; // Reemplaza con tu redirect URI registrada
    const authUrl = `https://api.instagram.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=user_profile,user_media&response_type=code`;

    window.location.href = authUrl; // Redirige al usuario a la URL de autorización de Instagram
  }, []);

  return <div>Redirigiendo a Instagram para autenticación...</div>;
};

export default InstagramAuth;
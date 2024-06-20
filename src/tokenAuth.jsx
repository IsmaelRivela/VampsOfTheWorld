
import React, { useEffect , useState } from 'react';
import axios from 'axios';

// const Auth = () => {
//   useEffect(() => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const code = urlParams.get('code');

//     const getAccessToken = async (authorizationCode) => {
//       const appId = '423180797362646'; // Reemplaza con tu app ID
//       const appSecret = '90d000740688c3c34109edf7da140b29'; // Reemplaza con tu app secret
//       const redirectUri = 'http://localhost:3000/auth'; // Debe coincidir con la redirect URI registrada

//       const url = `https://api.instagram.com/oauth/access_token`;

//       try {
//         const response = await axios.post(url, {
//           client_id: appId,
//           client_secret: appSecret,
//           grant_type: 'authorization_code',
//           redirect_uri: redirectUri,
//           code: authorizationCode,
//         });

//         console.log('Token de acceso:', response.data.access_token);

//         localStorage.setItem('instagram_access_token', accessToken)
//         // Guarda el token de acceso en tu estado o en algún almacenamiento seguro
//       } catch (error) {
//         console.error('Error al obtener el token de acceso:', error);
//       }
//     };

//     if (code) {
//       getAccessToken(code);
//     }
//   }, []);

//   return (<div>Autenticación exitosa. Puedes cerrar esta ventana.</div>)
// };

// export default Auth;


// src/components/Auth.js


const Auth = () => {

  const [accessToken, setAccessToken] = useState(null); 

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    const getAccessToken = async (authorizationCode) => {
      const appId = process.env.REACT_APP_INSTAGRAM_APP_ID;
      const appSecret = process.env.REACT_APP_INSTAGRAM_APP_SECRET;
      const redirectUri = process.env.REACT_APP_INSTAGRAM_REDIRECT_URI;

      const url = 'https://api.instagram.com/oauth/access_token';

      try {
        const response = await axios.post(url, {
          client_id: appId,
          client_secret: appSecret,
          grant_type: 'authorization_code',
          redirect_uri: redirectUri,
          code: authorizationCode,
        });

        const accessToken = response.data.access_token;
        console.log('Token de acceso:', accessToken);

        // Almacena el token en el localStorage
        localStorage.setItem('instagram_access_token', accessToken);

      } catch (error) {
        console.error('Error al obtener el token de acceso:', error);
      }
    };

    if (code) {
      getAccessToken(code);
    }
  }, []);

  return <div>{accessToken ? (
    <p>Token de acceso: {accessToken}</p>
  ) : (
    <p>Esperando token de acceso...</p>
  )}
  <p>Autenticación exitosa. Puedes cerrar esta ventana.</p></div>;
};

export default Auth;

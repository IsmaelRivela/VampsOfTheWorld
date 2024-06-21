
// import React, { useEffect , useState } from 'react';
// import axios from 'axios';


// const Auth = () => {

//   const [accessToken, setAccessToken] = useState(null); 

//   useEffect(() => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const code = urlParams.get('code');

//     const getAccessToken = async (authorizationCode) => {
//       const appId = '7507129022746105';
//       const appSecret = '9a6dc08bc500bf9738a9cbaea22074b2';
//       const redirectUri = 'https://vamps-of-the-world.vercel.app/';

//       const url = 'https://api.instagram.com/oauth/access_token';

//       try {
//         const response = await axios.post(url, {
//           client_id: appId,
//           client_secret: appSecret,
//           grant_type: 'authorization_code',
//           redirect_uri: redirectUri,
//           code: authorizationCode,
//         });

//         const accessToken = response.data.access_token;
//         console.log('Token de acceso:', accessToken);

//         // Almacena el token en el localStorage
//         localStorage.setItem('instagram_access_token', accessToken);

//       } catch (error) {
//         console.error('Error al obtener el token de acceso:', error);
//       }
//     };

//     if (code) {
//       getAccessToken(code);
//     }
//   }, []);

//   return <div>{accessToken ? (
//     <p>Token de acceso: {accessToken}</p>
//   ) : (
//     <p>Esperando token de acceso...2</p>
//   )}
//   <p>Autenticación exitosa. Puedes cerrar esta ventana.</p></div>;
// };

// export default Auth;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Auth = () => {
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    const getAccessToken = async (authorizationCode) => {
      try {
        const response = await axios.get(`http://localhost:5000/instagram-auth`, {
          params: { code: authorizationCode },
        });
        const accessToken = response.data.access_token;
        console.log('Token de acceso:', accessToken);
        localStorage.setItem('instagram_access_token', accessToken);
        setAccessToken(accessToken);
      } catch (error) {
        console.error('Error al obtener el token de acceso:', error);
      }
    };

    if (code) {
      getAccessToken(code);
    }
  }, []);

  return (
    <div>
      {accessToken ? (
        <p>Token de acceso: {accessToken}</p>
      ) : (
        <p>Esperando token de acceso...</p>
      )}
      <p>Autenticación exitosa. Puedes cerrar esta ventana.</p>
    </div>
  );
};

export default Auth;

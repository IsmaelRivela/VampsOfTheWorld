

// const express = require('express')
// const axios = require('axios')
// const cors = require('cors')

// const app = express()

// app.use(cors())

// const CLIENT_ID = 'TU_APP_ID'
// const CLIENT_SECRET = 'TU_APP_SECRET'
// const REDIRECT_URI = 'http://localhost:3000/auth'

// app.get('/auth', async (req, res) => {
//     const { code } = req.query;
  
//     try {
//       const response = await axios.post('https://api.instagram.com/oauth/access_token', {
//         client_id: CLIENT_ID,
//         client_secret: CLIENT_SECRET,
//         grant_type: 'authorization_code',
//         redirect_uri: REDIRECT_URI,
//         code: code
//       });
  
//       const accessToken = response.data.access_token;
//       res.json({ accessToken });
//     } catch (error) {
//       console.error(error);
//       res.status(500).send('Error al obtener el token de acceso');
//     }
//   });
  
//   app.listen(4000, () => {
//     console.log('Servidor escuchando en el puerto 4000');
//   });




// async function tattooFetch() {
//     const response = await fetch("http://example.com/movies.json");
//     const tattoos = await response.json();
//     console.log(tattoos);
//   }


  // Replace these with your actual values
  
  const CLIENT_ID = '423180797362646';
  
  const REDIRECT_URI = 'http://localhost:3000'; // This should match the one set in your Instagram app settings
   
  document.getElementById('login-btn').addEventListener('click', () => {
  
      // Step 1: Redirect user to Instagram's OAuth authorization page
  
      const authUrl = `https://api.instagram.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=user_profile,user_media&response_type=code`;
  
      window.location.href = authUrl;
  
  });
   
  // Step 2: Handle the redirect with authorization code
  
  window.onload = async () => {
  
      const urlParams = new URLSearchParams(window.location.search);
  
      const code = urlParams.get('code');
   
      if (code) {
  
          // Step 3: Exchange the authorization code for an access token
  
          try {
  
              const tokenResponse = await fetch('https://api.instagram.com/oauth/access_token', {
  
                  method: 'POST',
  
                  headers: {
  
                      'Content-Type': 'application/x-www-form-urlencoded'
  
                  },
  
                  body: new URLSearchParams({
  
                      client_id: CLIENT_ID,
  
                      client_secret: '90d000740688c3c34109edf7da140b29',
  
                      grant_type: 'authorization_code',
  
                      redirect_uri: REDIRECT_URI,
  
                      code: code
  
                  })
  
              });
   
              const tokenData = await tokenResponse.json();
  
              const accessToken = tokenData.access_token;
   
              // Display access token (for demo purposes)
  
              document.getElementById('user-info').innerHTML = `Access Token: ${accessToken}`;
   
              // Step 4: Fetch user profile using the access token
  
              const profileResponse = await fetch(`https://graph.instagram.com/me?fields=id,username&access_token=${accessToken}`);
  
              const profileData = await profileResponse.json();
   
              // Display user profile
  
              document.getElementById('user-info').innerHTML = `
  
                  <h2>User Profile</h2>
  
                  <p>ID: ${profileData.id}</p>
  
                  <p>Username: ${profileData.username}</p>
  
              `;
  
          } catch (error) {
  
              console.error('Error exchanging code for token:', error);
  
              document.getElementById('user-info').innerHTML = 'Error fetching access token or user profile';
  
          }
  
      }
  
  };
  

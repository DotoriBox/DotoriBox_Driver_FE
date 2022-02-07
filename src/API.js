import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';

export const AuthAPI = {
   getAccessToken: async (refreshToken) => {
      return axios.post('/auth/refresh/access', {
         refresh_token: refreshToken
      })
   }
}

export const ImageAPI = {
   postTaxiLicense: async (accessToken, file) => {
      return axios.post('/image/taxi-license', {
         attachments: file
      }, {
         headers: {
            'Content-Type': 'multipart/form-data',
            access_token: accessToken
         }
      });
   },
   postDriverLicense: async (accessToken, file) => {
      return axios.post('/image/driver-license', {
         attachments: file
      }, {
         headers: {
            'Content-Type': 'multipart/form-data',
            access_token: accessToken
         }
      });
   },
   createImageData: async (accessToken, data) => {
      return axios.post('/image', {
         data
      }, {
         headers: {
            access_token: accessToken
         }
      })
   }
}

export const InfoAPI = {
   postDriverInfo: async (accessToken, data) => {
      return axios.post('/info', {
         data
      }, {
         headers: {
            access_token: accessToken
         }
      })
   }
}
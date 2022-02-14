import axios from 'axios';

// axios.defaults.baseURL = 'http://101.79.8.239';
axios.defaults.baseURL = 'http://localhost:5000';

export const AuthAPI = {
   Login: async (token) => {
      return axios.get('/auth', {
         params: {
            token
         }
      });
   }
}

export const ImageAPI = {
   postTaxiLicense: async (accessToken, file) => {
      return axios.post('/image/taxi-license', 
         file, {
         headers: {
            'Content-Type': 'multipart/form-data',
            access_token: accessToken
         }
      });
   },
   postDriverLicense: async (accessToken, file) => {
      return axios.post('/image/driver-license',
         file, {
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
   },
   getDriverInfoByDriverId: async (accessToken, id) => {
      return axios.get(`/info/${id}`, {
         headers: {
            access_token: accessToken
         }
      });
   },
   getPlatforms: async () => {
      return axios.get('/platform');
   }
}

export const StockAPI = {
   getStock: async (accessToken, id) => {
      return axios.get(`/taxi/${id}/stock`, {
         headers: {
            access_token: accessToken
         }
      })
   }
}

import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API;

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
      return axios.post('/info', data, {
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
   getStock: async (id) => {
      return axios.get(`/taxi/${id}/stock`)
   }
}

export const CustomerAPI = {
   getCustomer: async (id) => {
      return axios.get(`/taxi/${id}/customer`)
   }
}

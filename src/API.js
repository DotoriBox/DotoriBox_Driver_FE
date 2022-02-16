import axios from 'axios';

axios.defaults.baseURL = 'http://101.79.8.239';
// axios.defaults.baseURL = 'http://localhost:5000/';

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
            'access-token': accessToken
         }
      });
   },
   postDriverLicense: async (accessToken, file) => {
      return axios.post('/image/driver-license',
         file, {
         headers: {
            'Content-Type': 'multipart/form-data',
            'access-token': accessToken
         }
      });
   },
   createImageData: async (accessToken, data) => {
      return axios.post('/image', {
         data
      }, {
         headers: {
            'access-token': accessToken
         }
      })
   }
}

export const InfoAPI = {
   postDriverInfo: async (accessToken, data) => {
      return axios.post('/info', data, {
         headers: {
            'access-token': accessToken
         }
      })
   },
   getDriverInfoByDriverId: async (accessToken, id) => {
      return axios.get(`/info/${id}`, {
         headers: {
            'access-token': accessToken
         }
      });
   },
   getDriverInfoIsExistByDriverId: async (accessToken, id) => {
      return axios.get(`/info/${id}/exist`, {
         headers: {
            'access-token': accessToken
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

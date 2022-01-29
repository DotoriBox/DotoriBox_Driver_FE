import axios from 'axios';


export const NaverApi = {
   getToken: async () => {
      try {
         const result = await axios.get('http://101.79.8.239/auth');

         return result.data;
      } catch (e) {
         console.log(e);
      }
   },
}


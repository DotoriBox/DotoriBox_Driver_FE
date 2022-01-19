import axios from 'axios';


export const NaverApi = async () => {
   console.log(await axios.get('/auth'))
}


import axios from "axios";

const CommonServices = {
    signup: async (data) => {
        const ret_data = {
            success: 0
        };
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/signup`, data);
            if(response.error) {
                throw new Error(response.error)
            }
            
            ret_data.message = 'Signup Success ,Please Login';
            ret_data.success = 1;
        }
        catch(err) {
           ret_data.message = err.message || 'Error'
        }
        return ret_data;
    },
    login: async (data) => {
        const ret_data = {
            success: 0
        };
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, data);
            if(response.error) {
                throw new Error(response.error)
            }
            
            ret_data.message = 'Login Success..!';
            ret_data.success = 1;
            ret_data.data = response?.data
        }
        catch(err) {
           ret_data.message = err.message || 'Error'
        }
        return ret_data;
    },
    getListings: async (limit, page) => {
        const ret_data = {
            success: 0
        };
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URLBACKEND}/listing?limit=${limit}&page=${page}`);
            
            if(response.error) {
                throw new Error(response.error)
            }
            
            ret_data.success = 1;
            ret_data.data = response?.data?.data || [];
        }
        catch(err) {
            ret_data.message = err.message || 'Error';
        }
        return ret_data;
    }
}
export default CommonServices;



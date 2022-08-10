import axios from "axios";

const urlAPI = process.env.NEXT_PUBLIC_URL_API;

const registerRoute = async (req, res) => {
    try {
        const response = await axios.post(`${urlAPI}/auth/register`, req.body);
        if (response.status === 201) {
            return res.status(201).json(response.data);
        }
    } catch (err) {
        return res.status(400).json(err.response.data);
    }

}

export default registerRoute;
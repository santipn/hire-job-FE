import axios from "axios";

const urlAPI = process.env.NEXT_PUBLIC_URL_API;

const verifycodeRoute = async (req, res) => {
    try {
        const response = await axios.post(`${urlAPI}/auth/verify`, req.body);
        return res.status(200).json(response.data);
    } catch (err) {
        return res.status(400).json(err.response.data);
    }

}

export default verifycodeRoute;
import axios from "axios";

const urlAPI = process.env.NEXT_PUBLIC_URL_API;

const resetRoute = async (req, res) => {
    try {
        const response = await axios.patch(`${urlAPI}/auth/change-pass`, req.body);
        if (response.status === 200) {
            return res.status(200).json(response.data);
        }
    } catch (err) {
        return res.status(400).json(err.response.data);
    }

}

export default resetRoute;
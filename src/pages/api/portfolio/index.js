import axios from "axios";

const urlAPI = process.env.NEXT_PUBLIC_URL_API;

const portfolioRoute = async (req, res) => {
    const { slug } = req.query;
    try {
        const response = await axios.get(`${urlAPI}/portfolio/user/${slug}`);
        if (response.status === 200) {
            return res.status(200).json(response.data);
        }
    } catch (err) {
        return res.status(400).json(err.response.data);
    }

}

export default portfolioRoute;
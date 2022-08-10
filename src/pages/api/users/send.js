import axios from "axios";

const urlAPI = process.env.NEXT_PUBLIC_URL_API;

const sendHireRoute = async (req, res) => {
    const { slug } = req.query;
    try {
        const response = await axios.post(`${urlAPI}/users/hire/${slug}`, req.body, {
            headers: {
                Authorization: `Bearer ${req.headers.authorization.split(" ")[1]}`
            }
        });
        if (response.status === 200) {
            return res.status(200).json(response.data);
        }
    } catch (err) {
        return res.status(400).json(err.response.data);
    }

}

export default sendHireRoute;
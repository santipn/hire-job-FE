import { withIronSessionApiRoute } from "iron-session/next"
import axios from "axios";
import { sessionOptions } from '../../../lib/session';


export default withIronSessionApiRoute(verifyRoute, sessionOptions);

async function verifyRoute(req, res) {
    if (req.session.data) {
        // console.log(req.session.data.data.token);
        const token = req.session.data.data.token;

        return res.status(200).json({ token })

    } else {
        return res.status(401).json({
            loading: false,
            isLoggedIn: false,
            message: "Unauthorized access"
        });
    }
}
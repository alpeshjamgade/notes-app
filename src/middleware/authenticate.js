const jwt = require('jsonwebtoken')
const UserModel = require('../models/User')

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.header('Authorization');
        const decoded = jwt.verify(token, 'aj');

        const user = await UserModel.findOne({_id: decoded._id, 'tokens.token': token});

        if (!user) {
            throw new Error();
        }

        req.session = {
            user: user,
            token: token
        }

        next();
    } catch (error) {
        res.status(401).send({error: 'Request Unauthorized'});
    }
};

module.exports = authMiddleware;


const UserModel = require('../models/User')

exports.signup = async (req, res) => {
    const user = new UserModel(req.body)
    try {

        await user.save()
        res.json({data: {name: user.name, email: user.email}, status: 'success'})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

exports.login = async (req, res) => {
    try {
        const user = await UserModel.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()

        res.json({data: {userName: user.name, token: token}, status: 'success'})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
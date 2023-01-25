import userService from '../service/user-service.js';
import UserModel from '../models/user-model.js';

class UserController {
    async registration(req, res, next) {
        try {
            const {email, password} = req.body;
            const userData = await userService.registration(email, password);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true, secure: process.env.NODE_ENV === 'production' ? true : false, sameSite: process.env.NODE_ENV === 'production' ? 'none' : undefined})
            return res.json(userData);
        } catch (e) {
            next(e);
        }
    }

    async login(req, res, next) {
        try {
            const {email, password} = req.body;
            const userData = await userService.login(email, password);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true, secure: process.env.NODE_ENV === 'production' ? true : false, sameSite: process.env.NODE_ENV === 'production' ? 'none' : undefined})
            return res.json(userData);
        } catch (e) {
            next(e);
        }
    }

    async logout(req, res, next) {
        try {
            const {refreshToken} = req.cookies;
            const token = await userService.logout(refreshToken);
            res.clearCookie('refreshToken');
            return res.json(token);
        } catch (e) {
            next(e);
        }
    }

    async refresh(req, res, next) {
        try {
            const {refreshToken} = req.cookies;
            const userData = await userService.refresh(refreshToken);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true, secure: process.env.NODE_ENV === 'production' ? true : false, sameSite: process.env.NODE_ENV === 'production' ? 'none' : undefined})
            return res.json(userData);
        } catch (e) {
            next(e);
        }
    }

    async check(req, res, next) {
        try {
            const { email } = req.query;
            const candidate = await UserModel.findOne({email});

            return res.json({status: !Boolean(candidate)});
        } catch (e) {
            next(e)
        }
    }
}

export default new UserController();
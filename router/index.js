import { Router } from 'express';
import userController from '../controllers/user-controller.js' 
import movieController from '../controllers/movie-controller.js'

const router = new Router();

router.post('/register', userController.registration);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/refresh', userController.refresh);
router.get('/check', userController.check);

router.get('/hero', movieController.getHeroMovies);
router.get('/images/:id', movieController.getImage);
router.get('/trailers/:id', movieController.getTrailer)

export default router
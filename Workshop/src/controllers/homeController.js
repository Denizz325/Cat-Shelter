import { Router } from 'express';

import catService from '../services/catServices.js';

const router = Router();

router.get('/', async (req, res) => {
    const cats = await catService.getAll()

    res.render('home', { cats, isHomePage: true })

});

export default router
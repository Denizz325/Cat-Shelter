import { Router } from 'express';

import catService from '../services/catServices.js';

const router = Router();

router.get('/', async (req, res) => {
    const query = req.query.query; 
    
    let cats;
    if (query) {
        cats = await catService.search(query); 
    } else {
        cats = await catService.getAll(); 
    }

    res.render('home', { cats, isHomePage: true, query });
});




export default router
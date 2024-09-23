import { Router } from 'express';
import catServices from '../services/catServices.js';


const router = Router();

router.get('/create', async(req, res) => {
    const breeds =  await catServices.getBreeds()
    res.render('cats/create', { breeds})
})

router.post('/create', async (req, res) => {
    const catData = req.body;

    catServices.create(catData)

    res.redirect('/');
})

router.get('/breed', (req, res) => {
    res.render('cats/breed',)
})

router.post('/breed', (req, res) => {
    const breed = req.body;
    catServices.addBreed(breed)
    res.redirect('/cats/create');
})




export default router
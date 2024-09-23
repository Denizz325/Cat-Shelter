import uniqid from 'uniqid'
import catData from '../data/Catdata.js'
import Catdata from '../data/Catdata.js';

const getAll = () => catData.getCats();

const create = (newCat) => {
    newCat.id = uniqid();
    return catData.create(newCat) }

const addBreed = (newBreed) => {
        newBreed.id = uniqid()
           
        return catData.addBreed(newBreed);  
};

const getBreeds = async () =>  await Catdata.getBreeds();

export default {
    getAll,
    create,
    addBreed,
    getBreeds
}
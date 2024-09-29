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

async function search(query) {
    const cats = await getAll(); 
    const lowerQuery = query.toLowerCase();

    return cats.filter(cat => 
        cat.name.toLowerCase().includes(lowerQuery) || 
        cat.breed.toLowerCase().includes(lowerQuery)
    );
}

const getOne = async (catId) => {
    const cats = await getAll()

    const resultCat = cats.find(cat => cat.id == catId)
    return resultCat
}



export default {
    getAll,
    create,
    addBreed,
    getBreeds,
    search,
    getOne,

}
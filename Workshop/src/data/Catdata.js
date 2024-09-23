import fs from 'fs/promises';
import path from 'path'
const dbPath = path.resolve('./src/db.json')
const breedDbPath = path.resolve('./src/breed.json')

async function getDb() {
    const result = await fs.readFile(dbPath, {encoding: 'utf-8'})
    const data = JSON.parse(result)
    return data
    
}

async function getBreeds() {
    const result = await fs.readFile(breedDbPath, { encoding: 'utf-8' });
    const data = JSON.parse(result);
    return data

}
async function saveDb(data) {
    return fs.writeFile(dbPath, JSON.stringify(data, {}, 2))
}

async function getCats() {
    const db = await getDb()
    return db.cats
}

async function create(catData) {
    const db = await getDb()

    db.cats.push(catData)

    return saveDb(db)
}   

async function addBreed(breed) {
    const breeds = await getBreeds();
    breeds.push(breed);
    await fs.writeFile(breedDbPath, JSON.stringify(breeds, {}, 2));
}


export default {
    getCats,
    create,
    getBreeds,
    addBreed

}
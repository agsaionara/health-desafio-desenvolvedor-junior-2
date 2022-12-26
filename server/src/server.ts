import express, {request, response} from 'express';
import cors from 'cors';
import {PrismaClient} from '@prisma/client'

const app = express();

app.use(express.json());

app.use(cors());

export const prisma = new PrismaClient({
    log: ['query'],
}); 

app.post('/createpet',  async (request,response)=>{
    const body = request.body;

    const newPet = await prisma.pet.create({
        data:{
            nome: body.nome,    
            idade: body.idade,
            tipo: body.tipo,
            donoPet: body.donoPet,
            telefoneDonoPet: body.telefoneDonoPet, 
        }
    })

    return response.status(201).json(newPet);
});

app.get('/listpets', async (request, response) => {
    const pets = await prisma.pet.findMany({})

    return response.json(pets);
})

app.listen(3333);
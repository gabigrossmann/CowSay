import 'dotenv/config';
import cowsay from 'cowsay';

const name = process.env.NAME;
const campus = process.env.CAMPUS;

console.log(cowsay.say({
    text: `Salut, je suis ${name} du campus ${campus}!`,
    e: "oO",
    T: "U "
}));
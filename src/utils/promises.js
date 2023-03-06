// importación de libreria externa
import moment from 'moment';
// cs

// uso de promesas de ES2015
export const helloPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const now = moment().format('HH:mm:ss');
            resolve("Hello World, desde la promesa, wei!!", now);
            // uso de librería
            console.log(now);
        }, 2000);
    });
}
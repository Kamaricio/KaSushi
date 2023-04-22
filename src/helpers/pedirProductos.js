
import { Stock } from "../data/Stock"

export const pedirSushi = () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Stock)
            reject("Rechazado")
        },2000)

    })
}
import { HamburguesaImage, PanchoImage, PapasFritasImage } from "../assets"
import { Product } from "../interfaces/interfaces"

export const product1 : Product = {
    id: "1",
    title: "Pancho",
    // img: pancho,
    img: PanchoImage,
    price: 970

}

export const product2 : Product = {
    id: "2",
    title: "Hamburguesa",
    img: HamburguesaImage,
    price: 1490
}

export const product3 : Product = {
    id: "3",
    title: "Papas Fritas",
    img: PapasFritasImage,
    price: 1250
}

export const products: Product[] = [product1, product2, product3]
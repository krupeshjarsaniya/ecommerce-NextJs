export interface productImage {
    id: number,
    image: string
}
export interface productItem {
    id: number,
    name: string,
    description:string,
    price: number,
    stock: number,
    images: productImage[],
}
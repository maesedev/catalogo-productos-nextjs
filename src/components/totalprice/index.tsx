"use client"
export default function TotalPrice() {

    
    const getProductsFromLocalStorage = (): Array<any> => {
        let productsCart: string  =  window.localStorage.getItem("Cart") ?? "[]"
        return JSON.parse(productsCart)
    }

    let Products = getProductsFromLocalStorage()
    let TotalPrice:number = 0

    Products.forEach((item,index)=>{
        TotalPrice += item.price * item.cantidad
    })

    return (
        <p className="text-2xl font-medium tracking-tight text-gray-900">
            ${TotalPrice.toLocaleString("es-ES")},00
        </p>
    )
}
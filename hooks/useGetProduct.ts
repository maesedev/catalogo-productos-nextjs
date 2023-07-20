import { useGetData } from "./useGetData";
export function useGetProduct(id:number){
    const Products = useGetData()
    return    Products.filter(item=>item.id == id)
}
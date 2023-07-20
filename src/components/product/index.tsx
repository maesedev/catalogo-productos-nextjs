
import { useGetPrettiePrice } from "../../../hooks/useGetPrettiePrice";
import Image from "next/image";
interface options {
    id: number;
    title: string;
    price: number;
    description: string;
    mainImageURL: string;
}

export default function Product({ id, title, price, description, mainImageURL }: options) {
    return (

        <div className="flex flex-row items-center grow-[4]  w-64 sm:flex-col sm:w-[230px] gap-6 m-5 bg-slate-50">
            <div className="">
                <a href={"/product/" + id} className="">
                    <Image className="h-64 w-auto rounded-3xl object-contain transition-all hover:scale-105" src={mainImageURL} alt={title} />
                </a>
            </div>
            <div className="pt-10">
                <p className="text-3xl ">{useGetPrettiePrice(price)}</p>
                <h2 className="text-sm text-slate-600">{title}</h2>
                <a href={"/product/" + id} className="bg-green-400 hover:bg-green-500 block w-52 text-center px-4 py-2 my-2 rounded-xl">Ver producto </a>
            </div>

        </div>
    )
}
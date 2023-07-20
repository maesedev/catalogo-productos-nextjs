interface product {
    id: number;
    title: string;
    tagline: string;
    price: number;
    longDescription?: string;
    imageUrl: string;
    images: Array<string>;
    garantia: string;
    categoria: string;
    invisible:boolean;
    colors?:Array<string>;
}
export const Categorias = ["Audifonos Bluetooth","Audifonos de oficina","gamer"]

export function useGetData() {
    const Products: Array<product> = [
        {
            id: 1,
            title:"Diadema Bluetooth LY021 Negro",
            tagline:"Diadema Bluetooth LY021 Negro",
            price:80000,
            longDescription:"",
            imageUrl:"/LY021/main.jpg",
            images:["/LY021/ly021_1.png","/LY021/ly021_2.webp","/LY021/ly021_3.png"],
            garantia:"3 meses",
            invisible:false,
            categoria:Categorias[0],
            colors:["Negro","Rojo","Azul"]
        },
        {
            id: 2,
            title:"Audífonos Gaming H2013D Negro",
            tagline:"Audífonos Gaming H2013D Negro",
            price:110000,
            longDescription:"",
            imageUrl:"/H2013D/main.jpg",
            images:["/H2013D/H2013D_1.png","/H2013D/H2013D_2.png","/H2013D/H2013D_3.png","/H2013D/H2013D_4.png"],
            garantia:"3 meses",
            categoria:Categorias[0],
            invisible:false,
        },
        {
            id: 3,
            title:"Auriculares Con Micrófono JTY-900",
            tagline:"Auriculares Con Micrófono JTY-900",
            price:25000,
            longDescription:"",
            imageUrl:"/JTY-900/main.png",
            images:["/JTY-900/JTY-900_1.png","/JTY-900/JTY-900_2.png"],
            garantia:"2 meses",
            categoria:Categorias[1],
            invisible:false
        },
        {
            id: 4,
            title:"Audífonos Sport VG02 negro",
            tagline:"Audífonos Sport VG02 negro",
            price:50000,
            longDescription:"",
            imageUrl:"/VG02/main.webp",
            images:["/VG02/VG02_1.webp","/VG02/VG02_2.webp","/VG02/VG02_3.webp","/VG02/VG02_4.webp"],
            garantia:"3 meses",
            categoria:Categorias[0],
            invisible:false
        },
        {
            id: 5,
            title:"Audífonos bluetooth gamer X15 ",
            tagline:"Audífonos bluetooth gamer X15",
            price:55000,
            longDescription:"",
            imageUrl:"/X15/main.webp",
            images:["/X15/X15_1.webp","/X15/X15_2.webp","/X15/X15_3.webp","/X15/X15_4.webp"],
            garantia:"3 meses",
            categoria:Categorias[2],
            invisible:false
        },
        {
            id: 6,
            title:"Audifonos Bluetooth A7-TWS caja dinamica",
            tagline:"Audifonos Bluetooth A7-TWS Verde Claro",
            price:50000,
            longDescription:"",
            imageUrl:"/A7/main.jpg",
            images:["/A7/A7_1.png","/A7/A7_2.png","/A7/A7_3.png"],
            garantia:"3 meses",
            categoria:Categorias[2],
            invisible:true
        },

    ]

    return Products
}
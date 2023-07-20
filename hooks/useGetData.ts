import useGetImages from "./useGetImages";


interface product {
    id: number;
    title: string;
    tagline: string;
    price: number;
    longDescription?: string;
    mainImage: any;
    images: Array<any>;
    garantia: string;
    categoria: string;
    invisible: boolean;
    colors?: Array<string>;
}

const {LY021,H2013D,JTY900,VG02,A7,X15} = useGetImages()

export const ArrayCategorias = [
    {
        name:"Audifonos Bluetooth",
        avatar: VG02.VG02Main
    },
    {
        name:"Audifonos de oficina",
        avatar: JTY900.JTY900Main
    },
    {
        name: "gamer",
        avatar: X15.X15Main
    }
]

export function useGetData() {


    const Products: Array<product> = [
        {
            id: 1,
            title: "Diadema Bluetooth LY021 Negro",
            tagline: "Diadema Bluetooth LY021 Negro",
            price: 80000,
            longDescription: "",
            mainImage: LY021.LY021Main,
            images: LY021.Images,
            garantia: "3 meses",
            invisible: false,
            categoria: ArrayCategorias[0].name,
            colors: ["Negro", "Rojo", "Azul"]
        },
        {
            id: 2,
            title: "Audífonos Gaming H2013D Negro",
            tagline: "Audífonos Gaming H2013D Negro",
            price: 110000,
            longDescription: "",
            mainImage: H2013D.H2013DMain,
            images: H2013D.Images,
            garantia: "3 meses",
            categoria: ArrayCategorias[0].name,
            invisible: false,
        },
        {
            id: 3,
            title: "Auriculares Con Micrófono JTY-900",
            tagline: "Auriculares Con Micrófono JTY-900",
            price: 25000,
            longDescription: "",
            mainImage: JTY900.JTY900Main,
            images: JTY900.Images,
            garantia: "2 meses",
            categoria: ArrayCategorias[1].name,
            invisible: false
        },
        {
            id: 4,
            title: "Audífonos Sport VG02 negro",
            tagline: "Audífonos Sport VG02 negro",
            price: 50000,
            longDescription: "",
            mainImage: VG02.VG02Main,
            images: VG02.Images,
            garantia: "3 meses",
            categoria: ArrayCategorias[0].name,
            invisible: false
        },
        {
            id: 5,
            title: "Audífonos bluetooth gamer X15 ",
            tagline: "Audífonos bluetooth gamer X15",
            price: 55000,
            longDescription: "",
            mainImage: X15.X15Main,
            images: X15.Images,
            garantia: "3 meses",
            categoria: ArrayCategorias[2].name,
            invisible: false
        },
        {
            id: 6,
            title: "Audifonos Bluetooth A7-TWS caja dinamica",
            tagline: "Audifonos Bluetooth A7-TWS Verde Claro",
            price: 50000,
            longDescription: "",
            mainImage: A7.A7Main,
            images: A7.Images,
            garantia: "3 meses",
            categoria: ArrayCategorias[2].name,
            invisible: false
        },

    ]

    return Products
}
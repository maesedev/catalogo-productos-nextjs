import LY021Main from "../public/images/audifonos/LY021/main.jpg"
import LY021_1 from "../public/images/audifonos/LY021/ly021_1.png"
import LY021_2 from "../public/images/audifonos/LY021/ly021_2.webp"
import LY021_3 from "../public/images/audifonos/LY021/ly021_3.png"

import H2013DMain from "../public/images/audifonos/H2013D/main.jpg"
import H2013D_1 from "../public/images/audifonos/H2013D/H2013D_1.png"
import H2013D_2 from "../public/images/audifonos/H2013D/H2013D_2.png"
import H2013D_3 from "../public/images/audifonos/H2013D/H2013D_3.png"
import H2013D_4 from "../public/images/audifonos/H2013D/H2013D_4.png"


import JTY900Main from "../public/images/audifonos/JTY-900/main.png"
import JTY900_1 from "../public/images/audifonos/JTY-900/JTY-900_1.png"
import JTY900_2 from "../public/images/audifonos/JTY-900/JTY-900_2.png"


import VG02Main from "../public/images/audifonos/VG02/main.webp"
import VG02_1 from "../public/images/audifonos/VG02/VG02_1.webp"
import VG02_2 from "../public/images/audifonos/VG02/VG02_2.webp"
import VG02_3 from "../public/images/audifonos/VG02/VG02_3.webp"
import VG02_4 from "../public/images/audifonos/VG02/VG02_4.webp"


import X15Main from "../public/images/audifonos/X15/main.webp"
import X15_1 from "../public/images/audifonos/X15/X15_1.webp"
import X15_2 from "../public/images/audifonos/X15/X15_2.webp"
import X15_3 from "../public/images/audifonos/X15/X15_3.webp"
import X15_4 from "../public/images/audifonos/X15/X15_4.webp"


import A7Main from "../public/images/audifonos/A7/main.jpg"
import A7_1 from "../public/images/audifonos/A7/A7_1.png"
import A7_2 from "../public/images/audifonos/A7/A7_2.png"
import A7_3 from "../public/images/audifonos/A7/A7_3.png"

export default function useGetImages(){
    return({
        LY021:{
            LY021Main,
            Images:[LY021_1,LY021_2,LY021_3,]
        },
        H2013D:{
            H2013DMain,
            Images:[H2013D_1,H2013D_2,H2013D_3,H2013D_4,]
        },
        JTY900:{
            JTY900Main,
            Images:[JTY900_1,JTY900_2,]
        },
        VG02:{
            VG02Main,
            Images:[VG02_1,VG02_2,VG02_3,VG02_4,]
        },
        X15:{
            X15Main,
            Images:[X15_1,X15_2,X15_3,X15_4,]
        },
        A7:{
            A7Main,
            Images:[A7_1,A7_2,A7_3,]
        },
    })
}
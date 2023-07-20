import Image from "next/image";


export default function CheckOutProducts({}:{}) {
    return (
        <ul className="-my-4 divide-y divide-gray-100">

            <li className="flex items-center gap-4 py-4">
                <Image
                    src="https://yt3.ggpht.com/p0uS87qlZrugeEmIJgt1mSQw9IUdOcnAaUC1-rQLK1q9MnAj5lTmQ6vW9_2blnBbTTilutrKMgA=s88-c-k-c0x00ffffff-no-rj"
                    height={50}
                    width={50}
                    alt=""
                    className="h-16 w-16 rounded object-cover"
                />

                <div>
                    <h3 className="text-sm text-gray-900">Basic Tee 6-Pack</h3>

                    <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                        <div>
                            <dt className="inline">Size:</dt>
                            <dd className="inline">XXS</dd>
                        </div>

                        <div>
                            <dt className="inline">Color:</dt>
                            <dd className="inline">White</dd>
                        </div>
                    </dl>
                </div>
            </li>

        </ul>
    )

}
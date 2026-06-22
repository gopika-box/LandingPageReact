export default function Product(){
    return(
        <div className="flex flex-col items-center justify-center bg-gray-200 p-10">
            <h2 className="text-3xl font-bold text-center">Best Selling Product</h2>
            {/* https://panto-slicing.vercel.app/ */}
            <ul className="flex gap-7 text-lg bg-gray-300 mt-10 mx-auto max-w-md rounded-3xl justify-center items-center text-center h-15">
                <li className="bg-gray-200 p-2.5 px-6 rounded-3xl">Chair</li>
                <li className="hover:bg-gray-200 p-2.5 px-6 rounded-3xl">Beds</li>
                <li className="hover:bg-gray-200 p-2.5 px-6 rounded-3xl">Sofa</li>
                <li className="hover:bg-gray-200 p-2.5 px-6 rounded-3xl">Lamp</li>
            </ul>

            <div className="grid grid-cols-2 sm:flex mt-10 gap-6">
                {/* chair images */}
                <div className="pt-50 pl-2 min-w-52 max-w-64 relative bg-gray-100  rounded-xl">
                    <img src="/products/imgi_3_product-1.svg" alt=""
                    className="absolute -top-6" />
                    <p className="text-gray-600 mt-10">Chair</p>
                    <p className="font-semibold font-sans text-xl">Sakarias Armchair</p>
                    <p className="mb-10">⭐⭐⭐⭐⭐</p>
                    <p className="absolute -bottom-1 left-2 font-bold text-xl">$456</p>
                    <button className="absolute leading-none text-white w-8 h-8 right-0 bottom-0 bg-blue-950 rounded-full font-bold text-xl flex items-center justify-center"><img src="public\imgi_4_plus.svg"/>
                    </button>
                </div>

                <div className="pt-50 pl-2 min-w-52 max-w-64 relative bg-gray-100 rounded-xl">
                    <img src="/products/imgi_7_product-4.svg" alt=""
                    className="absolute -top-6" />
                    <p className="text-gray-600 mt-10">Chair</p>
                    <p className="font-semibold font-sans text-xl">Sakarias Armchair</p>
                    <p className="mb-10">⭐⭐⭐⭐⭐</p>
                    <p className="absolute -bottom-1 left-2 font-bold text-xl">$456</p>
                    <button className="absolute leading-none text-white w-8 h-8 right-0 bottom-0 bg-blue-950 rounded-full font-bold text-xl flex items-center justify-center"><img src="public\imgi_4_plus.svg"/>
                    </button>
                    </div>

                <div className="pt-50 pl-2 min-w-52 max-w-64 relative bg-white rounded-xl">
                    <img src="/products/imgi_5_product-2.svg" alt=""
                    className="absolute -top-6" />
                    <p className="text-gray-600 mt-10">Chair</p>
                    <p className="font-semibold font-sans text-xl">Sakarias Armchair</p>
                    <p className="mb-10">⭐⭐⭐⭐⭐</p>
                    <p className="absolute -bottom-1 left-2 font-bold text-xl">$456</p>
                    <button className="absolute text-white w-8 h-8 right-0 bottom-0 bg-blue-950 rounded-full font-bold text-xl flex items-center justify-center">
                        <img src="/imgi_4_plus.svg"/>
                    </button>
                </div>
                <div className="pt-50 pl-2 min-w-52 max-w-64 relative bg-gray-100 rounded-xl">
                    <img src="/products/imgi_6_product-3.svg" alt=""
                    className="absolute -top-6" />
                    <p className="text-gray-600 mt-10">Chair</p>
                    <p className="font-semibold font-sans text-xl">Sakarias Armchair</p>
                    <p className="mb-10">⭐⭐⭐⭐⭐</p>
                    <p className="absolute -bottom-1 left-2 font-bold text-xl">$456</p>
                  <button className="absolute leading-none text-white w-8 h-8 right-0 bottom-0 bg-blue-950 rounded-full font-bold text-xl flex items-center justify-center"><img src="public\imgi_4_plus.svg"/>
                    </button>
                  </div>
                
                </div>
                <p className="mt-10"><a href="#" className="hover:text-orange-400 hover:underline">View All →</a></p>
            
        </div>
    )
}
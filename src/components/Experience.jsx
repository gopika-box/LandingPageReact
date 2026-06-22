export default function Experience(){
    return(
        <div className="grid md:flex py-10 bg-white">
            <img src="/imgi_2_img-hero.png" alt="" 
            className="w-[880px] border"/>
            <div className=" p-30 flex flex-col gap-5">
                <h3 className="uppercase text-xl text-orange-500 tracking-widest text-left">experiences</h3>
                <h5 className="capitalize font-bold text-4xl tracking-wider">we provide you <br />
the best experience</h5>
                <p className="font-semibold text-lg">You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials</p>
            <a href="#" className="text-orange-400 hover:underline underline-offset-3">More Info →</a>
            </div>
        </div>
    )
}
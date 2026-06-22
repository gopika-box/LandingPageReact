export default function Material(){
    return(
        <div className="grid gap-6 md:flex py-10 bg-white">
            <div className=" md:p-30 flex flex-col gap-5">
                <h3 className="uppercase text-xl text-orange-500 tracking-widest text-left">Materials</h3>
                <h5 className="capitalize font-bold text-4xl tracking-wider">Very serious materials <br />
for making furniture</h5>
                <p className="font-semibold text-lg">Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price</p>
            <a href="#" className="text-orange-400 hover:underline underline-offset-3">More Info →</a>
            </div>
            <img src="/imgi_8_img-materials.svg" alt="" 
            className=""/>
        </div>
    )
}
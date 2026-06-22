export default function Footer(){
    return(
        <footer className="flex flex-col bg-gray-200 p-10 px-35">
            <div className="flex justify-between gap-2">
            <div>
                <h2 className="text-3xl font-extrabold ">Panto</h2>
                <p className="hidden md:text-normal">The advantage of hiring a workspace with us is that gives <br /> you comfortable service and all-around facilities.</p>
            </div>
            <div className="flex flex-col md:gap-5">
                <h3 className="text-md md:text-lg text-amber-600 tracking-wider">Services</h3>
                <ul className="hidden md:flex flex-col gap-5 text-medium">
                    <li>Email Marketing</li>
                    <li>Campaigns</li>
                    <li>Branding</li>
                </ul>
            </div>
            <div className="flex flex-col gap-5">
                <h3 className="text-md md:text-lg text-amber-600 tracking-wider">Furniture</h3>
                <ul className="hidden md:flex flex-col gap-5">
                    <li>Beds</li>
                    <li>Chair</li>
                    <li>Table</li>
                </ul>
            </div>
            <div className="flex flex-col gap-5">
                <h3 className="text-md md:text-lg text-amber-600 tracking-wider">Follow Us</h3>
                <ul className="hidden md:flex flex-col gap-5">
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                </ul>
            </div>
            </div>
            <div className="flex justify-between mt-5">
                <p className="">Designed by <a href="https://github.com/gopika-box" className="underline hover:text-orange-800">Gopika</a></p>
                
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                
            </div>
            

        </footer>
    )
}
export default function Navbar() {
  return (
    <div className="relative bg-[url(/imgi_2_img-hero.png)] brightness-95 min-h-screen bg-cover">
    <nav className="absolute top-0 left-0 right-0 flex justify-between px-4 md:px-30 text-white h-15 p-2">
        <h2 className="text-3xl font-extrabold mr-3">Panto</h2>
        <ul className="hidden sm:flex text-lg font-sans gap-4 mt-2 ">
          <li className="transition delay-100 duration-300 ease-in hover:scale-102 hover:text-amber-300">Furniture</li>
          <li className="transition delay-100 duration-300 ease-in hover:scale-102 hover:text-amber-300">Shop</li>
          <li className="transition delay-100 duration-300 ease-in hover:scale-102 hover:text-amber-300">About Us</li>
          <li className="transition delay-100 duration-300 ease-in hover:scale-102 hover:text-amber-300">Contact</li>
        </ul>
        <div><img src="imgi_1_cart.svg" alt="Cart Img" /></div>
      
    </nav>

    <div className="flex flex-col h-screen items-center justify-center text-white">
      {/* hero sent */}
      <h2 className=" text-4xl md:text-7xl font-bold max-w-2xl capitaliz text-center">Make your interior more minimalistic & modern</h2>
      <p className="py-4 text-2xl font-extralight text-center">Turn your room with panto into a lot minimalist 
and modern with ease and speed</p>

<input type="text" className="text-white border px-4 py-2 rounded-3xl placeholder:text-gray-200" placeholder="Search Furniture"></input>
      
    </div>
    </div>
  );
}
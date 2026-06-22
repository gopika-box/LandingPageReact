export default function Choose() {
  return (
    <div className="grid md:flex gap-10 bg-white p-15 md:p-30">
      {/* Your why choose us content */}
      <h4 className="font-bold text-3xl">Why Choosing Us</h4>
      <div>
        <h3 className="font-bold text-2xl">Luxury facilities</h3>
        <p>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities</p>
        <a href="#" className="text-orange-400  hover:text-orange-600">More Info →</a>
      </div>
      <div>
        <h3 className="font-bold text-2xl">Affordable Price</h3>
        <p>You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here.</p>
        <a href="#" className="text-orange-400  hover:text-orange-600">More Info →</a>
      </div>
      <div>
        <h3 className="font-bold text-2xl tracking-wide">Many Choices</h3>
        <p>We provide many unique work space choices so that you can choose the workspace to your liking.</p>
      <  a href="#" className="text-orange-400 hover:text-orange-600">More Info →</a>
      </div>
    </div>
  );
}
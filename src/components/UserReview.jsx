export default function UserReview(props){
    return(
        <div className="relative">
            {/* get image and card: profile , name, descrption and review and star */}
            <img src={props.bg} alt="" />
            <div className="absolute bottom-[5%] left-1/2 transform -translate-x-1/2 bg-white/80 rounded-2xl w-[250px] flex flex-col
             items-center">
                <img src={props.profile} alt="PRofileimg" className="w-[110px]" />
                <h4 className="font-bold text-2xl font-sans">{props.name}</h4>
                <h5 className="font-extralight text-lg">{props.description}</h5>
                <p className="font-normal p-4 text-center">"{props.review}"</p>
                <p className="mb-2">⭐⭐⭐⭐<span className="opacity-50">⭐</span></p>
            </div>
        </div>
    )
}
import UserReview from "./UserReview"

export default function CLient(){
    return(
        <div className="flex flex-col items-center py-10 bg-white">
            <div className=" px-30 flex flex-col gap-5">
                <h3 className="uppercase text-xl text-orange-500 tracking-widest text-center">Testimonials</h3>
                <h5 className="capitalize font-bold text-4xl text-center">Our Client Reviews</h5>
              </div>
            <div className="grid md:flex gap-4 py-10">
                <UserReview bg="bg/imgi_9_clients-1.svg" profile="profile/imgi_10_user-1.svg"
                 name="Bang Upin" description="Pedagang Asongan" 
                 review="Takasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal"/>
                <UserReview bg="bg/imgi_11_clients-2.svg" profile="profile/imgi_12_user-2.svg" 
                name="Ibuk Sukijan" description="Ibu Rumah Tangga"
                 review="Makasih Panto, aku sekarang berasa tinggal di apartment karena barang-barang yang terlihat mewah"/>
                <UserReview bg="bg/imgi_13_clients-3.svg" profile="profile/imgi_14_user-3.svg" 
                name="Mpok Ina" description="Karyawan Swasta" review="Sangat terjangkau untuk kantong saya yang tidak terlalu banyak"/>

            </div>
        </div>
    )
}
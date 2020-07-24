import React from 'react';
import img1 from '../assets/img1.jpg';

const Section = () => {
    return(
        <div className=" bg-green-200 flex flex-col items-center sm:flex-row sm:justify-between">
        <div className=" p-10 sm:p-20">
            <p className="text-xl font-bold text-4xl " >Construímos com alegria e qualidade. Venha conferir nosso trabalho!</p>
            <p className="text-gray-800 sm:text-2xl sm:mt-3" >Comerciais, residenciais e para todos os ambientes</p>
        </div>

        <div>
            <img className=" mt-2 mb-20 p-2  my-1 sm:max-w-screen-sm sm:mx-10 sm:my-10 rounded" src={img1} alt="ilustrative-img"></img>
        </div>
    </div>
    )
}


export default Section;

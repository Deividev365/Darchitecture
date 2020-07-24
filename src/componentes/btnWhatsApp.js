import React from 'react';
import wa from '../assets/btn-whatsapp.png';

let url = "https://api.whatsapp.com/send?phone=55119999999999&text=Entre%20em%20contato";


const BtnWhatsApp = () => {
    return(
    <a target="_blank" href={url}>
        <div className="cursor-pointer bg-white shadow rounded hover:bg-gray-300 transition duration-200  px-5 py-2 flex flex-col items-center mt-6 sm:mt-0 sm:flex-row ">
        <img src={wa} alt="whatsapp-icon"></img>
        <div className="sm:ml-4">
        <h3 className="font-bold text-2xl">Contato para Orçamentos </h3>
        <p className="font-bold">(11) 9999-9999</p>
        </div>
    </div>
    </a>
    )
}

export default BtnWhatsApp;
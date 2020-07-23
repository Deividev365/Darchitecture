import React from 'react';
import wa from '../assets/btn-whatsapp.png';

const BtnWhatsApp = () => {
    return(
        <div className="bg-white shadow rounded px-5 py-2 flex flex-col items-center mt-6 sm:mt-0 sm:flex-row ">
        <img src={wa} alt="whatsapp-icon"></img>
        <div className="sm:ml-4">
        <h3 className="font-bold text-2xl">Contato para Orçamentos </h3>
        <p className="font-bold">(11) 9999-9999</p>
        </div>
    </div>
    )
}

export default BtnWhatsApp;
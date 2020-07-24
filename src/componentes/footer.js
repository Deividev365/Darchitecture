import React from 'react';
import BtnWhatsApp from '../componentes/btnWhatsApp';


const Footer = () => {
    return(
        <div>
    <div className="p-4 bg-green-400 sm:flex justify-between items-center sm:flex-row sm:justify-between">
        <div className="p-6 flex flex-col sm:wrap">
            <h5 className="text-2xl text-gray-800">Endereço:</h5>
            <p className="text-2xl font-medium mt-2 sm:max-w-sm">Rua Machado de Assis, Bairro Elon, Nº6898</p>
        </div>
        <BtnWhatsApp/>

    </div>
    <h1 className="bg-green-400 text-gray-800  flex justify-center align-center p-5">Todos os Direitos Reservados | 2020</h1>
    </div>
    )
}

export default Footer;
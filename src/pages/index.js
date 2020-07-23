// start server =  'gatsby develop' // 

// importing my files, such as img, styles, etc...
import React from 'react';
import './styles.css';
import BtnWhatsApp from '../componentes/btnWhatsApp';
import Logo from '../componentes/logo';
import Helmet from 'react-helmet';

import img1 from '../assets/img1.jpg';

//import { json } from 'express';

import {graphql, useStaticQuery } from 'gatsby';

const Footer = () => {
    return(
    <div className="p-4 bg-green-400 sm:flex justify-between items-center">
        <div>
            <h5>PisosDA</h5>
            <p>Rua Machado de Assis, Bairro Elon Musk</p>
        </div>
        <BtnWhatsApp/>
    </div>
    )
}

const Section = () => {
    return(
        <div className=" bg-green-200 flex flex-col items-center sm:flex-row sm:justify-between">
        <div className=" p-10 sm:p-20">
            <p className="text-xl font-bold text-4xl " >Construímos com alegria e qualidade. Venha conferir nosso trabalho!</p>
            <p className="text-gray-800 sm:text-2xl sm:mt-3" >Comerciais, residenciais e para todos os ambientes</p>
        </div>

        <div>
            <img className="sm:max-w-screen-sm sm:mx-10 sm:my-10 rounded" src={img1} alt="ilustrative-img"></img>
        </div>
    </div>
    )
}




const Index = () => {
    const {site} = useStaticQuery(graphql`
    query MyQuery {
        site {
          siteMetadata {
            title
          }
        }
      }

     `)

    const projects = [1,2,3,4]
    return(
    <div>
        <Helmet>
            <title>{site.siteMetadata.title}</title>
            <link rel="icon" href="https://image.flaticon.com/icons/svg/1086/1086544.svg"></link>
        </Helmet>

        <div className="p-4 bg-green-400 sm:flex justify-between items-center">
            <Logo/>
            <div>
                <BtnWhatsApp/>
            </div>
       </div>


        <Section/>

        <div>
            <h2 className="p-8 text-2xl font-bold flex items-center justify-center">Projetos executados
            </h2>
            <div className="flex flex-wrap">
            {projects.map(() => {
                return(
                <div className="max-w-sm mx-6">
                <div className="m-3 rounded-md shadow-sm">
                    <img src={img1} alt="projectsMade-1"></img>
            
                <div className="px-6 py-4">
                    <p className="font-bold text-xl mb-2">Descrição dos projetos aquiiiiiiiiiiiiiiiii</p>
                </div>
            </div>
            </div>
                )
            })}
            </div>

        </div>

      <Footer/>
     </div>
    )
}
export default Index;
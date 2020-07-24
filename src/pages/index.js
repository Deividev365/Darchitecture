// start server =  'gatsby develop' // 
// to refresh on the web we have to make the changes
// as i do on github and then, use the command "gatsby build" and everything is refreshed
import React from 'react';

import './styles.css';
import BtnWhatsApp from '../componentes/btnWhatsApp';
import Logo from '../componentes/logo';
import Footer from '../componentes/footer'
import Section from '../componentes/section'
import img1 from '../assets/img1.jpg';


import Helmet from 'react-helmet';


import {graphql, useStaticQuery } from 'gatsby';


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

    const projects = [1,2,3,4, 5, 6]
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
        <div className="bg-gray-200">
            <h2 className="p-8  text-2xl font-bold flex items-center justify-center">Projetos executados
            </h2>
            <div className="flex flex-wrap">
            {projects.map(() => {
                return(
                <div className="max-w-sm mx-6">
                <div className="m-3 rounded-md shadow-sm">
                    <img src={img1} alt="projectsMade-1"></img>
            
                <div className="px-6 py-4">
                    <p className="font-bold text-xl mb-2">Descrição do projeto</p>
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
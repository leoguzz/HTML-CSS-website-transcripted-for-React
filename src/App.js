import React from "react"
import './App.css'
import './Components/estilo.css'
import './Components/fontes.css'
import './Components/reset.css'
import Header from './Components/Header/header'
import Conteudo from './Components/Conteudo/conteudo'
import imgSite from "./Components/imgSite/imgSite"
import Footer from "./Components/Footer/footer"
import Lojas from "./Components/Lojas/Lojas"

export default()=>{
    return(
        <>
        <Header/>
        <Conteudo/>
        <Lojas/>
        <imgSite/>
        <Footer/>

        </>
    );
};




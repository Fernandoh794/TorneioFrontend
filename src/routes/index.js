import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Signin from "../pages/Signin"; 
import Signup from "../pages/Signup";
import Torneios from "../pages/Torneios";
import TorneiosCreate from "../pages/Torneios/create";
import Categorias from "../pages/categorias";

const Private = ({ Item }) => {
    const token = localStorage.getItem('token');

    if (token) {
        return <Item />;
    } else {
        return <Signin />;
    }

};


const RoutesApp = () => {
    return (
<BrowserRouter>
<Fragment>
    <Routes>
        <Route exact path="/home" element={<Private Item={Home} />} />
        <Route exact path="/torneios" element={<Private Item={Torneios} />} />
        <Route exact path="/torneios/create" element={<Private Item={TorneiosCreate} />} />
        <Route exact path="/categorias" element={<Private Item={Categorias} />} />
        
        <Route path="/" element={<Signin />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route path="*" element={<Signin />} />
    </Routes>
</Fragment>
</BrowserRouter>
    );

};

export default RoutesApp;
    

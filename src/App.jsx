import './App.styled';
import { Route, Routes } from 'react-router-dom';
import {useState} from "react";
import {IconSprite} from "./components/Sprite/IconSprite";
import {Header} from "./components/Header/Header";
// import {Main} from "./pages/Main/Main";
import {Footer} from "./components/Footer/Footer";
import {routes} from "./functions/routes";

export const App = () => {
    const [routesList] = useState(routes())

    return (
        <>
            <IconSprite/>
            <Header/>

            <Routes>
                {routesList.map(route => <Route key={route.path} element={route.element} path={route.path} />)}
            </Routes>

            {/*<Main/>*/}

            <Footer/>
        </>
    );
}

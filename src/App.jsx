import './App.styled';
import {IconSprite} from "./components/Sprite/IconSprite";
import {Header} from "./components/Header/Header";
import {Main} from "./pages/Main/Main";
import {Footer} from "./components/Footer/Footer";

export const App = () => {

    return (
        <>
            <IconSprite/>
            <Header/>

            <Main/>

            <Footer/>
        </>
    );
}

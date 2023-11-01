import './App.styled';
import {IconSprite} from "./components/Sprite/IconSprite";
import {Header} from "./components/Header/Header";
import {Main} from "./pages/Main/Main";

export const App = () => {

    return (
        <>
            <IconSprite/>
            <Header/>
            <Main/>
        </>
    );
}

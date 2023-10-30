import './App.styled';
import { GlobalStyled } from './components/GlobalStyle/GlobalStyle.styled';
import { Header } from './components/Header/Header';

export const App = () => {

  return (
    <GlobalStyled>
      <Header/>
    </GlobalStyled>
  );
}

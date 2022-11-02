import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useLetterState } from './utils/use_letters_state.hook';
import { observer } from 'mobx-react-lite';
import Nav from './components/Nav';
import HomeView from './components/HomeView';
import LetterView from './components/LetterView';
import DoubleView from './components/DoubleView';
import { FullHeigtDiv } from './style/styled_components';

const App = observer(() => {
  return (
    <FullHeigtDiv>
      <BrowserRouter>
        <Nav />
        <main>
          <Routes>
            <Route path="/letter/" element={<LetterView />} />
            <Route path="/double/" element={<DoubleView />} />
            <Route path="/" element={<HomeView />} />
          </Routes>
        </main>
      </BrowserRouter>
    </FullHeigtDiv>
  );
});

export default App;

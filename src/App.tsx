import { BrowserRouter, Routes, Route } from 'react-router-dom';
import words from 'an-array-of-english-words';
import { useLetterState } from './utils/use_letters_state.hook';
import { observer } from 'mobx-react-lite';
import Nav from './components/Nav';
import HomeView from './components/HomeView';
import LetterView from './components/LetterView';
import DoubleView from './components/DoubleView';

const App = observer(() => {
  const state = useLetterState();

  return (
    <>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeView />} /> // fallback
          <Route path="/letter/" element={<LetterView />} />
          <Route path="/double/" element={<DoubleView />} />
        </Routes>
      </BrowserRouter>
    </>
  );
});

export default App;

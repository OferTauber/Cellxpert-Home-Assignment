import SelectLetter from './SelectLetter';
import { useNavigate } from 'react-router-dom';
import { BodyContainer, Hero, HeroText } from '../style/styled_components';

const HomeView = () => {
  const navigate = useNavigate();

  return (
    <BodyContainer>
      <Hero>
        Welcome to LinguiStatistics!
        <HeroText>
          <br />
          Here you can find interesting information about the frequency of
          letters in the English language.
          <br />
          All you have to do is choose a letter to test - and you will
          immediately get the number of words that start, end or include the
          letter.
          <br />
          Using the buttons in the upper right corner, you can switch to
          Conjunction mode - which displays the words in which your letter
          appears twice in a row.
        </HeroText>
      </Hero>

      <SelectLetter navigateFunction={navigate} />
    </BodyContainer>
  );
};

export default HomeView;

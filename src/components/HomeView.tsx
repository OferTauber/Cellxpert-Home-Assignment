import React from 'react';
import SelectLetter from './SelectLetter';
import { useNavigate } from 'react-router-dom';

const HomeView = () => {
  const navigate = useNavigate();

  return (
    <div>
      <SelectLetter navigateFunction={navigate} />
    </div>
  );
};

export default HomeView;

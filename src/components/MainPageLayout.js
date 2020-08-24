import React from 'react';
import Navigation from './Navigation';
import Title from './Title';

const MainPageLayout = ({ children }) => {
  return (
    <div>
      <Title
        title="Box Office"
        subtitle="Search for movies or actors and actresses"
      />
      <Navigation />

      {children}
      {}
    </div>
  );
};

export default MainPageLayout;

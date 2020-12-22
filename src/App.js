import React from 'react';
//Style
import GlobalStyle from './GlobalStyle';
//Components
import FactDisplay from './Components/FactDisplay';
import NumInput from './Components/NumInput';
import ByLine from './Components/ByLine';
import TitleSection from './Components/TitleSection';

const App = () => {

    return(
        <div>
            <GlobalStyle />
            <TitleSection />
            <FactDisplay />
            <NumInput />
            <ByLine />
        </div>
    );
};

export default App;
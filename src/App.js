import React from 'react';
//Style
import GlobalStyle from './GlobalStyle';
import {motion} from 'framer-motion';
import {fadePage, zoomDiv} from './animations';
import styled from 'styled-components';
//Components
import FactDisplay from './Components/FactDisplay';
import NumInput from './Components/NumInput';
import ByLine from './Components/ByLine';
import TitleSection from './Components/TitleSection';

const App = () => {

    return(
        <motion.div 
        className='App'
        variants={fadePage}
        initial='hidden'
        animate='show'
        exit='exit'>
            <GlobalStyle />
            <StyledHide 
            variants={zoomDiv}>
                <TitleSection />
            </StyledHide>
            <StyledHide
            variants={zoomDiv}>
                <FactDisplay />
            </StyledHide>
            <StyledHide
            variants={zoomDiv}>
                <NumInput />
            </StyledHide>
            <StyledHide
            variants={zoomDiv}>
                <ByLine />
            </StyledHide> 
        </motion.div>
    );
};

const StyledHide = styled(motion.div)`
    overflow: hidden;
`;

export default App;
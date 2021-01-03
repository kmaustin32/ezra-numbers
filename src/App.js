import React, {useState} from 'react';
//Style
import GlobalStyle from './GlobalStyle';
import {motion, AnimatePresence} from 'framer-motion';
import {fadePage, zoomDiv, fadeDiv} from './animations';
import styled from 'styled-components';
//Components
import FactDisplay from './Components/FactDisplay';
import NumInput from './Components/NumInput';
import ByLine from './Components/ByLine';
import TitleSection from './Components/TitleSection';
//Axios

const App = () => {

    const [info, setInfo] = useState({
        selectedNum: '',
        numInfo: "Let's get started! Pick a number."
    });
    const [loading, setLoading] = useState(false);

    return(
        <StyledApp 
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
                <FactDisplay
                info={info}
                setInfo={setInfo}
                loading={loading} />
            </StyledHide>
            <StyledHide
            variants={fadeDiv}
            initial='hidden'
            animate='show'>
                <NumInput
                info={info}
                setInfo={setInfo}
                loading={loading}
                setLoading={setLoading} />
            </StyledHide>
            <StyledHide
            variants={zoomDiv}>
                <ByLine />
            </StyledHide> 
        </StyledApp>
    );
};

const StyledHide = styled(motion.div)`
    overflow: hidden;
`;

const StyledApp = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin: 8rem 30rem 5rem 30rem;
    min-height: 75vh;
    background-color: whitesmoke;
    border: 3px solid black;
    @media (max-width: 1500px) {
        margin: 7rem 20rem 6rem 20rem;
    }
    @media (max-width: 1000px) {
        margin: 8rem 10rem 5rem 10rem;
    }
    @media (max-width: 800px) {
        margin: 8rem 5rem 3rem 5rem;
    }
`;

export default App;
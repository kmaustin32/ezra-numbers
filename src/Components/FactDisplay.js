import React from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import styled from 'styled-components';
import {factFade} from '../animations';
import Displayed from './Displayed';



const FactDisplay = ({info, loading}) => {

    return(
        <StyledFact>
            <AnimatePresence>
            {!loading && 
                <Displayed 
                variants={factFade}
                initial='hidden'
                animate='show'
                exit='exit'
                info={info.numInfo}>
                </Displayed>}    
            </AnimatePresence>
        </StyledFact>
    )
}


const StyledFact = styled(motion.div)`
    overflow: hidden;
    padding: 2rem 8rem;

    @media (max-width: 768px) {
        padding: 1rem 4rem;
        h2 {
            font-size: 1.5rem;
        }
    }
`;

export default FactDisplay;
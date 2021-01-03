import React from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import styled from 'styled-components';
import {factFade} from '../animations';



const FactDisplay = ({info, loading}) => {

    return(
        <StyledFact>
            <AnimatePresence>
            {!loading && 
                <motion.h2 
                variants={factFade}
                initial='hidden'
                animate='show'
                exit='exit'>{info.numInfo}</motion.h2>}    
            </AnimatePresence>
        </StyledFact>
    )
}


const StyledFact = styled(motion.div)`
    overflow: hidden;
    padding: 2rem 8rem;
`;

export default FactDisplay;
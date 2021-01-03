import React from 'react';
import {motion} from 'framer-motion';
import styled from 'styled-components';


const FactDisplay = ({info}) => {

    return(
        <StyledFact>
            <h2>{info.numInfo}</h2>
        </StyledFact>
    )
}

const StyledFact = styled(motion.div)`
    overflow: hidden;
    padding: 2rem 8rem;
`;

export default FactDisplay;
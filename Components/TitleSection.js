import React from 'react';
import {motion} from 'framer-motion';
import styled from 'styled-components';
import {zoomDiv} from '../animations';

const TitleSection = () => {

    return(
        <StyledTitle>
            <h1>Number Facts!</h1>
        </StyledTitle>
    )
}

const StyledTitle = styled(motion.div)`
    @media (max-width: 768px) {
        h1 {
            font-size: 2rem;
        }
    }
`;

export default TitleSection;
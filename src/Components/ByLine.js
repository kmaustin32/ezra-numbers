import React from 'react';
import {motion} from 'framer-motion';
import {zoomDiv} from '../animations';
import styled from 'styled-components';

const ByLine = () => {

    return(
        <StyledBy>
            <p>App by Keenan "Ezra" Austin</p>
            <p>Built with React 2020</p>
        </StyledBy>
    )
}

const StyledBy = styled(motion.div)`
    text-align: center;
`;

export default ByLine;
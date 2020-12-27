import React from 'react';
import {motion} from 'framer-motion';
import { zoomDiv } from '../animations';
import styled from 'styled-components';

const NumInput = () => {

    return(
        <StyledInput className='inputContainer'>
            <input type="text"/>
            <button>Submit</button>
            <button>Random</button>
        </StyledInput>
    )
}

const StyledInput = styled(motion.div)`
    input {
        padding: .75rem;
        width: 100%;
        box-sizing: border-box;
    }
    button {
        width: 50%;
        padding: .75rem;
    }
`;

export default NumInput;
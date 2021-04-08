import React from 'react';
import {motion} from 'framer-motion'
import {factFade} from '../animations'

const Displayed = ({info}) => {
    return(
        <motion.div>
            <h2>{info}</h2>
        </motion.div>
    )
};

export default Displayed;
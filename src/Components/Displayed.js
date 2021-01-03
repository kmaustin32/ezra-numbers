import React from 'react';
import {motion} from 'framer-motion'
import {factFade} from '../animations'

const Displayed = ({info}) => {
    return(
        <motion.div
        variants={factFade}
        initial='hidden'
        animate='show'
        exit='hidden'>
            <h2>{info.numInfo}</h2>
        </motion.div>
    )
};

export default Displayed;
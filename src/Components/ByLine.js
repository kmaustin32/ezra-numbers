import React from 'react';
import {motion} from 'framer-motion';
import {zoomDiv} from '../animations';

const ByLine = () => {

    return(
        <motion.div>
            <p>App by Keenan "Ezra" Austin</p>
            <p>Built with React 2020</p>
        </motion.div>
    )
}

export default ByLine;
import React from 'react';
import {motion} from 'framer-motion';

const NumInput = () => {

    return(
        <motion.div className='inputContainer'>
            <input type="text"/>
            <button>Submit</button>
            <button>Random</button>
        </motion.div>
    )
}

export default NumInput;
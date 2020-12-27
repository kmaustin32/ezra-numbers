import React from 'react';
import {motion} from 'framer-motion';
import styled from 'styled-components';
import axios from 'axios';
import { async } from 'regenerator-runtime';

const NumInput = ({info, setInfo}) => {

     //API Requests
    const base_url = `http://numbersapi.com/${info.selectedNum}`;


    const updateTextHandler = (event) => {
        setInfo({
            ...info,
            selectedNum: event.target.value,
        });
    };


    const randomHandler = () => {
        setInfo({
            ...info,
            selectedNum: Math.floor(Math.random() * 1000).toString()
        });
    };

    const searchHandler = async() => {
        let result = await axios.get(base_url);
        console.log(info.selectedNum);
        if(info.selectedNum == '') {
            setInfo({
                numInfo: "Let's get started! Pick a number."
            });
        } else {
            setInfo({
                numInfo: result.data
            })
        }
    }

    return(
        <StyledInput className='inputContainer'>
            <input 
            type="text"
            placeholder="type a number here"
            onChange={updateTextHandler} />
            <button onClick={randomHandler}>Random?</button>
            <button onClick={searchHandler}>Go!</button>
        </StyledInput>
    )
};

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
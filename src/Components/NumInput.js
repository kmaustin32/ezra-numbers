import React from 'react';
import {motion} from 'framer-motion';
import styled from 'styled-components';
import axios from 'axios';
import { async } from 'regenerator-runtime';

const NumInput = ({info, setInfo, loading, setLoading}) => {

     //API Requests
    const base_url = `http://numbersapi.com/${info.selectedNum}`;


    const updateTextHandler = (event) => {
        setInfo({
            ...info,
            selectedNum: event.target.value
        });
    };


    const randomHandler = () => {
        setInfo({
            ...info,
            selectedNum: Math.floor(Math.random() * 1000).toString()
        });
    };

    const searchHandler = async() => { 
        setLoading(true);
        setInfo({
            ...info,
            numInfo: ''
        });
        
        let result = await axios.get(base_url);

        if(info.selectedNum == '') {
            setInfo({
                ...info,
                numInfo: 'Try again'
            });
            setLoading(false)
        } else {
            setInfo({
                numInfo: result.data,
                selectedNum: ''
            });
            setLoading(false);
        };
    };

    return(
        <StyledInput className='inputContainer'>
            <input 
            type="text"
            placeholder='input text here'
            value={info.selectedNum}
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
        border: 2px solid black;
        transition: all .5s ease;
        outline: none;
    }
    button:hover {
        background-color: #12063d;
        color: whitesmoke;
        font-weight: bold;
        border: 2px solid white;
    }
`;

export default NumInput;
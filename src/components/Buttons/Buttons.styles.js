import styled from 'styled-components'

export const Wrapper = styled.div`
    position: fixed;
    bottom: 0;
    margin: 5px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    background: black;
    border: 5px solid #fff;
    width: 95vw;

    @media (min-width: 484px) {
        background: transparent;
        border: none;
        opacity: 0.5;
    }
`
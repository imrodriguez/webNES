import styled from 'styled-components'

export const Wrapper = styled.div`
    @media (min-width: 484px) {
        border: none;
        opacity: 0.5;
        position: fixed;
        bottom: 0;
        position: fixed;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`

export const Special = styled.div`
    width: max-content;
    background: #000;
    border-radius: 15px;
    color: #fff;
    padding: 1px 15px;
    display: inline-block;
    margin: 10px;

    &:before {
        content: "${(props) => props.label}";
        display: block;
    }
`
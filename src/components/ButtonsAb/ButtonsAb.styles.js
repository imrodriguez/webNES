import styled from 'styled-components'

export const Wrapper = styled.div`
    margin: auto 0;
    text-align: right;
`

export const Button = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff;
    display: inline-block;
    padding: 3px;
    margin: 10px;
    position: relative;

    &:after {
        width: 50px;
        height: 50px;
        border-radius: 100%;
        background-color: red;
        content: " ";
        display: block;
    }

    &:before {
        content: "${(props) => props.label}";
        display: block;
        position: absolute;
        bottom: -20px;
        color: red;
        right: 0;
    }
`
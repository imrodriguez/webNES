import styled from 'styled-components'

export const Wrapper = styled.div`
    position: relative;
    width: 150px;
    height: 150px;
    margin: 25px;

    &:after { 
        content: " ";
        width: 32%;
        height: 32%;
        background-color: #353535;
        position: absolute;
        left: 34%;
        border-radius: 50%;
        z-index: 99;
        top: 36%;
    }

    & > div {
        position: absolute;
        background: #444;
        border-radius: 10%;
        border: 2px solid #fff;
    }
`

export const Up = styled.div`
    left: 36%;
    width: 27%;
    height: 50%;
`

export const Down = styled.div`
    left: 36%;
    width: 27%;
    height: 50%;
    bottom: 0;
`

export const Left = styled.div`
    height: 27%;
    width: 36%;
    top: 36%;
    border-right: none !important;
`

export const Right = styled.div`
    height: 27%;
    width: 36%;
    top: 36%;
    right: 0;
    border-left: none !important;
`
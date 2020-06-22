import styled from 'styled-components'

export const Wrapper = styled.div`
    text-align: center;
    height: 100vh;
    position: absolute;
    top: 0;
    width: 100%;
    color: #fff;
    

    h2 {
        font-family: 'Bebas Neue', cursive;
        font-weight: 500;
    }

    img {
        width: 100px;
        margin: 15px;
    }

    canvas {
        height: 95%;
        @media (max-width: 500px) {
            width: 100%;
            height: auto;
        }

    }

    footer {
        width: 100%;
        text-align: center;
        
        a {
            color: #fff;
            text-decoration: none;
            font-family: 'Bebas Neue', cursive;
            font-size: 1.5em;
        }
    }
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 150px 0;
    width: 100%;

    .bx {
        font-size: 5em;
    }

    & > div {
        padding: 15px;º
    }

    div:first-child {
        border-right: 1px solid #fff;
    }

    ul {
        margin: 0;
        padding: 0;
        li {
            list-style: none;
            padding: 15px 5px;
            
            &:hover {
                background: #ccc;
                cursor: pointer;
            }
        }
    }
`

export const Center = styled.div`
    text-align: center;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex-direction: column;
`
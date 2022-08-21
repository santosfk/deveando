import styled from 'styled-components';

export const Container = styled.div`
width: 30rem;
height: 18rem;
background-color: white;
position: absolute;
border-radius: 5px;
left: 33rem;
top: 5rem;
z-index: 2;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
border: 1px solid #3CB57A ;
`
export const Title = styled.h1`
text-transform: uppercase;
font-weight: bold;
`
export const Button = styled.button<{
    color? : string
}>`
width: 220px;
height: 40px;
display: flex;
align-items: center;
justify-content: center;
border: none;
border-radius: 5px;
padding: .5rem;
font-weight: bold;
color: #edece6;
background-color: ${({color})=> color};
text-transform: uppercase;
cursor: pointer;
transition:.6s;
:hover{
    color: #111111;
}
`
export const LoggedContainer = styled.div`
width:32rem;
height: 17rem;
background-color: white;
position: absolute;
border-radius: 5px;
left: 33rem;
top: 5rem;
z-index: 2;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 1rem;
span{
    text-align: center;
    font-size: 1rem;
}
`
export const PerfilImg = styled.img`
width: 100px;
height: 100px;
border-radius: 50%;
`
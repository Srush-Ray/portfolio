import { css } from "@emotion/react";


export const eachTab=css`
display: flex;
align-items: center;
justify-content: center;
border: 1px solid white;
border-radius:5px;
padding:5px;
`

export const selectedTab=css`
background-color:#D3D3D3;
color:black;
`

export const notSelectedTab=css`
opacity:0.5;
`

export const mainContainer=css`
height:300px;
overflow:scroll;
border:1px solid white;
border-radius:5px;
`
export const experienceCardsContainer=css`
margin-bottom:20px;
`
export const divInline=css`
display:flex;
flex-direction:row;
width: 100%; 
`
export const eachTag=css`
flex:1,
border:1px solid white;
margin:5px 15px 5px 0px;
padding: 2px 15px 2px 15px;
border-radius:50px;
white-space: nowrap;
background-color:#454444;
`
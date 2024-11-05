import { css } from "@emotion/react";

export const links=css`
 cursor:pointer;
font-size:18px;
 &:hover {
        text-decoration: underline;
  }
`
export const stickyHeader=css`
position: sticky;
z-index: 100000;
bottom: 0;
box-shadow: 20px 10px 10px 10px rgb(1 1 1 / 0.9);
`

export const header=css`
background-color: #454444;
color: black;
`

import { css } from "@emotion/react";

export const links=css`
 cursor:pointer;
text-align:right;
font-size:18px;
 &:hover {
        text-decoration: underline;
  }
`

// @layer components
// {
//   .header-links {
//     @apply cursor-pointer text-right
//   }
//   .header-links:hover {
//     @apply underline
//   }
// }
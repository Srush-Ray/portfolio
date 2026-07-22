import { css } from "@emotion/react";

export const imageStyle = css`
background-position: center center;
background-size: cover;
margin: auto auto;
transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), filter 0.25s ease;

&:hover {
  transform: translateY(-2px) scale(1.18);
  filter: drop-shadow(0 0 10px var(--card-border-hover));
}
`;
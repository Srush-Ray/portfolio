import { css } from '@emotion/react';

export const headerStyles = css`
  font-family: inherit !important;
`;

export const para = css`
  margin-top: 8px;
  margin-bottom: 8px;
  width: 100%;
  max-width: 550px;
  font-family: inherit !important;
`;

export const imageStyle = css`
  width: 200px;
  height: 200px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  object-fit: cover;
  object-position: top center;
  box-shadow: var(--shadow-glow);
  flex-shrink: 0;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 0 35px var(--card-border-hover);
  }

  @media (min-width: 768px) {
    width: 260px;
    height: 260px;
    border-radius: 16px;
  }
`;
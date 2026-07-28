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
  width: 240px;
  height: auto;
  aspect-ratio: 3 / 4;
  border-radius: 20px;
  object-fit: cover;
  object-position: center;
  border: 1px solid var(--card-border);
  box-shadow: var(--shadow-card);
  flex-shrink: 0;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: translateY(-4px) scale(1.02);
    border-color: var(--card-border-hover);
    box-shadow: var(--shadow-glow);
  }

  @media (min-width: 768px) {
    width: 280px;
  }
`;
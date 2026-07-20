import { css } from '@emotion/react';
export const headerStyles = css`
font-family:'Times New Roman', Times, serif !important;
`;

export const para = css`
  margin-top: 5px;
  margin-bottom: 5px;
  width: 100%;
  max-width: 500px;
  font-family: 'Times New Roman', Times, serif !important;
`;

export const imageStyle = css`
  width: 200px;
  height: 200px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  object-fit: cover;
  object-position: top center;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
  flex-shrink: 0;

  @media (min-width: 768px) {
    width: 260px;
    height: 260px;
    border-radius: 12px;
  }
`;
import { css } from "@emotion/react";

export const eachSection = css`
  background: var(--card-bg);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--card-border);
  box-shadow: var(--shadow-card);
  border-radius: 16px;
  padding: 16px 20px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: var(--card-bg-hover);
    border-color: var(--card-border-hover);
    box-shadow: var(--shadow-glow);
    transform: translateY(-2px);
  }
`;
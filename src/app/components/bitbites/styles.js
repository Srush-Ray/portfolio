import { css } from "@emotion/react";

export const sectionBox = css`
  background: var(--card-bg);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--card-border);
  box-shadow: var(--shadow-card);
  border-radius: 16px;
  padding: 24px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: var(--card-bg-hover);
    border-color: var(--card-border-hover);
    box-shadow: var(--shadow-glow);
    transform: translateY(-2px);
  }
`;

export const aTag = css`
  color: var(--text-accent);
  font-weight: 500;
  transition: color 0.2s ease;

  &:hover {
    color: var(--text-primary);
    text-decoration: underline;
  }
`;
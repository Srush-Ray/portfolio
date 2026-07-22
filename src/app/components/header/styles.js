import { css } from "@emotion/react";

export const links = css`
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  color: var(--text-secondary);
  transition: all 0.2s ease;
  &:hover {
    color: var(--text-accent);
  }
`;

export const stickyHeader = css`
  position: sticky;
  z-index: 100000;
  bottom: 24px;
  width: fit-content;
  margin: 0 auto 24px auto;
`;

export const header = css`
  background: var(--header-bg);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--header-border);
  border-radius: 9999px;
  box-shadow: var(--header-shadow);
  padding: 10px 24px;
  transition: background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
`;


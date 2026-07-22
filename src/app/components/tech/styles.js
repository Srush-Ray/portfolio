import { css } from "@emotion/react";

export const eachTag = css`
  background: var(--card-bg);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--card-border);
  box-shadow: var(--shadow-card);
  margin: 10px;
  padding: 12px 10px;
  border-radius: 14px;
  min-width: 125px;
  height: 125px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: var(--card-bg-hover);
    border-color: var(--card-border-hover);
    box-shadow: var(--shadow-glow);
    transform: translateY(-4px);
  }
`;

export const divInline = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;
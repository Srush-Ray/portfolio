import { css } from "@emotion/react";

export const eachTab = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 20px;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.3s ease;
  cursor: pointer;
`;


export const selectedTab = css`
  background: linear-gradient(135deg, #a855f7 0%, #6366f1 100%);
  color: #ffffff;
  box-shadow: 0 0 20px rgba(168, 85, 247, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

export const notSelectedTab = css`
  background: var(--card-bg);
  color: var(--text-muted);
  border: 1px solid var(--card-border);

  &:hover {
    background: var(--card-bg-hover);
    color: var(--text-primary);
    border-color: var(--card-border-hover);
  }
`;

export const mainContainer = css`
  max-height: 480px;
  overflow-y: auto;
  background: var(--card-bg);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--card-border);
  box-shadow: var(--shadow-card);
  border-radius: 16px;
  padding: 20px;
`;

export const experienceCardsContainer = css`
  margin-bottom: 24px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--card-border);

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

export const divInline = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
  margin-bottom: 12px;
`;

export const eachTag = css`
  background: var(--badge-bg);
  border: 1px solid var(--badge-border);
  color: var(--badge-text);
  padding: 4px 12px;
  border-radius: 9999px;
  white-space: nowrap;
  font-size: 12px;
  font-weight: 500;
  transition: all 0.2s ease;


  &:hover {
    border-color: var(--card-border-hover);
  }
`;
import FootballData from './footballData';

// Export clients in browser context
// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
(window as any).FootballData = FootballData;

export { FootballData };

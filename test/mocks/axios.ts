import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
// import faker from 'faker';

const mock = new MockAdapter(axios);

export function apiCalls(method: string, api: string): number {
  const calls = mock.history[method].filter(call => call.url.endsWith(api));
  return calls.length;
}

export function resetMocks(): void {
  mock.reset();
}
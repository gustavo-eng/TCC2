import { SHA256 } from 'crypto-js';

export const generateHash = (data: string): string => {
  return SHA256(data).toString();
};

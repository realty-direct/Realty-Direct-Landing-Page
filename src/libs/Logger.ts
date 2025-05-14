import type { DestinationStream } from 'pino';
import logtail from '@logtail/pino';
import pino from 'pino';
import pretty from 'pino-pretty';
import { Env } from './Env';

let stream: DestinationStream;

// Create a default stream first to avoid undefined errors
stream = pretty({
  colorize: true,
});

// Initialize async logging in a non-blocking way
const initLogging = async () => {
  try {
    if (Env.LOGTAIL_SOURCE_TOKEN) {
      const logtailStream = await logtail({
        sourceToken: Env.LOGTAIL_SOURCE_TOKEN,
        options: {
          sendLogsToBetterStack: true,
        },
      });
      
      stream = pino.multistream([
        logtailStream,
        {
          stream: pretty(), // Prints logs to the console
        },
      ]);
    }
  } catch (error) {
    console.error('Failed to initialize logtail:', error);
    // Keep using the default stream if initialization fails
  }
};

// Initialize but don't block
if (typeof window === 'undefined') {
  // Only run on server
  initLogging().catch(console.error);
}

export const logger = pino({ base: undefined }, stream);

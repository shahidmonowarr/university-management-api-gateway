import { createClient } from 'redis';
import config from '../config';
import logger from './logger';

let redisClient = createClient({
  url: config.redis.url
});

redisClient.on('error', (err) => logger.error('Redis client error', err));
redisClient.on('connect', () => logger.info('Redis client connected'));

const connect = async (): Promise<void> => {
  await redisClient.connect();
};

export const RedisClient = {
  connect
};

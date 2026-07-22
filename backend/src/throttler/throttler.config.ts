import { Injectable } from '@nestjs/common';
import {
  ThrottlerOptionsFactory,
  ThrottlerModuleOptions,
} from '@nestjs/throttler';

@Injectable()
export class ThrottleConfig implements ThrottlerOptionsFactory {
  createThrottlerOptions(): Promise<ThrottlerModuleOptions> | ThrottlerModuleOptions {
    return {
      ttl: 60, // Time-to-live in seconds (1 minute)
      limit: 100, // Maximum number of requests allowed in the ttl period
      // You can customize this further for different routes if needed
      // For example, stricter limits for auth endpoints
    };
  }
}

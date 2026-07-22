import { ThrottlerOptionsFactory, ThrottlerModuleOptions } from '@nestjs/throttler';
export declare class ThrottleConfig implements ThrottlerOptionsFactory {
    createThrottlerOptions(): Promise<ThrottlerModuleOptions> | ThrottlerModuleOptions;
}

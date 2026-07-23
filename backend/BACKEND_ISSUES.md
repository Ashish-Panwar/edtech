I'm unable to start my NestJS backend because of TypeScript compilation errors.

Error:

src/courses/courses.controller.ts:13:15 - error TS2305: Module '"multer"' has no exported member 'File'.

import type { File as MulterFile } from 'multer';

The same error occurs in:

- src/faculty/faculty.controller.ts
- src/hero-slides/hero-slides.controller.ts
- src/testimonials/testimonials.controller.ts

Please investigate and fix the root cause instead of applying a temporary workaround.
import { diskStorage } from 'multer';
import { extname, join } from 'path';
import { BadRequestException } from '@nestjs/common';

export const fileUploadOptions = {
  // File filter to allow only images
  fileFilter: (req: any, file: any, callback: any) => {
    if (!file.mimetype.match(/\/(jpg|jpeg|png|gif|webp)$/)) {
      return callback(
        new BadRequestException('Only image files are allowed!'),
        false,
      );
    }
    callback(null, true);
  },

  // Storage configuration
  storage: diskStorage({
    destination: './uploads',
    filename: (req: any, file: any, callback: any) => {
      const randomName = Array(32)
        .fill(null)
        .map(() => Math.round(Math.random() * 16).toString(16))
        .join('');
      return callback(null, `${randomName}${extname(file.originalname)}`);
    },
  }),

  // Limits
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },
};
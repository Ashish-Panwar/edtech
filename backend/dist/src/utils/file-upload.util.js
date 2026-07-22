"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileUploadOptions = void 0;
const multer_1 = require("multer");
const path_1 = require("path");
const common_1 = require("@nestjs/common");
exports.fileUploadOptions = {
    fileFilter: (req, file, callback) => {
        if (!file.mimetype.match(/\/(jpg|jpeg|png|gif|webp)$/)) {
            return callback(new common_1.BadRequestException('Only image files are allowed!'), false);
        }
        callback(null, true);
    },
    storage: (0, multer_1.diskStorage)({
        destination: './uploads',
        filename: (req, file, callback) => {
            const randomName = Array(32)
                .fill(null)
                .map(() => Math.round(Math.random() * 16).toString(16))
                .join('');
            return callback(null, `${randomName}${(0, path_1.extname)(file.originalname)}`);
        },
    }),
    limits: {
        fileSize: 5 * 1024 * 1024,
    },
};
//# sourceMappingURL=file-upload.util.js.map
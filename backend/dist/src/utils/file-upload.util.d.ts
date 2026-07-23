export declare const fileUploadOptions: {
    fileFilter: (req: any, file: any, callback: any) => any;
    storage: import("multer").StorageEngine;
    limits: {
        fileSize: number;
    };
};

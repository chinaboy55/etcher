/// <reference types="mocha" />
/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
import * as unzip from 'unzip-stream';
export declare const getFileStreamFromZipStream: (zipStream: NodeJS.ReadableStream & {
    destroy?: () => void;
}, match: (filename: string) => boolean) => Promise<unzip.ZipStreamEntry>;

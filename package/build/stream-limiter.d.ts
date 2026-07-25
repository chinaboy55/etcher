/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
import { Transform } from 'stream';
type ClosableDestroyableStream = NodeJS.ReadableStream & {
    close?: () => void;
    destroy?: () => void;
};
export declare class StreamLimiter extends Transform {
    private stream;
    private maxBytes;
    constructor(stream: ClosableDestroyableStream, maxBytes: number);
    _transform(buffer: Buffer, _encoding: string, callback: (error?: Error, data?: Buffer) => void): void;
}
export {};

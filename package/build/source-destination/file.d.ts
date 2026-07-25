/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
import { ReadResult, WriteResult } from 'file-disk';
import { promises as fs, WriteStream } from 'fs';
import { Metadata } from './metadata';
import { CreateReadStreamOptions, SourceDestination } from './source-destination';
import { SparseWriteStream } from '../sparse-stream/sparse-write-stream';
export declare const ProgressWriteStream: {
    new (...args: any[]): {
        [EventEmitter.captureRejectionSymbol]?(error: Error, event: string, ...args: any[]): void;
        addListener(eventName: string | symbol, listener: (...args: any[]) => void): any;
        on(eventName: string | symbol, listener: (...args: any[]) => void): any;
        once(eventName: string | symbol, listener: (...args: any[]) => void): any;
        removeListener(eventName: string | symbol, listener: (...args: any[]) => void): any;
        off(eventName: string | symbol, listener: (...args: any[]) => void): any;
        removeAllListeners(event?: string | symbol | undefined): any;
        setMaxListeners(n: number): any;
        getMaxListeners(): number;
        listeners(eventName: string | symbol): Function[];
        rawListeners(eventName: string | symbol): Function[];
        emit(eventName: string | symbol, ...args: any[]): boolean;
        listenerCount(eventName: string | symbol, listener?: Function | undefined): number;
        prependListener(eventName: string | symbol, listener: (...args: any[]) => void): any;
        prependOnceListener(eventName: string | symbol, listener: (...args: any[]) => void): any;
        eventNames(): (string | symbol)[];
    };
} & typeof WriteStream;
export declare class File extends SourceDestination {
    readonly path: string;
    oWrite: boolean;
    protected fileHandle: fs.FileHandle;
    constructor({ path, write }: {
        path: string;
        write?: boolean;
    });
    protected getOpenFlags(): number;
    canRead(): Promise<boolean>;
    canWrite(): Promise<boolean>;
    canCreateReadStream(): Promise<boolean>;
    canCreateWriteStream(): Promise<boolean>;
    canCreateSparseWriteStream(): Promise<boolean>;
    protected _getMetadata(): Promise<Metadata>;
    read(buffer: Buffer, bufferOffset: number, length: number, sourceOffset: number): Promise<ReadResult>;
    write(buffer: Buffer, bufferOffset: number, length: number, fileOffset: number): Promise<WriteResult>;
    createReadStream({ emitProgress, start, end, alignment, numBuffers, }?: CreateReadStreamOptions): Promise<NodeJS.ReadableStream>;
    createWriteStream({ highWaterMark, }?: {
        highWaterMark?: number;
    }): Promise<NodeJS.WritableStream>;
    createSparseWriteStream({ highWaterMark, }?: {
        highWaterMark?: number;
    }): Promise<SparseWriteStream>;
    protected _open(): Promise<void>;
    protected _close(): Promise<void>;
}

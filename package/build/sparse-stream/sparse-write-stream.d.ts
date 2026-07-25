/// <reference types="node" />
/// <reference types="node" />
import { Writable } from 'stream';
import { SourceDestination } from '../source-destination/source-destination';
import { SparseStreamChunk, SparseWritable } from './shared';
export declare class SparseWriteStream extends Writable implements SparseWritable {
    private destination;
    firstBytesToKeep: number;
    private maxRetries;
    position: number;
    bytesWritten: number;
    private _firstChunks;
    constructor({ destination, highWaterMark, firstBytesToKeep, maxRetries, }: {
        destination: SourceDestination;
        firstBytesToKeep?: number;
        maxRetries?: number;
        highWaterMark?: number;
    });
    private writeChunk;
    private copyChunk;
    private __write;
    _write(chunk: SparseStreamChunk, _enc: string, callback: (error: Error | null) => void): void;
    private __final;
    /**
     * @summary Write buffered data before a stream ends, called by stream internals
     */
    _final(callback: (error?: Error | null) => void): void;
}
export declare const ProgressSparseWriteStream: {
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
} & typeof SparseWriteStream;

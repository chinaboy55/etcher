/// <reference types="node" />
/// <reference types="node" />
import { Readable } from 'stream';
import { File } from './source-destination/file';
export declare class BlockReadStream extends Readable {
    private source;
    private alignment;
    private alignedReadableState;
    private bytesRead;
    private end;
    private chunkSize;
    private maxRetries;
    constructor({ source, alignment, start, end, chunkSize, maxRetries, numBuffers, }: {
        source: File;
        alignment?: number;
        start?: number;
        end?: number;
        chunkSize?: number;
        maxRetries?: number;
        numBuffers?: number;
    });
    private tryRead;
    _read(): Promise<void>;
}
export declare const ProgressBlockReadStream: {
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
} & typeof BlockReadStream;

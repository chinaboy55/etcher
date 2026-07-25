/// <reference types="node" />
/// <reference types="node" />
import { Writable } from 'stream';
import { AlignedLockableBuffer } from './aligned-lockable-buffer';
import { BlockDevice } from './source-destination/block-device';
export declare class BlockWriteStream extends Writable {
    private destination;
    private delayFirstBuffer;
    private maxRetries;
    bytesWritten: number;
    private position;
    private startOffset;
    private firstBuffer?;
    constructor({ destination, highWaterMark, delayFirstBuffer, maxRetries, startOffset, }: {
        destination: BlockDevice;
        highWaterMark?: number;
        delayFirstBuffer?: boolean;
        maxRetries?: number;
        startOffset?: number;
    });
    private writeBuffer;
    private __write;
    _write(buffer: AlignedLockableBuffer, _encoding: string, callback: (error: Error | undefined) => void): void;
    private __final;
    /**
     * @summary Write buffered data before a stream ends, called by stream internals
     */
    _final(callback: (error?: Error | null) => void): void;
}
export declare const ProgressBlockWriteStream: {
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
} & typeof BlockWriteStream;

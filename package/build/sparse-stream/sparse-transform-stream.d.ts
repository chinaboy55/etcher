/// <reference types="node" />
/// <reference types="node" />
import { Transform } from 'stream';
import { BlocksWithChecksum, SparseReadable, SparseStreamChunk, SparseWritable } from './shared';
export declare class SparseTransformStream extends Transform implements SparseWritable, SparseReadable {
    blocks: BlocksWithChecksum[];
    position: number;
    bytesWritten: number;
    private alignedReadableState;
    constructor({ blocks, chunkSize, alignment, numBuffers, }: {
        blocks: BlocksWithChecksum[];
        chunkSize: number;
        alignment: number;
        numBuffers?: number;
    });
    private __transform;
    _transform(chunk: SparseStreamChunk, _encoding: string, callback: (error?: Error) => void): void;
}
export declare const ProgressSparseTransformStream: {
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
} & typeof SparseTransformStream;

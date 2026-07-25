/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
import { Chunk } from 'blockmap';
import { EventEmitter } from 'events';
import { Writable } from 'stream';
export type Constructor<T> = new (...args: any[]) => T;
export interface ProgressEvent {
    position: number;
    bytes: number;
    speed: number;
    averageSpeed: number;
}
export declare function makeClassEmitProgressEvents<T extends Constructor<EventEmitter>>(Cls: T, attribute: string, positionAttribute: string, interval?: number): {
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
} & T;
export declare class CountingWritable extends Writable {
    bytesWritten: number;
    position: number | undefined;
    _write(chunk: Buffer | Chunk, _enc: string, callback: (err?: Error | undefined) => void): void;
}
export declare const ProgressWritable: {
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
} & typeof CountingWritable;

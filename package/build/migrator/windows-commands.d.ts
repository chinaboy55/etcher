declare const _default: {
    mountEfi: (desiredLetter?: string) => void;
    setBoot: (path?: string) => Promise<unknown>;
    shutdown: {
        reboot: (delay?: number) => void;
        now: () => void;
    };
};
export default _default;

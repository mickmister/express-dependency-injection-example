export interface Logger {
    debug: (s: string) => void;
    info: (s: string) => void;
    warn: (s: string) => void;
    error: (s: string) => void;
}

export function newLogger(): Logger {
    return {
        debug: console.log,
        info: console.info,
        warn: console.warn,
        error: console.error,
    };
}

export function newTestLogger(): Logger {
    return {
        debug: jest.fn(),
        info: jest.fn(),
        warn: jest.fn(),
        error: jest.fn(),
    };
}

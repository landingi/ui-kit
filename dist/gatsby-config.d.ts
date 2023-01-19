export namespace flags {
    const FAST_REFRESH: boolean;
}
export const plugins: {
    resolve: string;
    options: {
        implementation: typeof import("sass");
        additionalData: string;
        sassOptions: {
            includePaths: string[];
            outputStyle: string;
        };
        cssLoaderOptions: {
            camelCase: boolean;
            localIdentName: string;
        };
    };
}[];

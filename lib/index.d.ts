export function config({ env, exclude, fileRoots, jsdoc, json, perfectionist, react, typescript }?: Options, ...args: ConfigDef[]): Promise<FlatConfig[]>;
export type FlatConfig = import('eslint').Linter.FlatConfig;
export type ConfigDef = FlatConfig | FlatConfig[] | Promise<FlatConfig> | Promise<FlatConfig[]>;
/**
 * User configuration options for ESLint
 */
export type Options = {
    env?: {
        browser?: boolean | undefined;
        es2021?: boolean | undefined;
        node?: boolean | undefined;
    } | undefined;
    exclude?: string[] | undefined;
    fileRoots?: string[] | undefined;
    jsdoc?: {
        enabled: boolean;
    } | undefined;
    json?: {
        enabled: boolean;
        sort: {
            packageJson: boolean;
            tsconfig: boolean;
        };
    } | undefined;
    perfectionist?: {
        enabled?: boolean | undefined;
    } | undefined;
    react?: {
        enabled: boolean;
    } | undefined;
    typescript?: {
        enabled: boolean;
    } | undefined;
};
//# sourceMappingURL=index.d.ts.map
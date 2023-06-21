import {ResolveOptions} from "webpack";
import {BuildOptions} from "./types/config";

export function buildResolvers(otions: BuildOptions): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [otions.paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {}
    }
}
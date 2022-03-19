import type { CodeKeywordDefinition, ErrorObject, AnySchema } from "../../types/index.d.ts";
export declare type ContainsError = ErrorObject<"contains", {
    minContains: number;
    maxContains?: number;
}, AnySchema>;
declare const def: CodeKeywordDefinition;
export default def;
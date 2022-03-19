import type { CodeKeywordDefinition, ErrorObject } from "../../types/index.d.ts";
export declare type MultipleOfError = ErrorObject<"multipleOf", {
    multipleOf: number;
}, number | {
    $data: string;
}>;
declare const def: CodeKeywordDefinition;
export default def;
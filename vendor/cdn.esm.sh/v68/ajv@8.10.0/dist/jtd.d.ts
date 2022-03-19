import type { AnySchemaObject, SchemaObject, JTDParser } from "./types/index.d.ts";
import type { JTDSchemaType, SomeJTDSchemaType, JTDDataType } from "./types/jtd-schema.d.ts";
import AjvCore, { CurrentOptions } from "./core.d.ts";
declare type JTDOptions = CurrentOptions & {
    strict?: never;
    allowMatchingProperties?: never;
    allowUnionTypes?: never;
    validateFormats?: never;
    $data?: never;
    verbose?: boolean;
    $comment?: never;
    formats?: never;
    loadSchema?: never;
    useDefaults?: never;
    coerceTypes?: never;
    next?: never;
    unevaluated?: never;
    dynamicRef?: never;
    meta?: boolean;
    defaultMeta?: never;
    inlineRefs?: boolean;
    loopRequired?: never;
    multipleOfPrecision?: never;
};
declare class Ajv extends AjvCore {
    constructor(opts?: JTDOptions);
    _addVocabularies(): void;
    _addDefaultMetaSchema(): void;
    defaultMeta(): string | AnySchemaObject | undefined;
    compileSerializer<T = unknown>(schema: SchemaObject): (data: T) => string;
    compileSerializer<T = unknown>(schema: JTDSchemaType<T>): (data: T) => string;
    compileParser<T = unknown>(schema: SchemaObject): JTDParser<T>;
    compileParser<T = unknown>(schema: JTDSchemaType<T>): JTDParser<T>;
    private _compileSerializer;
    private _compileParser;
}
export default Ajv;
export { Format, FormatDefinition, AsyncFormatDefinition, KeywordDefinition, KeywordErrorDefinition, CodeKeywordDefinition, MacroKeywordDefinition, FuncKeywordDefinition, Vocabulary, Schema, SchemaObject, AnySchemaObject, AsyncSchema, AnySchema, ValidateFunction, AsyncValidateFunction, ErrorObject, ErrorNoParams, JTDParser, } from "./types/index.d.ts";
export { Plugin, Options, CodeOptions, InstanceOptions, Logger, ErrorsTextOptions } from "./core.d.ts";
export { SchemaCxt, SchemaObjCxt } from "./compile/index.d.ts";
export { KeywordCxt } from "./compile/validate/index.d.ts";
export { JTDErrorObject } from "./vocabularies/jtd/index.d.ts";
export { _, str, stringify, nil, Name, Code, CodeGen, CodeGenOptions } from "./compile/codegen/index.d.ts";
export { JTDSchemaType, SomeJTDSchemaType, JTDDataType };
export { JTDOptions };
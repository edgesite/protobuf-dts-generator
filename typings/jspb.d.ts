declare module jspb {
    class Message__Class {
        array: any[];
        serializeBinary(): Uint8Array;
        deserializeBinary(bytes: Uint8Array): void;
        getJsPbMessageId(): string;
        toString(): string;
        getExtension(): jspb.ExtensionFieldInfo__Class;
        setExtension(field: jspb.ExtensionFieldInfo__Class, value: any): void;
    }
    class ExtensionFieldInfo__Class {
        constructor(fieldNumber: number, fieldName: string,
            ctor: FunctionConstructor, toObjectFn:FunctionConstructor,
            isRepeated: number,
            opt_binaryReaderFn: FunctionConstructor, opt_binaryWriterFn: FunctionConstructor,
            opt_binaryMessageSerializeFn: FunctionConstructor, opt_binaryMessageDeserializeFn: FunctionConstructor,
            opt_isPacked: boolean);
        isMessageType(): boolean;
    }
   export type BinaryReader = any; 
   export type BinaryWriter = any; 
   export type ByteSource = any; 
}


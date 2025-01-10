[**rejoinder**](../../../README.md)

***

[rejoinder](../../../README.md) / [src/internal](../README.md) / withMetadataTracking

# Function: withMetadataTracking()

## Call Signature

> **withMetadataTracking**(`type`, `logger`): [`ExtendedLogger`](../interfaces/ExtendedLogger.md)

Defined in: [src/internal.ts:289](https://github.com/Xunnamius/rejoinder/blob/8a503ebeed2689d0efaa12692a8cdaf933b5902d/src/internal.ts#L289)

Make rejoinder's internals aware of a new logger instance.

### Parameters

#### type

[`GenericOutput`](../enumerations/LoggerType.md#genericoutput)

#### logger

[`ExtendedLogger`](../interfaces/ExtendedLogger.md)

### Returns

[`ExtendedLogger`](../interfaces/ExtendedLogger.md)

## Call Signature

> **withMetadataTracking**(`type`, `logger`): [`ExtendedDebugger`](../../interfaces/ExtendedDebugger.md)

Defined in: [src/internal.ts:293](https://github.com/Xunnamius/rejoinder/blob/8a503ebeed2689d0efaa12692a8cdaf933b5902d/src/internal.ts#L293)

Make rejoinder's internals aware of a new logger instance.

### Parameters

#### type

[`DebugOnly`](../enumerations/LoggerType.md#debugonly)

#### logger

[`ExtendedDebugger`](../../interfaces/ExtendedDebugger.md)

### Returns

[`ExtendedDebugger`](../../interfaces/ExtendedDebugger.md)

## Call Signature

> **withMetadataTracking**(`type`, `logger`): [`ExtendedDebugger`](../../interfaces/ExtendedDebugger.md) \| [`ExtendedLogger`](../interfaces/ExtendedLogger.md)

Defined in: [src/internal.ts:297](https://github.com/Xunnamius/rejoinder/blob/8a503ebeed2689d0efaa12692a8cdaf933b5902d/src/internal.ts#L297)

Make rejoinder's internals aware of a new logger instance.

### Parameters

#### type

[`GenericOutput`](../enumerations/LoggerType.md#genericoutput) | [`DebugOnly`](../enumerations/LoggerType.md#debugonly)

#### logger

[`ExtendedLogger`](../interfaces/ExtendedLogger.md) | [`ExtendedDebugger`](../../interfaces/ExtendedDebugger.md)

### Returns

[`ExtendedDebugger`](../../interfaces/ExtendedDebugger.md) \| [`ExtendedLogger`](../interfaces/ExtendedLogger.md)
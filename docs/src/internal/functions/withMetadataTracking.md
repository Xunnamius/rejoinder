[**rejoinder**](../../../README.md)

***

[rejoinder](../../../README.md) / [src/internal](../README.md) / withMetadataTracking

# Function: withMetadataTracking()

## Call Signature

> **withMetadataTracking**(`type`, `logger`): [`ExtendedLogger`](../interfaces/ExtendedLogger.md)

Defined in: [src/internal.ts:340](https://github.com/Xunnamius/rejoinder/blob/03e489ef814eb76375bd7c5b909232208414323d/src/internal.ts#L340)

Make rejoinder's internals aware of a new logger instance and its
pre-extended sub-instances.

**This function MUST be invoked, and ONLY AFTER `::log` and
[$instances](../variables/$instances.md) have been configured on `logger`!** This allows all of
rejoinder's global enable/disable functions to work.

### Parameters

#### type

[`GenericOutput`](../enumerations/LoggerType.md#genericoutput)

#### logger

[`ExtendedLogger`](../interfaces/ExtendedLogger.md)

### Returns

[`ExtendedLogger`](../interfaces/ExtendedLogger.md)

## Call Signature

> **withMetadataTracking**(`type`, `logger`): [`ExtendedDebugger`](../../interfaces/ExtendedDebugger.md)

Defined in: [src/internal.ts:344](https://github.com/Xunnamius/rejoinder/blob/03e489ef814eb76375bd7c5b909232208414323d/src/internal.ts#L344)

Make rejoinder's internals aware of a new logger instance and its
pre-extended sub-instances.

**This function MUST be invoked, and ONLY AFTER `::log` and
[$instances](../variables/$instances.md) have been configured on `logger`!** This allows all of
rejoinder's global enable/disable functions to work.

### Parameters

#### type

[`DebugOnly`](../enumerations/LoggerType.md#debugonly)

#### logger

[`ExtendedDebugger`](../../interfaces/ExtendedDebugger.md)

### Returns

[`ExtendedDebugger`](../../interfaces/ExtendedDebugger.md)

## Call Signature

> **withMetadataTracking**(`type`, `logger`): [`ExtendedDebugger`](../../interfaces/ExtendedDebugger.md) \| [`ExtendedLogger`](../interfaces/ExtendedLogger.md)

Defined in: [src/internal.ts:348](https://github.com/Xunnamius/rejoinder/blob/03e489ef814eb76375bd7c5b909232208414323d/src/internal.ts#L348)

Make rejoinder's internals aware of a new logger instance and its
pre-extended sub-instances.

**This function MUST be invoked, and ONLY AFTER `::log` and
[$instances](../variables/$instances.md) have been configured on `logger`!** This allows all of
rejoinder's global enable/disable functions to work.

### Parameters

#### type

[`GenericOutput`](../enumerations/LoggerType.md#genericoutput) | [`DebugOnly`](../enumerations/LoggerType.md#debugonly)

#### logger

[`ExtendedLogger`](../interfaces/ExtendedLogger.md) | [`ExtendedDebugger`](../../interfaces/ExtendedDebugger.md)

### Returns

[`ExtendedDebugger`](../../interfaces/ExtendedDebugger.md) \| [`ExtendedLogger`](../interfaces/ExtendedLogger.md)

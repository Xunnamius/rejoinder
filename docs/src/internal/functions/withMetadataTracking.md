[**rejoinder**](../../../README.md)

***

[rejoinder](../../../README.md) / [src/internal](../README.md) / withMetadataTracking

# Function: withMetadataTracking()

## Call Signature

> **withMetadataTracking**(`type`, `logger`): [`ExtendedLogger`](../interfaces/ExtendedLogger.md)

Defined in: [src/internal.ts:346](https://github.com/Xunnamius/rejoinder/blob/ca03dc95b439565d6c2438e8d0f7697514c85819/src/internal.ts#L346)

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

Defined in: [src/internal.ts:350](https://github.com/Xunnamius/rejoinder/blob/ca03dc95b439565d6c2438e8d0f7697514c85819/src/internal.ts#L350)

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

> **withMetadataTracking**(`type`, `logger`): [`ExtendedLogger`](../interfaces/ExtendedLogger.md) \| [`ExtendedDebugger`](../../interfaces/ExtendedDebugger.md)

Defined in: [src/internal.ts:354](https://github.com/Xunnamius/rejoinder/blob/ca03dc95b439565d6c2438e8d0f7697514c85819/src/internal.ts#L354)

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

[`ExtendedLogger`](../interfaces/ExtendedLogger.md) \| [`ExtendedDebugger`](../../interfaces/ExtendedDebugger.md)

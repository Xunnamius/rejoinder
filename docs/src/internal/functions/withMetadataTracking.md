[**rejoinder**](../../../README.md)

***

[rejoinder](../../../README.md) / [src/internal](../README.md) / withMetadataTracking

# Function: withMetadataTracking()

## Call Signature

> **withMetadataTracking**(`type`, `logger`): [`ExtendedLogger`](../interfaces/ExtendedLogger.md)

Defined in: [src/internal.ts:373](https://github.com/Xunnamius/rejoinder/blob/523d50127af7d502d1a1b1da0fd1638569552949/src/internal.ts#L373)

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

Defined in: [src/internal.ts:377](https://github.com/Xunnamius/rejoinder/blob/523d50127af7d502d1a1b1da0fd1638569552949/src/internal.ts#L377)

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

Defined in: [src/internal.ts:381](https://github.com/Xunnamius/rejoinder/blob/523d50127af7d502d1a1b1da0fd1638569552949/src/internal.ts#L381)

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

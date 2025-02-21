[**rejoinder**](../../../README.md)

***

[rejoinder](../../../README.md) / [src/internal](../README.md) / withoutMetadataTracking

# Function: withoutMetadataTracking()

## Call Signature

> **withoutMetadataTracking**(`type`, `logger`): [`ExtendedLogger`](../interfaces/ExtendedLogger.md)

Defined in: [src/internal.ts:375](https://github.com/Xunnamius/rejoinder/blob/ca03dc95b439565d6c2438e8d0f7697514c85819/src/internal.ts#L375)

Make rejoinder's internals forget a logger instance and its pre-extended
sub-instances.

**This function MUST be invoked for descendant loggers, and ONLY AFTER
creating a new generic/debug `logger` that will be extended with additional
functionality but BEFORE passing that finalized `logger` to
[withMetadataTracking](withMetadataTracking.md)!** This prevents memory leaks.

### Parameters

#### type

[`GenericOutput`](../enumerations/LoggerType.md#genericoutput)

#### logger

[`ExtendedLogger`](../interfaces/ExtendedLogger.md)

### Returns

[`ExtendedLogger`](../interfaces/ExtendedLogger.md)

## Call Signature

> **withoutMetadataTracking**(`type`, `logger`): [`ExtendedDebugger`](../../interfaces/ExtendedDebugger.md)

Defined in: [src/internal.ts:379](https://github.com/Xunnamius/rejoinder/blob/ca03dc95b439565d6c2438e8d0f7697514c85819/src/internal.ts#L379)

Make rejoinder's internals forget a logger instance and its pre-extended
sub-instances.

**This function MUST be invoked for descendant loggers, and ONLY AFTER
creating a new generic/debug `logger` that will be extended with additional
functionality but BEFORE passing that finalized `logger` to
[withMetadataTracking](withMetadataTracking.md)!** This prevents memory leaks.

### Parameters

#### type

[`DebugOnly`](../enumerations/LoggerType.md#debugonly)

#### logger

[`ExtendedDebugger`](../../interfaces/ExtendedDebugger.md)

### Returns

[`ExtendedDebugger`](../../interfaces/ExtendedDebugger.md)

## Call Signature

> **withoutMetadataTracking**(`type`, `logger`): [`ExtendedLogger`](../interfaces/ExtendedLogger.md) \| [`ExtendedDebugger`](../../interfaces/ExtendedDebugger.md)

Defined in: [src/internal.ts:383](https://github.com/Xunnamius/rejoinder/blob/ca03dc95b439565d6c2438e8d0f7697514c85819/src/internal.ts#L383)

Make rejoinder's internals forget a logger instance and its pre-extended
sub-instances.

**This function MUST be invoked for descendant loggers, and ONLY AFTER
creating a new generic/debug `logger` that will be extended with additional
functionality but BEFORE passing that finalized `logger` to
[withMetadataTracking](withMetadataTracking.md)!** This prevents memory leaks.

### Parameters

#### type

[`GenericOutput`](../enumerations/LoggerType.md#genericoutput) | [`DebugOnly`](../enumerations/LoggerType.md#debugonly)

#### logger

[`ExtendedLogger`](../interfaces/ExtendedLogger.md) | [`ExtendedDebugger`](../../interfaces/ExtendedDebugger.md)

### Returns

[`ExtendedLogger`](../interfaces/ExtendedLogger.md) \| [`ExtendedDebugger`](../../interfaces/ExtendedDebugger.md)

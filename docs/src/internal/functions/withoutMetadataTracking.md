[**rejoinder**](../../../README.md)

***

[rejoinder](../../../README.md) / [src/internal](../README.md) / withoutMetadataTracking

# Function: withoutMetadataTracking()

## Call Signature

> **withoutMetadataTracking**(`type`, `logger`): [`ExtendedLogger`](../interfaces/ExtendedLogger.md)

Defined in: [src/internal.ts:369](https://github.com/Xunnamius/rejoinder/blob/03e489ef814eb76375bd7c5b909232208414323d/src/internal.ts#L369)

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

Defined in: [src/internal.ts:373](https://github.com/Xunnamius/rejoinder/blob/03e489ef814eb76375bd7c5b909232208414323d/src/internal.ts#L373)

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

> **withoutMetadataTracking**(`type`, `logger`): [`ExtendedDebugger`](../../interfaces/ExtendedDebugger.md) \| [`ExtendedLogger`](../interfaces/ExtendedLogger.md)

Defined in: [src/internal.ts:377](https://github.com/Xunnamius/rejoinder/blob/03e489ef814eb76375bd7c5b909232208414323d/src/internal.ts#L377)

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

[`ExtendedDebugger`](../../interfaces/ExtendedDebugger.md) \| [`ExtendedLogger`](../interfaces/ExtendedLogger.md)

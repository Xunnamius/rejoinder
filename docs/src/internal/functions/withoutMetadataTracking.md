[**rejoinder**](../../../README.md)

***

[rejoinder](../../../README.md) / [src/internal](../README.md) / withoutMetadataTracking

# Function: withoutMetadataTracking()

## Call Signature

> **withoutMetadataTracking**(`type`, `logger`): [`ExtendedLogger`](../interfaces/ExtendedLogger.md)

Defined in: [src/internal.ts:380](https://github.com/Xunnamius/rejoinder/blob/4c31d61cc2d97962fe915faa47504a4378c59057/src/internal.ts#L380)

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

Defined in: [src/internal.ts:384](https://github.com/Xunnamius/rejoinder/blob/4c31d61cc2d97962fe915faa47504a4378c59057/src/internal.ts#L384)

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

Defined in: [src/internal.ts:388](https://github.com/Xunnamius/rejoinder/blob/4c31d61cc2d97962fe915faa47504a4378c59057/src/internal.ts#L388)

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

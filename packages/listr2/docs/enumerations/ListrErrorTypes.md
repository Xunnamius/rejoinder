[**rejoinder-listr2**](../README.md)

***

[rejoinder-listr2](../README.md) / ListrErrorTypes

# Enumeration: ListrErrorTypes

Defined in: node\_modules/listr2/dist/index.d.cts:32

The actual error type that is collected and to help identify where the error is triggered from.

## Enumeration Members

### HAS\_FAILED

> **HAS\_FAILED**: `"HAS_FAILED"`

Defined in: node\_modules/listr2/dist/index.d.cts:40

Task has failed.

***

### HAS\_FAILED\_TO\_ROLLBACK

> **HAS\_FAILED\_TO\_ROLLBACK**: `"HAS_FAILED_TO_ROLLBACK"`

Defined in: node\_modules/listr2/dist/index.d.cts:38

Task has failed, ran the rollback action but the rollback action itself has failed.

***

### HAS\_FAILED\_WITHOUT\_ERROR

> **HAS\_FAILED\_WITHOUT\_ERROR**: `"HAS_FAILED_WITHOUT_ERROR"`

Defined in: node\_modules/listr2/dist/index.d.cts:42

Task has failed, but exitOnError is set to false, so will ignore this error.

***

### WILL\_RETRY

> **WILL\_RETRY**: `"WILL_RETRY"`

Defined in: node\_modules/listr2/dist/index.d.cts:34

Task has failed and will try to retry.

***

### WILL\_ROLLBACK

> **WILL\_ROLLBACK**: `"WILL_ROLLBACK"`

Defined in: node\_modules/listr2/dist/index.d.cts:36

Task has failed and will try to rollback.

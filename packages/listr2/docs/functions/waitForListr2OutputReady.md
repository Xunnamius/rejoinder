[**rejoinder-listr2**](../README.md)

***

[rejoinder-listr2](../README.md) / waitForListr2OutputReady

# Function: waitForListr2OutputReady()

> **waitForListr2OutputReady**(`extendedDebugger?`): `Promise`\<`void`\>

Defined in: [packages/listr2/src/index.ts:187](https://github.com/Xunnamius/rejoinder/blob/c2612aef66b4b21cfdeb6768b26b95963881ed3e/packages/listr2/src/index.ts#L187)

Call this **hack** once before attempting to output using rejoinder within
listr2 in the specific circumstance that (1) you're using the `permanent`
render option to keep the output text around and (2) it is not impossible
that <100ms will pass before the first attempted output and (3) it is
extremely important that the user sees every single line of this output text.

**Otherwise, stay away from this function.** This issue needs further
investigation!

## Parameters

### extendedDebugger?

`ExtendedDebugger`

## Returns

`Promise`\<`void`\>

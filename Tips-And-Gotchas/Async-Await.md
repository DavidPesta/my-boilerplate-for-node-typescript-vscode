Async/Await and Promises in my own words
A promise is an object that represents a value that is expected to result from some long running task. The resulting value of a promise may or may not exist yet at a given point in time. A promise can be passed around without blocking any code execution. The task that is generating that value is humming along in the background, doing its work, while its (promised) result is being passed around the code that prepares for the revelation of that result. A promise is kind of useless to the code until the code knows what its value is. A promise can be converted into the value that it represents by using the "await" keyword in front of it. The code will literally pause on the spot until the value that the promise represents is resolved and the promise delivers that value. The "await" keyword pauses the code to wait for the promise to become the awaited value. A promise is created whenever an async function returns a result. Any awaiting promises inside of an async function will not delay that async function from returning because an async function returns a pending promise and the code moves on. It's only when "await" is used on that returned outer promise that those inner "await's" cause the outer "await" to block, in order to trickle down absolute resolution of that outer promise to a concrete value. When "await" is used on a promise, it waits for all the inner "awaits" to the nth level until a final derived value is returned.

https://codeburst.io/javascript-es-2017-learn-async-await-by-example-48acc58bad65

https://medium.com/@bluepnume/learn-about-promises-before-you-start-using-async-await-eb148164a9c8

https://hackernoon.com/6-reasons-why-javascripts-async-await-blows-promises-away-tutorial-c7ec10518dd9

https://medium.com/@bluepnume/even-with-async-await-you-probably-still-need-promises-9b259854c161

https://medium.com/@bluepnume/async-javascript-is-much-more-fun-when-you-spend-less-time-thinking-about-control-flow-8580ce9f73fc

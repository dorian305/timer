# JavaScript Timer class
- timer functionality written in JavaScript
- expands window's built in setTimeout functionality with additional methods such as pausing and resuming
## How to use 
- instantiate new instance of Timer
- pass the function to execute on expiration as first argument
- pass the duration of the timer in milliseconds
- start the timer manually, or pass optional third parameter "true" to start the timer automatically upon instantiation
```
const myTimer = new Timer(() => console.log("Timer expired!"), 1000);
myTimer.start();
```
or
```
const myAutostartTimer = new Timer(() => console.log("Timer expired!"), 1000, true);
```
After 1 second, prints "Timer expired!" in browser console.

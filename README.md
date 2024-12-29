# Node.js HTTP Server Hang: Missing res.end()

This repository demonstrates a common error in Node.js HTTP servers: forgetting to call `res.end()` in all request handling paths.  This can lead to the server hanging and failing to respond to client requests.

The `bug.js` file contains the erroneous code. The `bugSolution.js` file shows the corrected code.

## Bug

The bug is in the conditional logic within the request handler. If the request URL is not '/', a 404 response is sent, but `res.end()` is missing. This omission prevents the response from being sent to the client, resulting in a hang.

## Solution

The solution involves ensuring that `res.end()` is always called, regardless of the request path.  This ensures the response is properly completed, and the server can handle subsequent requests.

class ErrorX extends Error {
    constructor(code, message) {
      super();
      this.code = code;
      this.message = message;
  
      // Extracting the file path from the stack trace
      // const stackLines = (new Error()).stack.split('\n');
      // // The file path is usually in the second line of the stack trace
      // if (stackLines.length >= 3) {
      //   this.path = stackLines[2].trim().replace(/^at /, '');
      // } else {
      //   this.path = 'Unknown'; // Fallback in case path extraction fails
      // }
    }
  }
  
  module.exports = { ErrorX };
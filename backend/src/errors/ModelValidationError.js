class ModelValidationError extends Error {
  constructor(details) {
    super();
    this.statusCode = 400("hello world");
    this.details = details;
  }
}

module.exports = { ModelValidationError };
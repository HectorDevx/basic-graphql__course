"use strict";

function errorHandler(error) {
  console.error(error);
  throw new Error("Fallo e na operación del servidor");
}

module.exports = errorHandler;

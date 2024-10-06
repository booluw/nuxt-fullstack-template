/* eslint-disable @typescript-eslint/no-explicit-any */
type Details = { message?: string, data?: string | object }

type Err = (code: number) => (details: Details) => Error

export const err: Err = (code: number) => {
  return ({ message, data }: Details) => {
    return createError({
      statusCode: code,
      statusMessage: message,
      data
    })
  }
}

type HttpErrorNames = 
  | 'BAD_REQUEST'
  | 'UNAUTHORIZED'
  | 'FORBIDDEN'
  | 'NOT_FOUND'
  | 'METHOD_NOT_ALLOWED'
  | 'NOT_ACCEPTABLE'
  | 'CONFLICT'
  | 'INTERNAL_SERVER_ERROR'
  | 'NOT_IMPLEMENTED'
  | 'BAD_GATEWAY'
  | 'SERVICE_UNAVAILABLE'
  | 'GATEWAY_TIMEOUT';


/** 
 * Defines Basic HTTP Errors
 * @property {Function} BAD_REQUEST - The server could not understand the request due to invalid syntax.
 * @property {Function} UNAUTHORIZED - The client must authenticate itself to get the requested response.
 * @property {Function} FORBIDDEN - The client does not have access rights to the content.
 * @property {Function} NOT_FOUND - The server can not find the requested resource.
 * @property {Function} METHOD_NOT_ALLOWED - The request method is known by the server but is not supported by the target resource.
 * @property {Function} NOT_ACCEPTABLE - The server cannot produce a response matching the list of acceptable values defined in the request's headers.
 * @property {Function} CONFLICT - The request could not be completed due to a conflict with the current state of the target resource.
 * @property {Function} INTERNAL_SERVER_ERROR - The server has encountered a situation it doesn't know how to handle.
 * @property {Function} NOT_IMPLEMENTED - The request method is not supported by the server and cannot be handled.
 * @property {Function} BAD_GATEWAY - The server, while acting as a gateway or proxy, received an invalid response from the upstream server.
 * @property {Function} SERVICE_UNAVAILABLE - The server is not ready to handle the request.
 * @property {Function} GATEWAY_TIMEOUT - The server, while acting as a gateway or proxy, did not receive a timely response from the upstream server.
 */
export const HttpErrors: Record<HttpErrorNames, any> = {
  BAD_REQUEST: err(400),
  UNAUTHORIZED: err(401),
  FORBIDDEN: err(403),
  NOT_FOUND: err(404),
  METHOD_NOT_ALLOWED: err(405),
  NOT_ACCEPTABLE: err(406),
  CONFLICT: err(409),
  INTERNAL_SERVER_ERROR: err(500),
  NOT_IMPLEMENTED: err(501),
  BAD_GATEWAY: err(502),
  SERVICE_UNAVAILABLE: err(503),
  GATEWAY_TIMEOUT: err(504),
}
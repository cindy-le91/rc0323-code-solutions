/* eslint-disable no-unused-vars -- Remove me */
import jwt from 'jsonwebtoken';
import { ClientError } from './client-error.js';

export function authMiddleware(req, res, next) {


//  Get the 'Authorization' header from the request.
const authHeader = req.headers.authorization;

//  Parse the token from the header; e.g., auth.split('Bearer ')[1]
if(!authHeader){
    return res.status(401).json({ message: 'Authentication required' });
}
const token = authHeader.split('Bearer ')[1]
console.log(token)

//  If no header or no token is provided,
//  throw a 401 error with the message 'authentication required'
if(!token){
  return res.status(401).json({ message: 'Authentication required' });
}

try {
  // Use jwt.verify() to verify the authenticity of the token and extract its payload.
  const payload = jwt.verify(token, process.env.TOKEN_SECRET);

  //  Assign the extracted payload to the user property of the req object.
  req.user = payload;
} catch (error) {
  return res.status(401).json({ message: 'Invalid token' });
}
  //  Call next() (with no arguments) to let Express know to advance to its next route or middleware.
  next();
}

/*

 *
 * References:
 * https://expressjs.com/en/4x/api.html#req.get
 * https://nodejs.org/api/http.html#http_message_headers
 * https://github.com/auth0/node-jsonwebtoken#jwtverifytoken-secretorpublickey-options-callback
 */

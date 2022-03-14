import jwt from 'jsonwebtoken';
import cookie from 'cookie';

const keys = {
    role: "http://schemas.microsoft.com/ws/2008/06/identity/claims/role",
    id: "sub",
    name: "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name",
}

/**
 * @param {string} token JWT token as a b64 string.
 * @description Because we aren't validating against the back-end everytime we call on this, and aren't guaranteeing that this is signed by the backend, this isn't 'reliable'.
 * It's fine to decode and grab basic JWT info from, but we shouldn't inherently trust this.  
 * TODO: Switch to jwt.verify(token, <public_key>, function(err, decoded) {})
 */
function decode(token) {
    let JWTObj = {};

    try {
        let tempJWTObj = jwt.decode(token);
        if (tempJWTObj) {
            JWTObj = tempJWTObj;
        } else {
            JWTObj[keys.role] = "Student";
        }
    } catch (error) {
        JWTObj[keys.role] = "Student";
    }

    return JWTObj;
};

/**
 * @param {string} token
 * @returns {string} User role (Student, Teacher, etc) as a string.
 */
function getRole(token) {
    let decoded = decode(token);

    return decoded[keys.role];
}

/**
 * 
 * @param {string} token 
 * @returns Username
 */
function getName(token) {
    let decoded = decode(token);

    return decoded[keys.name]
}

/**
 * TODO: This is such an awful implementation. We should never be passing this in a POST request. Replace any utilization of this once we get CourseBody, TutorialBody, etc setup in the backend.
 * @param {string} token
 * @returns {string} User id.
 */
 function getID(token) {
    let decoded = decode(token);

    return decoded[keys.id];
}

/**
 * 
 * @param {HttpRequest} req 
 * @returns 
 */
function parseCookies(req) {
    return cookie.parse(req ? req.headers.cookie || "" : document.cookie)
}

export { keys as JWTKeys, decode, getRole, getName, getID, parseCookies };
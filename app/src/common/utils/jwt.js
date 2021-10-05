import jwt from 'jsonwebtoken';

const keys = {
    role: "http://schemas.microsoft.com/ws/2008/06/identity/claims/role",
}

/**
 * @param {string} token JWT token as a b64 string.
 * @description Because we aren't validating against the back-end everytime we call on this, and aren't guaranteeing that this is signed by the backend, this isn't 'reliable'.
 * It's fine to decode and grab basic JWT info from, but we shouldn't inherently trust this.  
 * TODO: Switch to jwt.verify(token, <public_key>, function(err, decoded) {})
 */
function decode(token) {
    let JWTObj;

    try {
        JWTObj = jwt.decode(token);
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

export { getRole };
import instance from "@Utils/instance"; 
import { getID } from "@Utils/jwt";

/**
 * No *, &, !, @, _, or -
 * Does not start with a number.
 */
function courseRegEx() {
    return "^(?![0-9])[^\*&!@_-]+$";
}

/**
 * A function that sends form data to the server for course creation.
 * Validation is done through attributes on the form's html
 * @param {boolean} isPublished 
 * @param {string} token JWT token.
 */
async function createCourse(isPublished, token) {
    let isValid = true;
    let form = document.getElementById("course_form");

    const headers = {};

    if (typeof token != 'undefined') {
        headers["Authorization"] = "Bearer " + token;
    }

    [
        "course_title",
        "description",
    ].forEach(key => {
        isValid = (form[key].validity.valid) ? isValid : false;
    });

    if (isValid) {
        try {
            let now = new Date();    
            let response = await instance.post("/Courses/CreateCourse", {
                title: form["course_title"].value,
                author: getID(token), //TODO: Make backend generate this.
                description: form["description"].value,
                createDate: now.toISOString(), //TODO: Make backend generate this.
                modifyDate: now.toISOString(), //TODO: Make backend generate this.
                isPublished: isPublished,
            }, {
                headers: {...headers},
            });

            if (response.statusText == "OK")
            return true;
        } catch (error) {
            
        }
    }

    return false;
}

/**
 * A function that sends form data to the server for course updating.
 * Validation is done through attributes on the form's html
 * Backend should validate that the user is allowed to update the course.
 * @param {boolean} isPublished 
 * @param {string} token JWT token.
 */
async function updateCourse(isPublished, token) {
    let isValid = true;
    let form = document.getElementById("course_form");

    const headers = {};

    if (typeof token != 'undefined') {
        headers["Authorization"] = "Bearer " + token;
    }

    [
        "course_id",
        "course_title",
        "description",
    ].forEach(key => {
        isValid = (form[key].validity.valid) ? isValid : false;
    });

    if (isValid) {
        try {
            let response = await instance.put("/Courses/UpdateCourse", {
                id: form["course_id"].value,
                title: form["course_title"].value,
                description: form["description"].value,
                isPublished: isPublished,
            }, {
                headers: {...headers},
            });

            if (response.statusText == "OK")
            return true;
        } catch (error) {
            
        }
    }
    
    return false;
}

/**
 * A function that deletes a course.
 * @param {integer} id 
 * @param {string} token JWT token.
 * @returns {boolean} Whether or not the deletion succeeded.
 */
async function deleteCourse(id, token) {
    let isValid = true;

    const headers = {};

    if (typeof token != 'undefined') {
        headers["Authorization"] = "Bearer " + token;
    }

    if (isValid) {
        try { 
            let response = await instance.delete("/Courses/DeleteCourse", {
                data: {
                    id: id
                },
                headers: {...headers},
            });

            if (response.statusText == "OK")
            return true;
        } catch (error) {
            
        }
    }

    return false;
}

export { createCourse, updateCourse, deleteCourse, courseRegEx }
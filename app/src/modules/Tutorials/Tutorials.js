import instance from "@Utils/instance";
import { getID } from "@Utils/jwt";

/**
 * A function that gets an array of tutorials from the server using a course ID.
 * @param {integer} id Course id
 * @returns {Array<Object>|boolean} Array of tutorial objects if successful, 'false' if unsuccessful
 */
async function getTutorialsFromCourse(id, token) {
    const headers = {};

    if (typeof token != 'undefined') {
        headers["Authorization"] = "Bearer " + token;
    }

    try {       
        let response = await instance.get("/Tutorials/CourseTutorials/" + id, {
            headers: {...headers},
        });
        if (response.statusText == "OK")
        return response.data;
    } catch (error) {
        //TODO: Error handling.
        //console.log(error.response);
    }
    return false;
}

/**
 * A function that gets an array of tutorial details from the server using a course ID.
 * Will probably run into a race condition eventually.
 * @param {integer} id Course id
 * @returns {Array<Object>|boolean} Array of tutorial detail objects if successful, 'false' if unsuccessful
 */
async function getUserTutorialsDetailsFromCourse(id, token) {
    const headers = {};

    if (typeof token != 'undefined') {
        headers["Authorization"] = "Bearer " + token;
    }

    try {       
        let response = await instance.get("/Tutorials/GetUserTutorialsDetails/" + id, {
            headers: {...headers},
        });
        if (response.statusText == "OK")
        return response.data;
    } catch (error) {
        //TODO: Error handling.
        console.log(error.response);
    }
    return false;
}

/**
 * A function that sends form data to the server for tutorial creation.
 * Validation is done through attributes on the form's html, but is currently not defined.
 * @param {boolean} isPublished 
 * @param {string} token JWT token.
 */
async function createTutorial(isPublished, token, prompt) {
    let isValid = true;
    let author; //TODO: Make backend not need this explicitly set.
    let form = document.getElementById("tutorial_form");

    const headers = {};

    if (typeof token != 'undefined') {
        headers["Authorization"] = "Bearer " + token;
        author = getID(token);
    }

    [
        "tutorial_title",
        "description",
    ].forEach(key => {
        isValid = (form[key].validity.valid) ? isValid : false;
    });

    if (isValid) {
        try {
            let response = await instance.post("/Tutorials/CreateTutorial", {
                courseId: form["course_id"].value,
                title: form["tutorial_title"].value,
                author: author,
                description: form["description"].value,
                isPublished: isPublished,
                languageId: form["language"].value,
                difficultyId: form["difficulty"].value,
                prompt: form["md"].value,
            }, {
                headers: {...headers},
            });

            if (response.statusText == "OK")
            return true;
        } catch (error) {
            console.log(error);
        }
    }

    return false;
}

/**
 * A function that sends form data to the server for tutorial updating.
 * Validation is done through attributes on the form's html, but is currently not defined.
 * @param {boolean} isPublished 
 * @param {string} token JWT token.
 */
 async function updateTutorial(isPublished, token) {
    let isValid = true;
    let author; //TODO: Make backend not need this explicitly set.
    let form = document.getElementById("tutorial_form");

    const headers = {};

    if (typeof token != 'undefined') {
        headers["Authorization"] = "Bearer " + token;
        author = getID(token);
    }

    [
        "tutorial_title",
        "description",
    ].forEach(key => {
        isValid = (form[key].validity.valid) ? isValid : false;
    });

    if (isValid) {
        try {
            let response = await instance.put("/Tutorials/UpdateTutorial/" + form["tutorial_id"].value, {
                courseId: form["course_id"].value,
                title: form["tutorial_title"].value,
                author: author,
                description: form["description"].value,
                isPublished: isPublished,
                languageId: form["language"].value,
                difficultyId: form["difficulty"].value,
                prompt: form["md"].value,
            }, {
                headers: {...headers},
            });

            if (response.statusText == "OK")
            return true;
        } catch (error) {
            console.log(error);
        }
    }

    return false;
}

/**
 * A function that sends data to the server for updating a user's progress in a tutorial.
 * Validation should be done server-side.
 * @param {integer} id Course id
 * @param {string} token JWT token.
 * @param {boolean} inProgress Is the tutorial in progress?
 * @param {boolean} isCompleted Is the tutorial completed?
 * @returns {boolean} Whether or not the update succeeded.
 */
async function updateUserTutorial(id, token, inProgress, isCompleted) {
    const headers = {};

    if (typeof token != 'undefined') {
        headers["Authorization"] = "Bearer " + token;
    }

    try {
        let response = await instance.put("/Tutorials/UpdateUserTutorial/" + id, {
            inProgress: inProgress,
            isCompleted: isCompleted,
        }, {
            headers: {...headers},
        });

        return true;
    } catch (error) {
        console.log(error);
    }

    return false;
}

/**
 * A function that deletes a tutorial.
 * @param {integer} id 
 * @param {string} token JWT token.
 * @returns {boolean} Whether or not the deletion succeeded.
 */
 async function deleteTutorial(id, token) {
    let isValid = true;

    const headers = {};

    if (typeof token != 'undefined') {
        headers["Authorization"] = "Bearer " + token;
    }

    if (isValid) {
        try { 
            let response = await instance.delete("/Tutorials/DeleteTutorial/" + id, {
                headers: {...headers},
            });

            if (response.statusText == "OK")
            return true;
        } catch (error) {
            
        }
    }

    return false;
}

export { getTutorialsFromCourse, getUserTutorialsDetailsFromCourse, createTutorial, updateTutorial, updateUserTutorial, deleteTutorial }
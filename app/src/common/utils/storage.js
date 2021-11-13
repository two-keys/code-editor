import { useState, useEffect } from "react";
import Router from "next/router";

/**
 * Stores course data in sessionStorage, then reroutes the user.
 * @param {string} title The title of an existing course.
 * @param {string} description The description of an existing course.
 */
function storeThenRouteCourse(data) {
    const store = {
        id: data["id"],
        title: data["title"],
        description: data["description"],
        isPublished: data["isPublished"],
    };
    sessionStorage.setItem('courseDefaults', JSON.stringify(store));
    let redirect = '/courses/edit'
    Router.push(redirect);
}

/**
 * Stores tutorial data in sessionStorage, then reroutes the user.
 * @param {string} title The title of an existing tutorial.
 * @param {string} description The description of an existing tutorial.
 */
 function storeThenRouteTutorial(data) {
    const store = {
        courseId: data["courseId"],
        id: data["id"],
        title: data["title"],
        description: data["description"],
        difficultyId: data["difficultyId"],
        languageId: data["languageId"],
        prompt: data["prompt"],
    };
    sessionStorage.setItem('tutorialDefaults', JSON.stringify(store));
    let redirect = '/tutorials/edit'
    Router.push(redirect);
}

/**
 * 
 * @returns The course a user is currently editing. If a user switches tabs, this will be empty. 
 */
const getCourseSession = () => {
    let tempValue = sessionStorage.getItem('courseDefaults');
    if (tempValue) {
        const value = JSON.parse(tempValue);
        return value;
    }

    return {};
}

/**
 * 
 * @returns The course a user is currently editing. If a user switches tabs, this will be empty. 
 */
 const getTutorialSession = () => {
    let tempValue = sessionStorage.getItem('tutorialDefaults');
    if (tempValue) {
        const value = JSON.parse(tempValue);
        return value;
    }

    return {};
}

export { getCourseSession, getTutorialSession, storeThenRouteCourse, storeThenRouteTutorial };
export default function getListStudentIds(studentArray) {
    // Check if studentArray is actually an array
    if (Array.isArray(studentArray)) {
        // Use map to return an array of ids
        return studentArray.map(item => item.id);
    } else {
        // Return an empty array if the input is not an array
        return [];
    }
}


export const FETCH_STUDENT_REQUEST = 'FETCH_STUDENT_REQUEST'
export const FETCH_STUDENTS_SUCCESS = 'FETCH_STUDENTS_SUCCESS';
export const FETCH_STUDENTS_FAILURE = 'FETCH_STUDENTS_FAILURE';
export const ADD_STUDENT_REQUEST = 'ADD_STUDENT_REQUEST'
export const ADD_STUDENT_SUCCESS = 'ADD_STUDENT_SUCCESS';
export const ADD_STUDENT_FAILURE = 'ADD_STUDENT_FAILURE';
export const EDIT_STUDENT_REQUEST = 'EDIT_STUDENT_REQUEST'
export const EDIT_STUDENT_SUCCESS = 'EDIT_STUDENT_SUCCESS';
export const EDIT_STUDENT_FAILURE = 'EDIT_STUDENT_FAILURE';
export const DELETE_STUDENT_REQUEST = 'DELETE_STUDENT_REQUEST'
export const DELETE_STUDENT_SUCCESS = 'DELETE_STUDENT_SUCCESS';
export const DELETE_STUDENT_FAILURE = 'DELETE_STUDENT_FAILURE';

export const fetchStudentRequest = ()=>({
    type: FETCH_STUDENTS_REQUEST
})

export const fetchStudentSuccess = (students) =>({
    type: FETCH_STUDENTS_SUCCESS,
    payload:students
})

export const fetchStudentFailure = (error) => ({
    type: FETCH_STUDENTS_FAILURE,
    payload: error
})

export const addStudentRequest =  (students)=>({
    type: ADD_STUDENT_REQUEST,
    payload: students
})

export const addStudentFailure = (error) => ({
    type: ADD_STUDENT_FAILURE,
    payload: error
})

export const addStudentSuccess = () =>({
    type: ADD_STUDENT_SUCCESS,
    
})

export const editStudentRequest=(id, student) =>({
    type: EDIT_STUDENT_REQUEST,
    payload: id, student
})

export const editStudentSuccess = () =>({
    type: EDIT_STUDENT_SUCCESS,
})

export const editStudentFailure = (error) =>({
    type: EDIT_STUDENT_FAILURE,
    payload: error
})

export const deleteStudentSuccess= ()=>({
    type: DELETE_STUDENT_SUCCESS,
})

export const deleteStudentFailure = (error) =>({
    type: DELETE_STUDENT_FAILURE,
    payload: error
})

export const deleteStudentRequest = (id) =>({
    type: DELETE_STUDENT_REQUEST,
    payload: id
})
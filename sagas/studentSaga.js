import {call,put,takenLatest} from 'redux-saga';
import{
    FETCH_STUDENT_REQUEST,
    fetchStudentSuccess,
    fetchStudentFailure,
    ADD_STUDENT_REQUEST,
    addStudentFailure,
    addStudentSuccess,
    EDIT_STUDENT_REQUEST,
    editStudentSuccess,
    editStudentFailure,
    DELETE_STUDENT_REQUEST,
    deleteStudentSuccess,
    deleteStudentFailure,
}from'../actions/studentActions'

const api = {
    fetchStudents: ()=> fetch('/api.students').then((res)=>res.json()),
    addStudent:(student)=>fetch('/api.students',{
        method:'POST',
        header:{
            'Content-Type':'application/json',
        },
        body: JSON.stringify(student),
    }).then((res)=>res.json()),
    editStudent:(id,student)=>fetch('/api.students/${id}',{
        method:'PUT',
        header:{
            'content-Type':'appication/json',
        },
        body: JSON.stringify(student),
    }).then((res)=>res.json()),
    deleteStudent:(id)=>fetch('/api.students/${id}',{
        method:'DELETE'
    }).then((res)=>res.json())
}
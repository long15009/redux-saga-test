import {
    FETCH_STUDENTS_SUCCESS,
    ADD_STUDENT_SUCCESS,
    EDIT_STUDENT_SUCCESS,
    DELETE_STUDENT_SUCCESS
}from '../actions/studentActions';

const initialState ={
    students:[],
    loading:false,
    error:null
}
const studentReducer = (state = initialState,action)=>{
    switch(action.type){
        case FETCH_STUDENTS_SUCCESS:
            return{
                ...state,
                students:action.payload,
                loading: false,
                error:null
            }
        case ADD_STUDENT_SUCCESS:
            return{
                ...state,
                loading:flase,
                error:null
            }    
        case EDIT_STUDENT_SUCCESS:
            return {
                ...state,
                students: state.students.map(student =>
                student.id === action.payload.id ? { ...student, ...action.payload } : student
                ),
                loading: false,
                error: null,
                }

        case DELETE_STUDENT_SUCCESS:
            return{
                ...state,
                students: state.students.filter(student => student.id !== action.payload),
                loading: flase,
                error:null
            }
        default:
            return{
                state
            }
    }
}
export default studentReducer
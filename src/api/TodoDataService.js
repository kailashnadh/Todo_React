import axios from 'axios'
import {MEAN_API_URL } from '../Constants'

class TodoDataService {

    retrieveAllTodos() {
        console.log('retrieveAllTodos')
        return axios.get(`${MEAN_API_URL}/todos`);
    }

    retrieveTodo(id) {
        //console.log('executed service')
        return axios.get(`${MEAN_API_URL}/todos/${id}`);
    }

    deleteTodo(id) {
        console.log('executed service')
        return axios.delete(`${MEAN_API_URL}/todos/${id}`);
    }

    updateTodo(id, todo) {
        //console.log('executed service')
        return axios.put(`${MEAN_API_URL}/todos/${id}`, todo);
    }

    createTodo(todo) {
        //console.log('executed service')
        return axios.post(`${MEAN_API_URL}/todos/`, todo);
    }

}

export default new TodoDataService()
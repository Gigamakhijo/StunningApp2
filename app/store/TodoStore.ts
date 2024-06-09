import { makeAutoObservable } from "mobx";
import { api } from "../service/api/api";
import authStore from "./authStore";

const token = authStore.accessToken
const user_id = authStore.sub

export interface Todo {
    id: number;
    date: Date;
    due_date: Date;
    title: string;
    contents: string;
    place: string;
    is_completed: Boolean;
}

class TodoStore{
    todos: Todo[];
    date: Date
    currendId: number;
    constructor(){
        makeAutoObservable(this, {}, {autoBind: true})
        this.todos = []
        this.date = new Date()
        this.currendId = 0
    }

    get completedTodosCount(){
        return this.todos.filter((todo)=>todo.is_completed === true).length;
    }

    async fetchTodos(token: string, user_id: string, first_date: Date, last_date: Date){
        const response = await api.getTodos(token, user_id, first_date, last_date)
        if(response.kind === "ok"){
            // response.Todos를 todos에 다 추가하는 로직 코딩하기
            console.log("success fetch todos")
        }
        else {
            console.error?.(`Error fetching Todos: ${JSON.stringify(response)}`, [])
          }
    }
    
    async addTodo(token: string, user_id: string, date: Date, due_date: Date, title: string, contents: string, place: string, is_completed: boolean) {
        const response = await api.addTodo(token, user_id, date, due_date, title, contents, place, is_completed)
        if(response.kind === "ok"){
          this.todos.push({id: this.currendId, date, due_date, title, contents, place, is_completed: false})
          this.currendId++;  
          console.log("success add todo")
        }
        else{        
          console.error?.(`Error fetching Todos: ${JSON.stringify(response)}`, [])
        }
    }
    
    async updateTodo(token: string, user_id: string, date: Date, due_date: Date, title: string, contents: string, place: string, is_completed: boolean, todo_id: number){
        const response = await api.updateTodo(token, user_id, date, due_date, title, contents, place, is_completed, todo_id)
        if(response.kind === "ok"){
            this.todos.push({id: todo_id, date, due_date, title, contents, place, is_completed})
            console.log("success update todo")
          }
          else{        
            console.error?.(`Error fetching Todos: ${JSON.stringify(response)}`, [])
          }
    }

    completeTodo(id: number): void{
        const index = this.todos.findIndex((v)=>v.id === id);
        if(id == -1){
            this.todos[index].is_completed = !this.todos[index].is_completed
        }
    }
}

export const todoStore = new TodoStore()
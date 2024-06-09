import { create, ApisauceInstance, ApiResponse } from "apisauce";
import configProd from "@/app/config/config.prod";
import authStore from "@/app/store/authStore";
import { ApiConfig, TodoItem, ApiTodoResponse  } from "./api.types";
import { GeneralApiProblem } from "./apiProblem";
import { Todo } from "@/app/store/TodoStore";
import DateTimePicker from "react-native-modal-datetime-picker";
import { isNewBackTitleImplementation } from "react-native-screens";
import { todo } from "node:test";

const token = authStore.accessToken
export const DEFAULT_API_CONFIG: ApiConfig = {
    url: configProd.API_URL,
    timeout: 10000,
  }

export class Api {
    apisauce: ApisauceInstance
    config: ApiConfig
  
    /**
     * Set up our API instance. Keep this lightweight!
     */
    constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
      this.config = config
      this.apisauce = create({
        baseURL: this.config.url,
        timeout: this.config.timeout,
        headers: {
          Accept: "application/json",
        },
      })
    }

  
    async addTodo(
      token: string, 
      user_id: string, 
      date: Date, 
      due_date: Date, 
      title: string, 
      contents: string, 
      place: string, 
      is_completed: Boolean
    ): Promise<{kind: "ok"; Todo: TodoItem } | GeneralApiProblem>{
      const headers = {
        Authorization: `Bearer ${token}`,
      }
      date = new Date(
        date.getFullYear() -
          date.getMonth() +
          1 -
          date.getDate() +
          "T" +
          date.getHours() +
          date.getMinutes(),
      )

      due_date = new Date(
        date.getFullYear() -
          date.getMonth() +
          1 -
          date.getDate() +
          "T" +
          date.getHours() +
          date.getMinutes(),
      )

      const response: ApiResponse<TodoItem> = await this.apisauce.post(
        "/v1/todos", 
        {
        user_id,
        date,
        due_date,
        title,
        contents,
        place,
        is_completed
      },
    { headers },
  )
  if(response.ok){
    console.log("ok addTodo")
  }
  try{
    const data = response.data;
  if (data) {
    const Todo: TodoItem = data;
    return { kind: "ok", Todo };
  } else {
    throw new Error("Data is undefined");
  }
  } catch(e){
    if (__DEV__ && e instanceof Error) {
      console.error?.(`Bad data: ${e.message}\n${response.data}`, e.stack)
    }
    return { kind: "bad-data" }
  }
    }

    async getTodos(
      token: string,
      user_id: string,
      first_date: Date,
      last_date: Date
    ): Promise<{kind: "ok"; Todos: TodoItem[] } | GeneralApiProblem> {
      const headers = {
        Authorization: `Bearer ${token}`,
      }
      first_date = new Date(
        first_date.getFullYear() -
          first_date.getMonth() +
          1 -
          first_date.getDate() +
          "T" +
          first_date.getHours() +
          first_date.getMinutes(),
      )

      last_date = new Date(
        last_date.getFullYear() -
        last_date.getMonth() +
        1 -
        last_date.getDate() +
        "T" +
        last_date.getHours() +
        last_date.getMinutes(),
      )
      const response: ApiResponse<TodoItem[]> = await this.apisauce.get(
        "/v1/todos/{first_date}/{last_date}", 
        {
        user_id,
        first_date,
        last_date,
      },
    { headers },
    )
    if(response.ok){
      console.log("ok getTodo")
    }
    try{
      const rawData = response.data;
    if (rawData) {
      const Todos: TodoItem[] = rawData?.map((raw) => ({...raw})) ?? []
      return { kind: "ok", Todos };
    } else {
      throw new Error("Data is undefined");
    }
    } catch(e){
      if (__DEV__ && e instanceof Error) {
        console.error?.(`Bad data: ${e.message}\n${response.data}`, e.stack)
      }
      return { kind: "bad-data" }
    }
    }

    async updateTodo(
      token: string,
      user_id: string,
      date: Date,
      due_date: Date,
      title: string,
      contents: string,
      place: string,
      is_completed: Boolean,
      todo_id: number
    ): Promise<{ kind: "ok"; Todo: TodoItem } | GeneralApiProblem> {
      const headers = {
        Authorization: `Bearer ${token}`,
      }

      date = new Date(
        date.getFullYear() -
          date.getMonth() +
          1 -
          date.getDate() +
          "T" +
          date.getHours() +
          date.getMinutes(),
      )

      due_date = new Date(
        due_date.getFullYear() -
          due_date.getMonth() +
          1 -
          due_date.getDate() +
          "T" +
          due_date.getHours() +
          due_date.getMinutes(),
      )

      const response: ApiResponse<TodoItem> = await this.apisauce.put(
        "/v1/todo/{todo_id}",
        {
          user_id,
          date,
          due_date,
          title,
          contents,
          place,
          is_completed,
          todo_id
        },
        {
          headers,
        }
      )
      if(response.ok){
        console.log("ok updateTodo")
      }
      try{
        const rawData = response.data;
      if (rawData) {
        const Todo: TodoItem = rawData
        return { kind: "ok", Todo };
      } else {
        throw new Error("Data is undefined");
      }
      } catch(e){
        if (__DEV__ && e instanceof Error) {
          console.error?.(`Bad data: ${e.message}\n${response.data}`, e.stack)
        }
        return { kind: "bad-data" }
      }
      
    }
    
}




// // 요청 보내는 함수
// const getDataWithAuthorization = async (token: string) => {
//     try {
//       const response = await api.get('/your-endpoint', {}, {
//         headers: {
//           'Authorization': `Bearer ${token}`,
//         }
//       });
  
//       if (response.ok) {
//         console.log('Response data:', response.data);
//         return response.data;
//       } else {
//         console.error('Error in response:', response.problem);
//         // 에러 핸들링을 위한 코드 추가
//       }
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       // 에러 핸들링을 위한 코드 추가
//     }
//   };
  
  // Bearer 토큰을 사용하여 요청 보내기
  const bearerToken = authStore.accessToken; // 여기에 실제 토큰을 입력하세요
 //  getDataWithAuthorization(bearerToken);
 export const api = new Api()
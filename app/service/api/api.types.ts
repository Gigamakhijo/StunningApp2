/**
 * These types indicate the shape of the data you expect to receive from your
 * API endpoint, assuming it's a JSON object like we have.
 */

export interface ApiTodoResponse {
  status: string
  items: TodoItem[]
}

export interface TodoItem {
  date: Date
  due_date: Date
  title: string
  contents: string
  place: string
  is_completed: Boolean
}

export interface APICommentResponse {
  status: string
  item: CommentItem
}

export interface CommentItem {
  date: Date
  contents: string
  title:string // title이 필요한가....??
} 

export interface APIChallengeResponse {
  status: string
  item: ChallengeItem
}

export interface ChallengeItem {
  date: Date
  due_date: Date
  title: string
  is_completed: Boolean
}

export interface ApiUserResponse {
  status: string
  user: {
    id: number
    email: string
    username: string
    full_name: string
    gender: string
    phone_number: string
    status_message: string
  }
}

export interface ApiProfileImageResponse {
  status: string
  profile_image: undefined
}


export interface ApiMateListResponse {
  status: string
  items: MateItem[]
}

export interface MateItem {
  id: number
  email: string
  username: string
  full_name: string
  gender: string
  phone_number: string
  status_message: string
  profile: string
}

export interface ApiMateResponse {
  status: string
  mate: {
    id: number
    email: string
    username: string
    full_name: string
    gender: string
    phone_number: string
    status_message: string
    profile: string
  }
}
export interface ApiTokenResponse {
  status: string
  access_token: string
  token_type: string
  authToken: string
}

export interface UserInfo {
  id: number
  email: string
  username: string
  full_name: string
  gender: string
  phone_number: string
  status_message: string
}
/**
 * The options used to configure apisauce.
 */
export interface ApiConfig {
  url: string
  timeout: number
}

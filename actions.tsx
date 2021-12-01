import axios from "axios" ;

type ResponseData = {
    id:string
    title: string , 
    firstName: string, 
    lastName : string,  
    picture: string
}
type Response = {
    data: ResponseData[] ,
    total: string,
    page: string,
    limit: string 
}

type Location = {
    street:string,
    city:string,
    state:string,
    country:string,
    timezone:string
}

type UserDetailResponse = {
    id:string,
    title:string,
    firstName:string,
    lastName:string,
    picture:string,
    gender:string,
    email:string,
    dateOfBirth:string,
    phone:string,
    location:Location ,
    registerDate:string,
    updatedDate:string
}
type UserPostData = {
    id:string ,
    image:string,
    likes:string,
    tags: string[],
    text:string,
    publishDate:string,
    owner: {
        id:string,
        title:string,
        firstName:string,
        lastName:string,
        picture:string,
    }
}
type UserPostsResponse = {
    data:UserPostData[] ,
    total:string,
    page:string,
    limit:string
}

const axiosClient = axios.create({
    baseURL: `https://dummyapi.io/data/v1/user`,
    headers: {
       'app-id': '6195fdc5bd5da35c97997939'
    }
 });

 export const getUsersList = (page:number):Promise<ResponseData[]> => {
    return axiosClient.get<Response>(`?page=${page}?limit=10`).then(res => res.data.data).catch(err => err)
 }

 export const getUserDetail = (userId:string):Promise<UserDetailResponse> => {
    return axiosClient.get<UserDetailResponse>(`/${userId}`).then(res => res.data).catch(err => err)
 }

 export const getUserPosts = (userId:string):Promise<UserPostData[]> => {
    return axiosClient.get<UserPostsResponse>(`/${userId}/post`).then(res => res.data.data).catch(err => err)
 }
export interface Reqres {
    page: number
    per_page: number
    total: number
    total_pages: number
    data: ReqresData[]
}

export interface ReqresData {
    id: number
    email: string
    first_name: string
    last_name: string
    avatar: string
}

export interface ReqResInput {
    key: string;
    value: string;
}
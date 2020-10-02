export class User{
    _id : String;
    email : String;
    password : String;
}

export interface LoginResponse{
    success : boolean;
    token : string;
}

export interface SignupResponse{
    success : boolean;
    message : string;
}

export interface LogoutRsp {
    success: true;
}
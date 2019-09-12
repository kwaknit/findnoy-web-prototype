export interface AuthenticationResponse {
    user_info: UserInfo;
    user_session: Session;
}

export interface AuthenticationRequest {
    email_address: string;
    password: string;
}

export interface Unauthenticated {
    message: string;
}

export interface Session {
    access_token: string;
    token_type: string;
    expires_in: number
}

export interface UserInfo {
    id: number;
    first_name: string;
    last_name: string;
    email_address: string;
    access_type: number
}
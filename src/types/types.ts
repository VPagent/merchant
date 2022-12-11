
export type InitialState = {
    name: string,
    email: string,
    password: string,
    shopResponse: null | Shopify,
    googleToken: string,
    welcome: null | RegResponse,
    step: number,
    isLogIn: boolean
}

export type Shopify ={
    shop_logo_url: string,
    shop_name: string,
    token: string,
    status: string,
}

export type GoogleRes ={
    status: string,
    token: string
}

export type RegBody = {
    name: string,
    email: string,
    password: string,
    shop_token: string,
    google_token: string,
}

export type RegResponse = {
    status: string,
    message: string
}
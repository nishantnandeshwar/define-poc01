import axios, { AxiosInstance, AxiosResponse } from "axios";
import { ConstantsUrl } from "./apiUrl";

let httpClient: AxiosInstance
let defaultHeaders = {};

function setApiConstants(baseurl: string, apiKey?: string) {
    // baseURL = baseurl;
    defaultHeaders = {
        'Content-Type': 'application/json',
        APIKey: apiKey != "" ? apiKey : ConstantsUrl.API_KEY_CONSTANT,
        POSPlatform: 'CCMobilePOS',
        // POSVersion: DeviceInfo.getVersion()
    };
    httpClient = creatAxiosClient(baseurl);
}

function creatAxiosClient(baseURL: string) {
    let client = axios.create({
        baseURL,
        headers: defaultHeaders,
    });

    client.interceptors.request.use(
        (config) => {
            try {
                const method = (config?.method ?? "Unknown").toUpperCase();
                const url = `${config?.baseURL ?? ""}${config?.url ?? ""}`;
                console.log(`HTTPUtil Request: HTTP method: ${method} | Url: ${url}`);
            } catch (err) {
                console.log('Http client log Request Error', err);
            }
            return config;
        },
        (error) => {
            console.error('Request error:', error);
            return Promise.reject(error);
        }
    );
    return client
}

function createResponseObj(response: AxiosResponse) {
    return {
        statusCode: response.status,
        data: response.data,
        orignalResponse: response,
    };
}

async function post(endpoint: string, body: any, params: any, headers: any, responseType?: any) {
    const response = await httpClient.post(endpoint, body, {
        headers: {
            ...defaultHeaders,
            ...headers,
        },
        params,
        ...responseType, 
    });
    return createResponseObj(response);
}

async function get(endpoint: string, params: any, headers: any) {
  const response = await httpClient.get(endpoint, {
    headers: {
      ...defaultHeaders,
      ...headers,
    },
    params,
  });
  //  console.log(`URL: ${endpoint}`, response);
  return createResponseObj(response);
}


export const httputil = {
    setApiConstants,
    post,
    get,
};
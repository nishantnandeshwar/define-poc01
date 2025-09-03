import axios, { AxiosResponse } from "axios";
import { ConstantsUrl } from "./apiUrl";

const defaultHeaders = {
  "Content-Type": "application/json",
  APIKey: ConstantsUrl.API_KEY_CONSTANT,
  POSPlatform: "CCMobilePOS",
};

// Factory function: create axios client dynamically
function createClient(baseURL: string, headers?: any) {
  const client = axios.create({
    baseURL,
    headers: {
      ...defaultHeaders,
      ...headers,
    },
  });

  client.interceptors.request.use(
    (config) => {
      try {
        const method = (config?.method ?? "Unknown").toUpperCase();
        const url = `${config?.baseURL ?? ""}${config?.url ?? ""}`;
        console.log(`HTTPUtil Request: HTTP method: ${method} | Url: ${url}`);
      } catch (err) {
        console.log("Http client log Request Error", err);
      }
      return config;
    },
    (error) => {
      console.error("Request error:", error);
      return Promise.reject(error);
    }
  );

  return client;
}

function createResponseObj(response: AxiosResponse) {
  return {
    statusCode: response.status,
    data: response.data,
    orignalResponse: response,
  };
}

async function post(
  baseURL: string,
  endpoint: string,
  body: any,
  params?: any,
  headers?: any,
  responseType?: any
) {
  const client = createClient(baseURL, headers);
  const response = await client.post(endpoint, body, {
    params,
    ...responseType,
  });
  return createResponseObj(response);
}

async function get(
  baseURL: string,
  endpoint: string,
  params?: any,
  headers?: any
) {
  const client = createClient(baseURL, headers);
  const response = await client.get(endpoint, {
    params,
  });
  return createResponseObj(response);
}

export const httputil = {
  post,
  get,
};




// import axios, { AxiosInstance, AxiosResponse } from "axios";
// import { ConstantsUrl } from "./apiUrl";

// let httpClient: AxiosInstance
// let defaultHeaders = {};


// function setApiConstants(baseurl: string, apiKey?: string) {
//     defaultHeaders = {
//         'Content-Type': 'application/json',
//         APIKey: apiKey != "" ? apiKey : ConstantsUrl.API_KEY_CONSTANT,
//         POSPlatform: 'CCMobilePOS',
//     };
//     httpClient = creatAxiosClient(baseurl);
// }

// function creatAxiosClient(baseURL: string) {
//     let client = axios.create({
//         baseURL,
//         headers: defaultHeaders,
//     });

//     client.interceptors.request.use(
//         (config) => {
//             try {
//                 const method = (config?.method ?? "Unknown").toUpperCase();
//                 const url = `${config?.baseURL ?? ""}${config?.url ?? ""}`;
//                 console.log(`HTTPUtil Request: HTTP method: ${method} | Url: ${url}`);
//             } catch (err) {
//                 console.log('Http client log Request Error', err);
//             }
//             return config;
//         },
//         (error) => {
//             console.error('Request error:', error);
//             return Promise.reject(error);
//         }
//     );
//     return client
// }

// function createResponseObj(response: AxiosResponse) {
//     return {
//         statusCode: response.status,
//         data: response.data,
//         orignalResponse: response,
//     };
// }

// async function post(endpoint: string, body: any, params: any, headers: any, responseType?: any, baseURL?: string) {
//     const response = await httpClient.post(endpoint, body, {
//         baseURL: baseURL ?? ConstantsUrl.BASE_URL,
//         headers: {
//             ...defaultHeaders,
//             ...headers,
//         },
//         params,
//         ...responseType,
//     });
//     return createResponseObj(response);
// }

// async function get(endpoint: string, params: any, headers: any, baseURL?: string) {
//     console.log("endpoint>>",endpoint)
//     console.log("params>>",params)
//     console.log("headers>>",headers)
//     console.log("baseURL>>",baseURL)
//     const response = await httpClient.get(endpoint, {
//         baseURL: baseURL ?? ConstantsUrl.BASE_URL,
//         headers: {
//             ...defaultHeaders,
//             ...headers,
//         },
//         params,
//     });
//     console.log("final response>>",response)
//     return createResponseObj(response);
// }


// export const httputil = {
//     setApiConstants,
//     post,
//     get,
// };




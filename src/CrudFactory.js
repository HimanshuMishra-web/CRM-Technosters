import {CrudRequest} from "@crud/core";
import axios from "axios";

export class CrudFactory extends CrudRequest {
    baseUrl = "";

    getUrl = (...segments) => segments.reduce((url, segment) => url + segment, this.baseUrl);

    async get(url, data = {}, requestOptions = {}){
        return this.send({
            method: "GET",
            url,
            data,
            ...requestOptions
        });
    }

    async post(url, data= {}, requestOptions = {}){
        return this.send({
            method: "POST",
            url,
            data,
            ...requestOptions
        });
    }

    async create (url, data = {}, requestOptions = {}){
        return this.send({
            method: "POST",
            url: `create/${url}`,
            data,
            ...requestOptions
        });
    }

    async retrieve(url, data = {}, requestOptions = {}){
        return this.send({
            method: "GET",
            url: `retrieve/${url}`,
            data,
            ...requestOptions
        });
    }

    async create (url, data = {}, requestOptions = {}){
        return this.send({
            method: "POST",
            url: `update/${url}`,
            data,
            ...requestOptions
        });
    }

    async delete(url, data = {}, requestOptions = {}){
        return this.send({
            method: "DELETE",
            url: `delete/${url}`,
            data,
            ...requestOptions
        });
    }

    async send (requestOptions = {}){
        const {url, data, method, notify = true} = requestOptions;

        const options = {
            ...requestOptions.ajaxOptions,
            method,
        };

        const fullUrl = this.getUrl(url);

        options.headers = {
            ...options.headers,
            Accept: "application/json"
        };

        if (!(data instanceof FormData)){
            options.headers["Content-Type"] = "application/json";
        }

        if (options.method === "GET"){
            options.params = data;
        } else {
            options.data = data;
        }

        try {
            try {
                const response = await axios(fullUrl, options);

                if ([200].includes(response.status)){
                    const {type, message} = response.data;

                    if (type === "error")
                        throw new Error(message);

                    if (options.method !== "GET" && notify){
                        this.notify({
                            message,
                            type,
                        });
                    }

                    return response.data;
                } else {
                    throw new Error(`${response.status} : ${response.statusText}`);
                }
            } catch (e){
                if (e.response?.status === 401)
                    window.location.href = "/";
                throw e;
            }
        } catch (e){
            if (options.method !== "GET" && notify)
                this.notify({
                    message: e.message,
                    type: "error",
                });

            throw e;
        }
    }
}

export const $crud = new CrudFactory();

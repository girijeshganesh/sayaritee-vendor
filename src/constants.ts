import { Injectable } from '@angular/core';
@Injectable()
export class Constants {
    APIBasePath: any;
    imageBasePath: any;   
    APIRequestTimeout: any;
    commonAPIErrorMessage: string;
    noImage: string;  
    constructor() {
        this.APIBasePath = "http://localhost/24cart/api/";
        this.APIRequestTimeout = 25000000;
        this.commonAPIErrorMessage = "Server Error";
        this.noImage = 'assets/category/no_photo.png';      
    }
}

export let getCountryContant = () => {
    return 1;
};

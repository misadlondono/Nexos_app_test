import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class ApiClient {

  constructor(private http: HttpClient){
  }

  get = (url: string) :Promise<any> => {

    return this.http.get(url).toPromise();
  }

  delete = (url: string) :Promise<any> =>{

    return this.http.delete(url).toPromise();
  }

}

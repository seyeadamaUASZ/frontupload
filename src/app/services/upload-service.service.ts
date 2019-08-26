import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadServiceService {

  constructor(private http:HttpClient) { }
  uploadFile(file:File):Observable<HttpEvent<{}>>{
      const formdata : FormData = new FormData();
      formdata.append('file',file);
    const req = new HttpRequest('POST','http://localhost:8081/uploadFile',formdata,{
       reportProgress:true,
       responseType:'text'
    });
    return this.http.request(req);
  }

 // all files uploaded 

 allFiles():Observable<any>{
   return this.http.get('http://localhost:8081/files')
 }

}

import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ENDPOINTS } from '../../environments/APIS';
import { Walk } from '../member/types/interfaces/walk';

@Injectable({
  providedIn: 'root'
})
export class WalkService {



  constructor(private http: HttpClient) { 
  }

  addNewWalk(info: Walk): Observable<any>{
    const walkInfo = {
      startedOn: info.startedOn,
      kind: info.kind
    }
    return this.http.post(ENDPOINTS.addNewWalk, walkInfo);
  }

  fetchMyWalks(): Observable<any> {
    return this.http.get(ENDPOINTS.getWalks);
  }

  deleteWalk(walkId: string): Observable<any> {
    return this.http.delete(ENDPOINTS.deleteWalk + walkId);
  }

  updateWalk(walkId: string, endOn : string): Observable<any> {
    return this.http.patch(ENDPOINTS.updateWalk + walkId, {endOn});
  }

   getImages(walkId: string): Observable<any> {
    return this.http.get(ENDPOINTS.getImages + walkId);
  }

  getUploadURL(walkId: string): Observable<any>{
    /*
      get the presigned URL
    */
    return this.http.post(`${ENDPOINTS.getUploadURL}${walkId}/attachment`, {});
  }

  uploadToS3(uploadURL: string, file : Buffer, fileName: string): Observable<any>{
    // Create form data 
    // const formData = new FormData();  
    //     // Store form name as "file" with file data 
    //   formData.append(fileName, file); 
    return this.http.put(uploadURL, file);
  }

  saveImageInfo(imageName: string, walkId: string): Observable<any>{
    return this.http.put(ENDPOINTS.saveImageInfo + walkId, {imageName})
  }


}

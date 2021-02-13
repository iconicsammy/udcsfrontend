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


}

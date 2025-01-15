import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  getPositions(): Observable<any[]> {
    return this.http.get<any[]>('your-api-endpoint');
  }

  addPosition(position: any): Observable<any> {
    return this.http.post<any>('your-api-endpoint', position);
  }

  updatePosition(id: number, position: any): Observable<any> {
    return this.http.put<any>(`your-api-endpoint/${id}`, position);
  }

  deletePosition(id: number): Observable<any> {
    return this.http.delete<any>(`your-api-endpoint/${id}`);
  }
}

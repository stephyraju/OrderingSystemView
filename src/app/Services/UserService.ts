import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Shared/models/User';
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/users'; // Replace with your backend API URL

  constructor(private http: HttpClient) { }

  registerUser(user: User): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/registration`, user);
  }
}

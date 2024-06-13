import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Shopkeeper } from './model/Shopkeeper';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopkeeperService {

  private baseUrl = 'http://localhost:8081/shopkeepers';

  constructor(private http: HttpClient) { }

  getShopkeepers(): Observable<Shopkeeper[]> {
    const url = `${this.baseUrl}/all`;
    return this.http.get<Shopkeeper[]>(url);
  }

  getShopkeeperById(id: number): Observable<Shopkeeper> {
    const url = `${this.baseUrl}${id}`;
    return this.http.get<Shopkeeper>(url);
  }

  createShopkeeper(shopkeeper: Shopkeeper): Observable<Shopkeeper> {
    return this.http.post<Shopkeeper>(this.baseUrl, shopkeeper);
  }

  updateShopkeeper(id: number, shopkeeper: Shopkeeper): Observable<Shopkeeper> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<Shopkeeper>(url, shopkeeper);
  }

  deleteShopkeeper(id: number): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}

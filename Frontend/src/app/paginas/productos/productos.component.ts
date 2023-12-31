import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
  providers: [ApiService]
})
export class ProductosComponent {
  productos = [{ nombre: '' },{precio: ''},{imagen: ''}];

  constructor(private api: ApiService) {
    this.getProductos();
  }

  getProductos = () => {
    this.api.getAllProductos().pipe(
      tap((data) => {
        this.productos = data;
      }),
      catchError((error) => {
        console.log(error);
        return of(null); 
      })
    ).subscribe();
  }
}

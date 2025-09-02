import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProductsService {

  products = [
    {
      id: 1,
      nombre: "Chai Fresa",
      precio: 50,
      imagen: "assets/img/chai-fresa.png",
      categoria: "Latte",
      descripcion: "Delicioso chai latte con un toque dulce y fresco de fresa."
    },
    {
      id: 2,
      nombre: "Tisanas de frutos del bosque",
      precio: 50,
      imagen: "assets/img/tisana-frutos-bosque.png",
      categoria: "Tisanas",
      descripcion: "Infusión natural con frutos rojos y notas frutales intensas."
    },
    {
      id: 3,
      nombre: "Chai Frappe",
      precio: 50,
      imagen: "assets/img/chai-frappe.png",
      categoria: "Latte",
      descripcion: "Refrescante frappe de chai especiado, ideal para días calurosos."
    },
    {
      id: 4,
      nombre: "Nieve de Yogurt",
      precio: 50,
      imagen: "assets/img/nieve-yogurt.png",
      categoria: "Nieve",
      descripcion: "Suave nieve de yogurt con un sabor cremoso y ligero."
    },
  ];

  productsComplete = [

    {
      id: 1,
      nombre: "Chai Fresa",
      precio: 50,
      descripcion: "Delicioso chai latte con un toque dulce y fresco de fresa.",
      imagen: "assets/img/chai-fresa.png",
      presentacion: [{
        id:1,
        nombrePresentacion: "Frappe",
        precio: 50
      },{
        id:2,
        nombrePresentacion: "Caliente",
        precio: 50
      },{
        id:3,
        nombrePresentacion: "Rocas",
        precio: 40  
      }],
      personalizables: {
        leche: [{
          id: 1,
          tipo: "Entera",
          precio: 0
        },{
          id: 2,
          tipo: "Deslactosada",
          precio: 5
        },{
          id: 3,
          tipo: "Almendra",
          precio: 10
        },{
          id: 4,
          tipo: "Coco",
          precio: 10  
        }],
        endulzantes: [{
          id: 1,
          tipo: "Azúcar",
          precio: 0
        },{
          id: 2,
          tipo: "Stevia",
          precio: 5
        },{
          id: 3,
          tipo: "Miel",
          precio: 10
        }],
      },
    },
    {
      id: 2,
      nombre: "Tisanas de frutos del bosque",
      precio: 50,
      descripcion: "Infusión natural con frutos rojos y notas frutales intensas.",
      imagen: "assets/img/tisana-frutos-bosque.png",
      presentacion: [{
        id:1,
        nombrePresentacion: "Frappe",
        precio: 50
      },{
        id:2,
        nombrePresentacion: "Caliente",
        precio: 50
      },{
        id:3,
        nombrePresentacion: "Rocas",
        precio: 40
      }],
      personalizables: {
        leche: [{
          id: 1,
          tipo: "Entera",
          precio: 0
        },{
          id: 2,
          tipo: "Deslactosada",
          precio: 5
        },{
          id: 3,
          tipo: "Almendra",
          precio: 10
        },{
          id: 4,
          tipo: "Coco",
          precio: 10
        }],
        endulzantes: ["Azúcar", "Stevia", "Miel"],
      },
    },
    {
      id: 3,
      nombre: "Chai Frappe",
      precio: 50,
      descripcion: "Refrescante frappe de chai especiado, ideal para días calurosos.",
      imagen: "assets/img/chai-frappe.png",
      presentacion: [{
        id:1,
        nombrePresentacion: "Frappe",
        precio: 50
      },{
        id:2,
        nombrePresentacion: "Caliente",
        precio: 50
      }],
      personalizables: {
        leche: [{
          id: 1,
          tipo: "Entera",
          precio: 0
        },{
          id: 2,
          tipo: "Deslactosada",
          precio: 5
        },{
          id: 3,
          tipo: "Almendra",
          precio: 10
        },{
          id: 4,
          tipo: "Coco",
          precio: 10  
        }],
        endulzantes: [{
          id: 1,
          tipo: "Azúcar",
          precio: 0
        },{
          id: 2,
          tipo: "Stevia",
          precio: 5
        },{
          id: 3,
          tipo: "Miel",
          precio: 10
        }],
      },
    },
    {
      id: 4,
      nombre: "Nieve de Yogurt",
      precio: 50,
      descripcion: "Suave nieve de yogurt con un sabor cremoso y ligero.",
      imagen: "assets/img/nieve-yogurt.png",
      presentacion: [{
        id:1,
        nombrePresentacion: "Cono",
        precio: 50
      },{
        id:2,
        nombrePresentacion: "Copa",
        precio: 40
      }],
      personalizables: {
        cubierta: [{
          id: 1,
          tipo: "Chocolate",
          precio: 0
        },{
          id: 2,
          tipo: "Caramelo",
          precio: 5
        },{
          id: 3,
          tipo: "Vainilla",
          precio: 10  
        }],
      },
    },
  ];

  getProducts() {
    return this.products;
  }

  searchProducts(query: string): Observable<any[]> {
    return of(this.products.filter(producto =>
      producto.nombre.toLowerCase().includes(query)));
    // return this.products.filter(product => 
    //     product.nombre.toLowerCase().includes(query.toLowerCase())
    // );
  }

  getProductById(id: number) {
    return this.productsComplete.find(product => product.id === id);
  }

  productCompleted(idProducto: number) {
    return this.productsComplete.find(product => product.id === idProducto);
  }

  constructor() { }

  /**
   *
    chai frappe 
    1 leche  almendra $5 
    1 frappe  $50

    id_producto 1
    id_extras_icluidos 1
    id_personalizable 1
    total = 50 + 5 = 55

    pedido_articulo
    id_pedido 1
    id_producto 1
    id_extras_icluidos 1
    id_personalizable 2
    total = 50 + 5 = 55

    pedido_extras
    id_extras_icluidos 1
    referencia_pedido 1
    id_prdoucto 1
    id_extras 2

    1 leche  almendra $5
    2 leche almendra $10
   */

}
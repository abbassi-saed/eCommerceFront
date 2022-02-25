import { Observable } from 'rxjs';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],

})
export class ProductComponent implements OnInit {

  constructor(private productsService:ProductsService) { }

  public productList:any;

  display = "none";

  ngOnInit(): void {

    this.getAllProducts();
  }

  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }

  getAllProducts(){
    // this.productsService.getAll().subscribe((res: Product[]) => this.products = res);

    this.productsService.getAll()
    .subscribe(res => {
      this.productList =res;
      this.productList.forEach((a:any) => {
         Object.assign(a,{quantity:1,total:a.price});
      });
console.log(this.productList)
    })
  }




  deleteProduct(id: string) {
    this.productsService.deleteProduct(id)
      .subscribe(
        data => {
         console.log("test")
         this.getAllProducts()
        },
        error => console.log(error));
  }

}

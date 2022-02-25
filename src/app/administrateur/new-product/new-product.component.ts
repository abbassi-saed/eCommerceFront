import { ToastrService } from 'ngx-toastr';
import { ProductsService } from './../../services/products.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

  constructor(private productsService:ProductsService,private toastr: ToastrService) { }


  formGroup !: FormGroup;


  ngOnInit(): void {

    this.initForm();
  }


  initForm(){
    this.formGroup = new FormGroup({
      title : new FormControl('', [Validators.required]),
      price : new FormControl('', [Validators.required]),
      description : new FormControl('', [Validators.required]),
      // image : new FormControl('', [Validators.required]),
      category : new FormControl('', [Validators.required])
    })
  }

  register() {
    this.productsService
    .register(this.formGroup.value).subscribe(data => {
      this.initForm();
      this.toastr.success(
        `:)`,
        `Le produit bien ajouter`,
        {
          timeOut: 3000,
          positionClass: 'toast-bottom-left'
        }
      );
    },
    error => console.log(error));
  }

}

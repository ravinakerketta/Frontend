import { Component, OnInit } from '@angular/core';
import { Product } from '../Modal/Product';
import { SampleService } from '../sample.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private sampleService: SampleService) { 
    
  }


  static count:number = parseInt(localStorage.getItem("id")  || '') || 0;
  form_product: Product  = new  Product();

  _product_list : Array<Product> = [];

  ngOnInit(): void {
    this._product_list = this.sampleService.product_list;
  }
  
  insert(){
    ProductComponent.count++;
    
    if(this.form_product.product_name!="" && this.form_product.product_description!="" && this.form_product.product_imagepath!="" && this.form_product.product_quantity!=null && this.form_product.product_price!=null){
      this.form_product.product_id = "product_count" + ProductComponent.count;
    
      this.sampleService.addProductList(this.form_product );
      localStorage.setItem("id",ProductComponent.count.toString());
      console.log(this.form_product);
    }
    //alert(this.form_product.product_name +" "+ this.form_product.product_description + this.form_product.product_imagepath + this.form_product.product_quantity + this.form_product.product_price);
   else{
     alert("Please Enter Details Correctly.....");
   }
    
  }

}
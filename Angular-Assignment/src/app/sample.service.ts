import { Injectable } from '@angular/core';
import { Product } from './Modal/Product';

@Injectable({
  providedIn: 'root'
})

export class SampleService {
  
  product_list : Array<Product> = [];
  cart_list : Array<Product> = JSON.parse(localStorage.getItem('cart')  || '[]') || [];
  static product_img_path: string = "../assets/";
  constructor() { }

  addProductList(details: Product){
    let detail_obj: Product = new Product();

    detail_obj.product_name = details.product_name;
    detail_obj.product_id = details.product_id;
    detail_obj.product_description = details.product_description;
    detail_obj.product_imagepath = SampleService.product_img_path + details.product_imagepath.split("\\").pop()
    detail_obj.product_quantity = details.product_quantity;
    detail_obj.product_price = details.product_price;
    this.product_list.push(detail_obj);
    

    

      console.log(detail_obj);
    //  console.log(this.product_list);

    localStorage.setItem("product_list",JSON.stringify(this.product_list));
    
    
  }

  
  addCardList(carts :Product){

    
    let cart_obj: Product = new Product();
    this.cart_list.push(carts);
    console.log(carts);
    localStorage.setItem('cart',JSON.stringify(this.cart_list));
    localStorage.setItem("product_list",JSON.stringify(this.product_list));
    
    
  }

  removeProducts(removeprod : Product){
    for(let objects of this.product_list){
      if(objects.product_id == removeprod.product_id){
//        console.log(this.product_list.indexOf(objects));

        objects.product_quantity += removeprod.product_quantity;
        
        let index = this.cart_list.indexOf(removeprod);
        this.cart_list.splice(index,1);

        console.log(this.cart_list);
        

        localStorage.setItem("product_list",JSON.stringify(this.product_list));
        localStorage.setItem('cart',JSON.stringify(this.cart_list));
        
      }
    }
    
  }
}
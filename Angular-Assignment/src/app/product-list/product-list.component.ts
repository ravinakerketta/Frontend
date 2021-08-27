import { Component, OnInit } from '@angular/core';
import { Product } from '../Modal/Product';
import { SampleService } from '../sample.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private sampleService: SampleService) {
   
   }

   _product_list : Array<Product> = [];
   _card_list : Array<Product> = [];

   
   
   ngOnInit(): void {
     
      if(localStorage.getItem("product_list")!=null){
        this.sampleService.product_list = JSON.parse(localStorage.getItem("product_list")  || '[]');
        this._product_list = this.sampleService.product_list;
        console.log(this._product_list);
        
      }
     
   }
   

  addtocart(products: any ){
    //let prod = 
    console.log(products.product_quantity);

    if(products.product_quantity <=0 ){
      
      alert("Sorry! Product is out of stock.");
    }
    else{
      let requiredQuan = parseInt(window.prompt("Enter Quantity: ")  || '');
    let productprice_ : number = requiredQuan * parseInt(products.product_price);

    console.log(products.product_quantity);
    
    for(let ex of this.sampleService.cart_list ){

      if(products.product_id == ex.product_id){
        //console.log("Its pres");
        
        products.product_quantity = products.product_quantity - requiredQuan;
       
        ex.product_quantity += requiredQuan;
        ex.product_price += productprice_;
        console.log(ex.product_quantity);
        
        localStorage.setItem('cart',JSON.stringify(this.sampleService.cart_list));
        localStorage.setItem("product_list",JSON.stringify(this.sampleService.product_list));
        return;
      }

    }
    let prod: Product = {
      product_id : products.product_id,
      product_name: products.product_name,
      product_description: products.product_description,
      product_imagepath:products.product_imagepath,
      product_quantity: requiredQuan,
      product_price: productprice_
    }

    products.product_quantity = products.product_quantity - requiredQuan;
    console.log(products.product_quantity);
    
    
    this.sampleService.addCardList(prod);
    
   
    }

    
  
    
    
    
  }
   
  
}

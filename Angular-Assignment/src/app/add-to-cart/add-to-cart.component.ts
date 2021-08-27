import { Component, OnInit } from '@angular/core';
import { Product } from '../Modal/Product';
import { SampleService } from '../sample.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {

  constructor(private sampleService: SampleService) {
   
  }
  cart_list : Array<Product> = [];

  total_price!: number;

  ngOnInit(): void {
     
    if(localStorage.getItem("cart")!=null){
      this.sampleService.cart_list = JSON.parse(localStorage.getItem("cart") || '[]');
      this.cart_list = this.sampleService.cart_list;
      this.calculateBill();
      console.log(this.cart_list);
      
    }
  }

  calculateBill(){
    this.total_price = 0;
    for(let objects of this.cart_list){
      this.total_price += objects.product_price;
    }
  }

  removeproduct(remove : Product){
    //alert("remove");
    this.sampleService.removeProducts(remove);
    this.calculateBill();
    //this.ngOnInit();
  }

}
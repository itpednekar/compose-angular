import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
   product : any;
  constructor(public service : ProductService) { }

  ngOnInit() {
    /* this.service.Select()
     .subscribe(result => {
      console.log(result);
     })*/ 
     var observableResult = this.service.Select();
     observableResult.subscribe((result) =>{
       console.log(result);
       this.product = result;
     }) 
  }

}

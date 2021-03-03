import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any;
  constructor(private route: ActivatedRoute) { }
  remove(products: any){
    products.delete = true
  }
  addLike(products: any){
    if (!products.addedLike){
      products.like += 1;
      products.addedLike = true
    }else{
      products.like -= 1;
      products.addedLike = false
    }
  }
  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const categoryNameFromRoute = String(routeParams.get('categoryName'));

    // Find the product that correspond with the id provided in route.
    this.products = products.filter(i => i.category == categoryNameFromRoute);
  }
}


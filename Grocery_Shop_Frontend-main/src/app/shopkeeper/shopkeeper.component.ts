import { Component,OnInit } from '@angular/core';
import { ShopkeeperService } from '../ShopkeeperService';
import { Shopkeeper } from '../model/Shopkeeper';
import { Router,Route } from '@angular/router';
@Component({
  selector: 'app-shopkeeper',
  templateUrl: './shopkeeper.component.html',
  styleUrls: ['./shopkeeper.component.css']
})
export class ShopkeeperComponent implements OnInit {

  // Define a variable of type Shopkeeper
  user: Shopkeeper = {
    id:0,
    name: "",
    email: ""
  };

  // Array to hold shopkeepers
  shopkeepers: Shopkeeper[] = [];

  constructor(private shopkeeperService: ShopkeeperService,private router: Router) { }

  ngOnInit(): void {
    this.getAllShopkeepers(); // Fetch shopkeeper with ID 1 when component initializes
  }

  // getShopkeeperById(id: number): void {
  //   this.shopkeeperService.getShopkeeperById(id).subscribe(
  //     (data: Shopkeeper) => {
  //       this.shopkeepers.push(data);
  //     },
  //     error => {
  //       console.error('Error fetching shopkeeper', error);
  //     }
  //   );
  // }

  getAllShopkeepers(): void {
    this.shopkeeperService.getShopkeepers().subscribe(
      (data: Shopkeeper[]) => {
        this.shopkeepers = data;
        console.log('hi');
        console.log(data);
      },
      error => {
        console.error('Error fetching shopkeepers', error);
      }
    );
  }
  navigateToProduct(): void {
    this.router.navigate(['/product']); // Navigate to /product route
  }
}

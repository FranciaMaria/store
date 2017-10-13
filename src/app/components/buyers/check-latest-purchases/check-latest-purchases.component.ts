import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BuyersService } from '../../../services/buyers.service';

@Component({
  selector: 'app-check-latest-purchases',
  templateUrl: './check-latest-purchases.component.html',
  styleUrls: ['./check-latest-purchases.component.css']
})
export class CheckLatestPurchasesComponent implements OnInit {

  id: number;
  //route: any;
  buyer: Object;
  buyers:Array<Object>

  constructor(private route: ActivatedRoute, private buyersService:BuyersService) {
    this.buyers = buyersService.getBuyers();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
       this.buyers.forEach(buyer =>{
       		if(buyer['id'] == this.id ){
       			this.buyer = buyer;
       	}
       })
       
       // In a real app: dispatch action to load the details here.
    });
  }

  ngOnDestroy() {
    //this.sub.unsubscribe();
  }

}

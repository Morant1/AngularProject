import { Component, OnInit } from '@angular/core';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-statistic-page',
  templateUrl: './statistic-page.component.html',
  styleUrls: ['./statistic-page.component.scss']
})
export class StatisticPageComponent implements OnInit {

  chartData = {
  title:'',
  type:'LineChart',
  data: [],
  columns: ['Browser', '%'],
  width:550,
  height:400
}

  subscription: Subscription;
  constructor(private bitcoinService: BitcoinService) { }

  ngOnInit(): void {


    this.bitcoinService.getMarketPrice()
    this.subscription = this.bitcoinService.price$
    .pipe(
      filter(price=>!!price)
    ).subscribe(price => {
      console.log(price)
      this.chartData.title = price.description;
      let values = price.values;
      for (let i = 0; i < values.length; i++) {
      this.chartData.data.push(Object.values(values[i]))
    
    }})}
   
    ngOnDestroy(): void {
      this.subscription.unsubscribe()
    }
}



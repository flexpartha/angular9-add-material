import { Component, OnDestroy, OnInit } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular9-add-material';

  mediaSub:Subscription;
  deviceXs:boolean;
  constructor( public mediaObs:MediaObserver){}
  ngOnInit(){
    this.mediaSub = this.mediaObs.media$.subscribe((result:MediaChange) =>{
      console.log(result.mqAlias);
      this.deviceXs = result.mqAlias ==='xs' ? true : false;
    })
  }
  ngOnDestroy(){
    this.mediaSub.unsubscribe();
  }
}

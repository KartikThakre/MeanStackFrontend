import { Component, OnInit, NgZone } from '@angular/core';
const MAX_WIDTH_BREKPOINT = 720;
@Component({
  selector: 'app-sidenav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {


private mediamatcher : MediaQueryList = 
matchMedia(`(max_width : ${MAX_WIDTH_BREKPOINT}px)`)

links =[{
   name :'Invoices',
   url : 'invoices' 
},{
  name : 'Client',
  url : 'clients'
}
];

  constructor(zone : NgZone) { 
    this.mediamatcher.addListener((mql) => {
      zone.run(() => this.mediamatcher = matchMedia(`(max_width : ${MAX_WIDTH_BREKPOINT}px)`));
    })
  }

  ngOnInit(): void {
  }

  isScreensmall(){
    return this.mediamatcher.matches;
  }

}

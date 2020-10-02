import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceBuilderRoutingModule } from './invoice-builder-routing.module';
import { InvoiceBuilderComponent } from './invoice-builder.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { InvoiceModule } from '../invoice/invoice.module';
import { ClientModule } from '../client/client.module';
import { HttpClientModule } from '@angular/common/http';
import {MatMenuModule} from '@angular/material/menu';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from '../services/http-interceptor.service';



@NgModule({
  declarations: [ InvoiceBuilderComponent,
    SideNavComponent, ToolbarComponent],
  imports: [
    CommonModule,
    InvoiceBuilderRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    InvoiceModule,
    ClientModule,
    HttpClientModule,
    MatMenuModule
  ],
  exports : [
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    InvoiceModule,
    ClientModule,
    HttpClientModule,
    MatMenuModule
  ],
providers : [{provide: HTTP_INTERCEPTORS , useClass: HttpInterceptorService , multi : true}]
})
export class InvoiceBuilderModule { }

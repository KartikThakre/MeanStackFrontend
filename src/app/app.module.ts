import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule  } from '@angular/material/toolbar';
import { InvoiceBuilderModule } from './invoice-builder/invoice-builder.module';
import { MaterialModule } from './shared/material.module';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InvoiceModule } from './invoice/invoice.module';
import { ClientModule } from './client/client.module';
import { HttpClientModule } from '@angular/common/http';
import { InvoiceService } from './services/invoice.service';
import { ClientService } from './services/client.service';
import { InvoiceFormComponent } from './invoice-form/invoice-form.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AuthModule } from './auth/auth.module';
import { JwtService } from './services/jwt.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { EditInvoiceResolverService } from './services/edit-invoice-resolver.service';
import { HttpInterceptorService } from './services/http-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    InvoiceFormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    InvoiceBuilderModule,
    MatSidenavModule,
    MatToolbarModule,
    MaterialModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    InvoiceModule,
    ClientModule,
    HttpClientModule,
    MatPaginatorModule,
    AuthModule
    
  ],
  providers: [MatSidenavModule,InvoiceService,ClientService,JwtService,AuthGuardService,
    AuthService,EditInvoiceResolverService,HttpInterceptorService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }

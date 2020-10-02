import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule} from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSortModule} from '@angular/material/sort';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
    imports: [
      CommonModule,
      MatButtonModule,
      MatIconModule,
      MatSidenavModule,
      MatCardModule,
      MatToolbarModule,
      MatListModule,
      MatTableModule,
      MatMenuModule,
      MatFormFieldModule,
      MatInputModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatSnackBarModule,
      MatPaginatorModule,
      MatProgressSpinnerModule,
      MatSortModule,
      MatDialogModule,
      MatSelectModule,
      

    ],
    exports: [
      MatButtonModule,
      MatIconModule,
      MatSidenavModule,
      MatCardModule,
      MatToolbarModule,
      MatListModule,
      MatTableModule,
      MatMenuModule,
      MatFormFieldModule,
      MatInputModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatSnackBarModule,
      MatPaginatorModule,
      MatProgressSpinnerModule,
      MatSortModule,
      MatDialogModule,
      MatSelectModule,
      
      
    ]
  })
  export class MaterialModule { }
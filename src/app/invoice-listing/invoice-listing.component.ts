import { Component, OnInit, ViewChild, ChangeDetectorRef, AfterViewInit, AfterViewChecked } from '@angular/core';
import { InvoiceService } from '../services/invoice.service';
import { Invoice } from '../models/Invoice';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { remove } from 'lodash';
import { MatPaginator } from '@angular/material/paginator';
import { of as observableof} from 'rxjs';
import { startWith, catchError, map } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators/switchMap';
import { MatTableDataSource } from '@angular/material/table';
import { merge } from 'rxjs';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-invoice-listing',
  templateUrl: './invoice-listing.component.html',
  styleUrls: ['./invoice-listing.component.css']
})
export class InvoiceListingComponent implements OnInit, AfterViewInit, AfterViewChecked {
  constructor(
    private invoiceservice : InvoiceService, 
    private router : Router,
    public snackBar : MatSnackBar,
    private ref: ChangeDetectorRef) { }
    displayedColumns: string[] = ['item', 'qty', 'date', 'due', 'rate', 'tax', 'action'];
    dataSource = new MatTableDataSource<Invoice>();
    resultLength = 0;
    isResultsLoading = false;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
  saveBtnHanlder() {
    this.router.navigate(['invoice-builder', 'invoices', 'new']);
  }
  editBtnHandler(_id) {
    this.router.navigate(['invoice-builder', 'invoices', _id]);
  }
  deleteBtnHandler(id) {
    this.invoiceservice.deleteInvoice(id)
      .subscribe(data => {
        const removedItems = remove(this.dataSource.data, (item) => {
          return item._id === data._id
        });
        this.dataSource.data = [...this.dataSource.data];
        this.snackBar.open('Invoice deleted', 'Success', {
          duration: 2000
        })
      }, err => this.errorHandler(err, 'Failed to delete invoice'))
  }
  ngOnInit() {

  }
  filterText(filterValue: string) {
    this.isResultsLoading = true;
    filterValue = filterValue.trim()
    this.paginator.pageIndex = 0;
    this.invoiceservice.getInvoices({
      page: this.paginator.pageIndex,
      perPage: this.paginator.pageSize,
      sortField: this.sort.active,
      sortDir: this.sort.direction,
      filter: filterValue
    })
      .subscribe(data => {
        debugger;
        console.log("hey");
        this.dataSource.data = data.docs;
        this.resultLength = data.total;
        this.isResultsLoading = false;
      }, err => this.errorHandler(err, 'Failed to filter invoices'))
  }

  ngAfterViewChecked() {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    this.ref.detectChanges();
  }
  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0)
    merge(this.paginator.page, this.sort.sortChange)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isResultsLoading = true;
          return this.invoiceservice.getInvoices({
            page: this.paginator.pageIndex,
            perPage: this.paginator.pageSize,
            sortField: this.sort.active,
            sortDir: this.sort.direction,
            filter: ''
          })
        }),
        map(data => {
          this.isResultsLoading = false;
          this.resultLength = data.total;
          return data.docs;
        }),
        catchError(() => {
          this.isResultsLoading = false;
          this.errorHandler('Failed to fetch invoices', 'Error');
          return observableof([]);
        })
       )
      .subscribe(data => {
        this.dataSource.data = data;
      })
  }

  private errorHandler(error, message) {
    this.isResultsLoading = false;
    console.error(error);
    this.snackBar.open(message, 'Error', {
      duration: 2000
    });
  }

  

}


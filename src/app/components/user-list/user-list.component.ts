import { SelectionModel } from '@angular/cdk/collections';
import { EventEmitter } from '@angular/core';
import { Component, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/models/user';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})

export class UserListComponent implements OnInit, OnChanges {

  @Input() users: User[];
  @Output() onUserDelete = new EventEmitter()
  @Output() updateUser = new EventEmitter()

  displayedColumns: string[] = ['selection', 'position', 'name', 'email', 'gender', 'address', 'dateOfBirth', 'action'];
  dataSource = new MatTableDataSource<User>();
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  selection = new SelectionModel<User>(true, []);


  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(user?: User, index?: number): string {
    if (!user) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(user) ? 'deselect' : 'select'} row ${index + 1}`;
  }

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void { }


  ngOnChanges() {
    this.dataSource.data = this.users;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  deleteUser(name: string, index: number) {
    const dialogConfig = new MatDialogConfig()
    dialogConfig.height = '250px'
    dialogConfig.width = '450px'
    dialogConfig.data = name;
    dialogConfig.disableClose = true

    this.matDialog.open(DeleteDialogComponent, dialogConfig).afterClosed()
      .subscribe(
        res => {
          if (res) this.onUserDelete.emit(index)
        });
  }

  editUser(user: User, index: number) {
    const dialogConfig = new MatDialogConfig()
    dialogConfig.height = '600px'
    dialogConfig.width = '500px'
    dialogConfig.data = user;
    dialogConfig.disableClose = true

    this.matDialog.open(UserDialogComponent, dialogConfig).afterClosed()
      .subscribe(
        updateUser => {
          if (user) this.updateUser.emit({ index, user: updateUser })
        });

  }
}

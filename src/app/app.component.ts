import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/user';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test-angular';

  totalMale: number;
  totalFemale: number;

  filteredUserData: User[] = []

  users$: Observable<User[]>

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getUser().subscribe(users => {
      this.filteredUserData = users
      this.getMaleFemale()
    })
  }

  deleteUser(index: number) {
    this.filteredUserData.splice(index, 1)
    this.filteredUserData = [...this.filteredUserData]
    this.getMaleFemale()
  }

  getMaleFemale() {
    this.totalMale = this.filteredUserData.filter(user => user.gender == 'male').length
    this.totalFemale = this.filteredUserData.filter(user => user.gender == 'female').length
  }

  updateUser(updateData: UpdateData) {
    this.filteredUserData.splice(updateData.index, 1, updateData.user)
    this.filteredUserData = [...this.filteredUserData]
    this.getMaleFemale()
  }


}

interface UpdateData {
  index: number;
  user: User
}

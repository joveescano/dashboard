import { Component } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

interface Province {
  value: string;
  viewValue: string;
}

interface Postal {
  value: string;
  viewValue: string;
}

interface Dept {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Lemery'},
    {value: 'pizza-1', viewValue: 'Talisay'},
    {value: 'tacos-2', viewValue: 'Sto Tomas'},
  ];

  provinces: Province[] = [
    {value: 'steak-0', viewValue: 'Laguna'},
    {value: 'pizza-1', viewValue: 'Batangas'},
    {value: 'tacos-2', viewValue: 'Cavite'},
  ];

  postals: Postal[] = [
    {value: 'steak-0', viewValue: '4209'},
    {value: 'pizza-1', viewValue: '4200'},
    {value: 'tacos-2', viewValue: '4234'},
  ];

  depts: Dept[] = [
    {value: 'tool-0', viewValue: 'Technician'},
    {value: 'book-1', viewValue: 'Lawyer'},
    {value: 'medicine-2', viewValue: 'Doctor'},
  ];
}

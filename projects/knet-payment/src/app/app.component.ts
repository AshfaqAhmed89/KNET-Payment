import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'knet-payment';
  public data: any[] = [
    { key: 'Reciever Name', value: 'MUHAMMAD HUSSAIN' },
    { key: 'Amount', value: '5,000 KWD' },
    { key: 'Notes', value: 'test payment' },
    { key: 'Date', value: '16/26/21 10:26 PM' },
  ]
}

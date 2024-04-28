import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  amount!: number;
  cartCount: number = 1;

  constructor(private _sharedService: SharedService) {}

  ngOnInit() {
    this._sharedService.cartItemsLength$.subscribe({
      next: (res:any) => {
        // console.log('Nael = ' + res);
        this.cartCount = res;
      },
    });
  }

}

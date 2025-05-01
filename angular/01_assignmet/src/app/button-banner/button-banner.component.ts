import { Component } from '@angular/core';
import { BannerComponent } from "./banner/banner.component";
import { ButtonComponent } from "./button/button.component";

@Component({
  selector: 'app-button-banner',
  standalone: true,
  imports: [BannerComponent, ButtonComponent],
  templateUrl: './button-banner.component.html',
  styleUrl: './button-banner.component.css'
})
export class ButtonBannerComponent {

  cnt = 0;

  onButtonClicked(num: number){
    this.cnt = num;
  }

}

import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @HostListener('window:scroll', ['$event'])

  onWindowScroll(e: any) {
    const element = document.querySelector('.toolbar');
    const notification = document.querySelector('.notification');
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('toolbar-layer');
      if (!!notification) {
        notification.classList.add('notification-layer');
      }
    } else {
      element.classList.remove('toolbar-layer');
      if (!!notification) {
        notification.classList.remove('notification-layer');
      }
    }
  }
}

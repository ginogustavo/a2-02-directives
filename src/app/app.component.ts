import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'directive-practice';
  isDetailsVisible = false;
  clicksArray = [];
  counter = 1;

  showDetails() {
    this.isDetailsVisible = !this.isDetailsVisible;
    // this.clicksArray.push(this.counter++);
    this.clicksArray.push(new Date());
  }

  getColor(number) {
    return number > 4 ? 'blue' : 'white';
  }
}

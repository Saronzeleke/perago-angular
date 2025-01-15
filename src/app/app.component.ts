import { Component } from '@angular/core';
import { Employee } from './models/employee.model'; // Adjust the path based on your component's location
   

@Component({
  selector: 'app-root',
  template: 
    <div class="content">
      <span>{{ title }} app is running!</span>
    </div>
  ,
})
export class AppComponent {
  title = 'perago-angular';
}


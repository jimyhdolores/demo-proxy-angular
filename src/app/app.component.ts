import { Component, OnInit } from '@angular/core';
import { ApiRestService } from 'src/app/apirest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo-proxy-angular';
  constructor(private apiRestService: ApiRestService) { }
  ngOnInit() {
    this.apiRestService.getGreeting().subscribe(data => {
      console.log(data);
    });
  }
}

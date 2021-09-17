import { Component } from '@angular/core';
import { ServerService } from './services/server.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'gameWiththeo';
  status = 'DOWN';

  constructor(private serverService: ServerService, private http: HttpClient) {}

  ngOnInit() {
    /*this.serverService.getStatus().then((result: any) => {
      console.log(result);
    });*/
  }
}

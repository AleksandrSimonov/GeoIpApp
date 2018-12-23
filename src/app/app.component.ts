import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data = {};

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadGeoIpData()
      .then(() => {
        console.log(this.data);
      })
      .catch(console.log);
  }

  async loadGeoIpData(): Promise<void> {
    this.data = await this.http.get('http://freegeoip.app/json/').toPromise();
  }
}

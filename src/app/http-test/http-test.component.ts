import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-http-test',
    templateUrl: './http-test.component.html',
    styleUrls: ['./http-test.component.scss']
})
export class HttpTestComponent implements OnInit {
    tulos = 'Moro';
    apitulos = 'Moro taas';
    apiosoite = 'http://media.mw.metropolia.fi/wbma';
    kuvaosoite = 'http://media.mw.metropolia.fi/wbma/uploads/';
    bitcoinosoite = 'https://api.coindesk.com/v1/bpi/currentprice.json';
    tulokset: any;

    constructor(private http: HttpClient) {
    }

    getJson() {

        interface Myinterface {
            license: string;
        }

        this.http.get<Myinterface>('assets/package.json').subscribe(data => {
            console.log(data);
            this.tulos = data.license;
        });
    }

    getFromApi() {
        this.http.get(this.apiosoite + '/media').subscribe(data => {
            console.log(data[0].filename);
            this.apitulos = this.kuvaosoite + data[0].filename;
        });

    }

    getBitcoindata() {
        this.http.get(this.bitcoinosoite).subscribe(data => {
            console.log(data);
            this.tulokset = data;
        });
    }

    ngOnInit() {
        this.getJson();
        this.getFromApi();
        this.getBitcoindata();
    }

}

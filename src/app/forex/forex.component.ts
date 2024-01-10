import { formatCurrency } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-forex',
  templateUrl: './forex.component.html',
  styleUrl: './forex.component.css',
})
export class ForexComponent implements OnInit, AfterViewInit {
  private _table1: any;

  constructor(private renderer: Renderer2, private http: HttpClient) {}

  ngAfterViewInit(): void {
    this.renderer.removeClass(document.body, 'sidebar-open');
    this.renderer.addClass(document.body, 'sidebar-closed');

    this._table1 = $('#table1').DataTable({
      columnDefs: [
        {
          targets: 2,
          className: 'text-right',
        },
      ],
    });
    this.getData();
  }

  ngOnInit(): void {}
  getData(): void {
    console.log('getData()');

    var url =
      'https://openexchangerates.org/api/latest.json?app_id=f7a78886b36d4ac3acfe0ca71506c704';

    this.http.get(url).subscribe((data: any) => {
      console.log(data);

      var rates = data.rates;
      console.log(rates);

      var idr = rates.IDR;
      var idr2 = formatCurrency(idr, 'en-US', '', 'USD');
      console.log('USD : ' + idr2);
      var row = [1, 'USD', idr2];
      this._table1.row.add(row);

      var sgd = rates.IDR / rates.SGD;
      var sgd2 = formatCurrency(sgd, 'en-US', '', 'SGD');
      console.log('SGD : ' + sgd);
      var row = [2, 'SGD', sgd2];
      this._table1.row.add(row);

      var bnd = rates.IDR / rates.BND;
      var bnd2 = formatCurrency(bnd, 'en-US', '', 'BND');
      console.log('BND : ' + bnd);
      var row = [3, 'BND', bnd2];
      this._table1.row.add(row);

      var hkd = rates.IDR / rates.HKD;
      var hkd2 = formatCurrency(hkd, 'en-US', '', 'HKD');
      console.log('HKD : ' + hkd);
      var row = [4, 'HKD', hkd2];
      this._table1.row.add(row);

      var btc = rates.IDR / rates.BTC;
      var btc2 = formatCurrency(btc, 'en-US', '', 'BTC');
      console.log('BTC : ' + btc);
      var row = [5, 'BTC', btc2];
      this._table1.row.add(row);

      var aed = rates.IDR / rates.AED;
      var aed2 = formatCurrency(aed, 'en-US', '', 'AED');
      console.log('AED : ' + aed);
      var row = [6, 'AED', aed2];
      this._table1.row.add(row);

      var jep = rates.IDR / rates.JEP;
      var jep2 = formatCurrency(jep, 'en-US', '', 'JEP');
      console.log('JEP : ' + jep);
      var row = [7, 'JEP', jep2];
      this._table1.row.add(row);

      var kes = rates.IDR / rates.KES;
      var kes2 = formatCurrency(kes, 'en-US', '', 'KES');
      console.log('KES : ' + kes);
      var row = [8, 'KES', kes2];
      this._table1.row.add(row);

      var lak = rates.IDR / rates.LAK;
      var lak2 = formatCurrency(lak, 'en-US', '', 'LAK');
      console.log('LAK : ' + lak);
      var row = [9, 'LAK', lak2];
      this._table1.row.add(row);

      var mop = rates.IDR / rates.MOP;
      var mop2 = formatCurrency(mop, 'en-US', '', 'MOP');
      console.log('MOP : ' + mop);
      var row = [10, 'MOP', mop2];
      this._table1.row.add(row);

      this._table1.draw(false);
    });
  }
}

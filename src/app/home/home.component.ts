import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ApiClient } from '../api-client/ApliClient';
import { NewMercanciaComponent } from '../new-mercancia/new-mercancia.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombre', 'cantidad', 'fechaingreso', 'acciones'];
  mercancias: MatTableDataSource<any>;

  url: string = 'http://localhost:8080';

  constructor( private api: ApiClient, private dialog: MatDialog) {

    this.mercancias = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    let urlget = this.url + "/get-mercancias"
    this.api.get(urlget).then((res) => {
      console.log(res);
      this.mercancias = res.mercancias;
    }).catch((err) => {
      console.error(err);
    })

  }

  create(){
    this.dialog.open(NewMercanciaComponent, {
      width: '80%',
      maxWidth: '400px'
    } );

  }

  delete(id: number){
    let urldelete = this.url + "/mercancias/delete/"+ id;
    this.api.delete(urldelete).then((res) =>{
      console.log(res);
      this.getData();
    }).catch( (err) =>{
      console.error(err);
    })
  }


}

import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-mercancia',
  templateUrl: './new-mercancia.component.html',
  styleUrls: ['./new-mercancia.component.scss']
})
export class NewMercanciaComponent implements OnInit {

  constructor( private ref: MatDialogRef<NewMercanciaComponent>) { }

  ngOnInit(): void {
  }

}

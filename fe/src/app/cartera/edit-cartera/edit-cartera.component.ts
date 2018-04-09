import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../../services/peticiones.service';
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-edit-cartera',
  templateUrl: './edit-cartera.component.html',
  styleUrls: ['./edit-cartera.component.css']
})
export class EditCarteraComponent implements OnInit {
  public carteraName;
  public carteraId;
  constructor(
    private _peticionesService: PeticionesService,
    private route: ActivatedRoute,

  ) { }

  ngOnInit() {
    this.queryCarteraId();
    this.editCartera();
  }

  queryCarteraId(){
    console.log('hasdf');
      this.route.params.subscribe(params => {
      // this.carteraId = params.id;
      this.carteraName=params.name;
      console.log(this.carteraName+"editcartera");
   });

  }
  editCartera(){
    // this._peticionesService.updateCartera(this.)

  }
}

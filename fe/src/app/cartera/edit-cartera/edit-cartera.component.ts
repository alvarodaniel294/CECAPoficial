import { Component, OnInit, ElementRef,ViewChild,Output,EventEmitter } from '@angular/core';
import { PeticionesService } from '../../services/peticiones.service';
import { ActivatedRoute,Router } from "@angular/router";
import {Cartera} from '../../modelo/cartera';
;


@Component({
  selector: 'app-edit-cartera',
  templateUrl: './edit-cartera.component.html',
  styleUrls: ['./edit-cartera.component.css'],
  providers: [ PeticionesService]
})
export class EditCarteraComponent implements OnInit {
  @ViewChild('name') nameRef:ElementRef;
  public cartera;
  public carteraName;
  public carteraId;
  constructor(
    private _peticionesService: PeticionesService,
    private route: ActivatedRoute,
    public router: Router

  ) { }

  ngOnInit() {
    this.queryCarteraId();
    this.findCartera();
    
    
  }

  queryCarteraId(){
    // console.log('hasdf');
      this.route.params.subscribe(params => {
      this.carteraId=params.name;
      // console.log(this.carteraName+"editcartera");
      // const name=this.nameRef.nativeElement.value;
      
      //     const newCartera=new Cartera(name);
   });

  }
 
  findCartera(){
     this._peticionesService.getCartera(this.carteraId).subscribe(
        result =>{
          this.cartera=result;
          this.carteraName=this.cartera.name;
         
        },
        error =>{
          var errorMessage=<any>error;
          console.log(errorMessage);
        }

     )


  }
  editCartera(){

    // console.log(this.cartera);
    this.cartera.name=this.nameRef.nativeElement.value;
    
    if(this.nameRef.nativeElement.value==''){

      window.alert("Asegurese que todos los campos esten llenos");
    }else{


      this._peticionesService.updateCartera(this.cartera).subscribe(
        result=>{
  
          var res=result;
          console.log(res);
          this.router.navigate(['home/cartera']);
  
        },error=>{
          var errorMessage=<any>error;
          console.log(errorMessage);
        }
      )

    }
   
  }
}

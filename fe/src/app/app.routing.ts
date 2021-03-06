import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import components
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { EventComponent } from './event/event.component';
import { EditPersonComponent } from './event/editPerson/editPerson.component';
import { ReportsComponent } from './reports/reports.component';
import { ReportTrimestralComponent} from './report-trimestral/report-trimestral.component';
import { ReportEventComponent } from './report-event/report-event.component';
import { CarteraComponent } from "./cartera/cartera.component";
import { InfoCarteraComponent } from "./cartera/info-cartera/info-cartera.component";
import { EditCarteraComponent } from "./cartera/edit-cartera/edit-cartera.component";
import { EjecutivoComponent } from "./ejecutivo/ejecutivo.component";
import { EditEjecutivoComponent } from './ejecutivo/edit-ejecutivo/edit-ejecutivo.component';
import { PersonaComponent } from "./event/persona/persona.component";
import { EditComponent } from "./event/persona/edit/edit.component";
import { ImportWhatsNumbersComponent } from "./import-whats-numbers/import-whats-numbers.component";
import { ImportFromExcelComponent } from "./import-from-excel/import-from-excel.component";
import { StatusCreateComponent } from "./status-create/status-create.component";

const appRoutes: Routes = [
   { path: '', component: HomeComponent },//ruta basica
   { path: 'login', component: LoginComponent },
   {
      path: 'home', component: HomeComponent,
      children: [
         { path: 'home', redirectTo: 'home', pathMatch: 'full' },
         { path: 'events', component: EventsComponent },
         { path: 'event/:id', component: EventComponent },
         { path: 'editPerson/:id', component: EditPersonComponent },
         { path: 'reports', component: ReportsComponent },
         { path: 'trimestral', component: ReportTrimestralComponent },
         { path: 'reportEvent/:id', component: ReportEventComponent },
         { path: 'persons', component: PersonaComponent},
         { path: 'persons/edit/:id', component: EditComponent},
         { path: 'cartera', component:CarteraComponent},
         { path: 'cartera/:id',component:InfoCarteraComponent},
         { path: 'cartera/edit/:name',component:EditCarteraComponent},
         { path: 'ejecutivo', component:EjecutivoComponent},
         { path: 'ejecutivo/edit/:active', component:EditEjecutivoComponent},
         { path: 'importNumbers',component:ImportWhatsNumbersComponent},
         { path: 'importFromExcel', component:ImportFromExcelComponent},
         { path: 'import2',component:StatusCreateComponent},
      ]

   },

   //{path: '', component: LoginFormComponent}
   { path: '**', component: HomeComponent }//ruta redir

];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
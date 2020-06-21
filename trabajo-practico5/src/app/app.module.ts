import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Punto1Component } from './components/punto1/punto1.component';
import { Punto2Component } from './components/punto2/punto2.component';
import { FormatoCheckboxPipe } from './pipes/formato-checkbox.pipe';
import { Punto3Component } from './components/punto3/punto3.component';
import { NgxDataTableModule} from "angular-9-datatable";
import { Punto4Component } from './components/punto4/punto4.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    Punto1Component,
    Punto2Component,
    FormatoCheckboxPipe,
    Punto3Component,
    Punto4Component,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxDataTableModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

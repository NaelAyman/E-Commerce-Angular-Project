import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { SharedRoutingModule } from './shared-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './components/header/header.component';
import { LoaderComponent } from './components/loader/loader.component';
import { SelectComponent } from './components/select/select.component';


@NgModule({
  declarations: [
    HeaderComponent,
    LoaderComponent,
    SelectComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    SharedRoutingModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent,
    LoaderComponent,
    SelectComponent
  ]
})
export class SharedModule { }

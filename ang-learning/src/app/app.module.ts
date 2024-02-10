import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { TestCComponent } from './test-c/test-c.component';
import { DemoSvcService } from './demo-svc.service';

@NgModule({
  declarations: [AppComponent, CardComponent, TestCComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [DemoSvcService],
  bootstrap: [AppComponent],
})
export class AppModule {}

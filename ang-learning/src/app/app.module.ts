import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { TestCComponent } from './test-c/test-c.component';
import { DemoSvcService } from './demo-svc.service';
import { DemoPPipe } from './demo-p.pipe';
import { DemoDirDirective } from './demo-dir.directive';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TestCComponent,
    DemoPPipe,
    DemoDirDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [DemoSvcService],
  bootstrap: [AppComponent],
})
export class AppModule {}

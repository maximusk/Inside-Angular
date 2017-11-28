import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { AComponent } from './app/a.component';
import { BComponent } from './app/b.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, AComponent, BComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}

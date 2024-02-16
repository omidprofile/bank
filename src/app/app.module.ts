import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import { AuthComponent } from './auth/auth.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './panel/pages/dashboard/dashboard.component';
import { LoginComponent } from "./auth/login/login.component";
import { HeaderComponent } from './panel/components/header/header.component';
import { SidebarComponent } from './panel/components/sidebar/sidebar.component';
import { CarouselComponent } from './shared/carousel/carousel.component';
import { QuickAccessComponent } from './panel/pages/quick-access/quick-access.component';
import { PersianNumberPipe } from './pipes/persian-number.pipe';
import { NewsComponent } from './panel/pages/news/news.component';
import { NewsInfoComponent } from './panel/pages/news-info/news-info.component';
import { SlicePipe } from './pipes/slice.pipe';
import { RegisterComponent } from './auth/register/register.component';
import { ManagerComponent } from './panel/pages/manager/manager.component';
@NgModule({
	declarations: [
		AppComponent,
		PanelComponent,
		AuthComponent,
		LoginComponent,
		HomeComponent,
		DashboardComponent,
		HeaderComponent,
		ErrorComponent,
		SidebarComponent,
  CarouselComponent,
  QuickAccessComponent,
  PersianNumberPipe,
  NewsComponent,
  NewsInfoComponent,
  SlicePipe,
  RegisterComponent,
  ManagerComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		RouterModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}

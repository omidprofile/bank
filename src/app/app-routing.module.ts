import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from "./auth/auth.component";
import { ErrorComponent } from "./error/error.component";
import { LoginComponent } from "./auth/login/login.component";
import { PanelComponent } from "./panel/panel.component";
import { DashboardComponent } from "./panel/pages/dashboard/dashboard.component";
import { NewsComponent } from "./panel/pages/news/news.component";
import { NewsInfoComponent } from "./panel/pages/news-info/news-info.component";
import {RegisterComponent} from "./auth/register/register.component";
import {ManagerComponent} from "./panel/pages/manager/manager.component";

const routes: Routes = [

	// Home :
	{ path: '', redirectTo: '/panel', pathMatch: 'full' },

	// Auth :
	{
		path: 'auth', component: AuthComponent,
		children: [
			{ path: 'login', component: LoginComponent },
			{ path: 'register', component: RegisterComponent }
		]
	},

	// Panel :
	{
		path: 'panel', component: PanelComponent,
		children: [
			{ path: '', component: DashboardComponent },
			{ path: 'news', component: NewsComponent },
			{ path: 'news/:id', component: NewsInfoComponent },
      { path: 'manager', component: ManagerComponent },
		]
	},

	{ path: '**', component: ErrorComponent, data: { errorCode: 404 } },
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { enableTracing: false })],
	exports: [RouterModule]
})
export class AppRoutingModule {
}

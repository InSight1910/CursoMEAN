import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: 'home',
		loadChildren: () =>
			import('./components/home/home.module').then((m) => m.HomeModule),
	},
	{
		path: 'news',
		loadChildren: () =>
			import('./components/news/news.module').then((m) => m.NewsModule),
	},
	{
		path: 'completeNews',
		loadChildren: () =>
			import('./components/completenews/completenews.module').then(
				(m) => m.CompletenewsModule
			),
	},
	{
		path: 'messages',
		loadChildren: () =>
			import('./components/messages/messages.module').then(
				(m) => m.MessagesModule
			),
	},
	{
		path: 'settings',
		loadChildren: () =>
			import('./components/settings/settings.module').then(
				(m) => m.SettingsModule
			),
	},
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'home',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule],
})
export class AppRoutingModule {}

import { provideRouter, RouterConfig } from '@angular/router';
import { AtrapaloTeamComponent } from './atrapalo-team/atrapalo-team.component';
import { UserProfileComponent } from './user/user-profile.component';

const routes: RouterConfig = [
    { path: '', component: AtrapaloTeamComponent },
    { path: 'user-profile/:id', component: UserProfileComponent }
];

export const appRouterProviders = [
    provideRouter(routes)
];
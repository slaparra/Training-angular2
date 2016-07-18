import { provideRouter, RouterConfig } from '@angular/router';
import { AtrapaloTeamComponent } from './atrapalo-team/atrapalo-team.component';
import { MemberProfileComponent } from './user/user-profile.component';

const routes: RouterConfig = [
    { path: '', component: AtrapaloTeamComponent },
    { path: 'user-profile', component: MemberProfileComponent }
];

export const appRouterProviders = [
    provideRouter(routes)
];
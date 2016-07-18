import { provideRouter, RouterConfig } from '@angular/router';
import { AtrapaloTeamComponent } from './component/atrapalo-team.component';
import { MemberProfileComponent } from './component/user-profile.component';

const routes: RouterConfig = [
    { path: '', component: AtrapaloTeamComponent },
    { path: 'user-profile', component: MemberProfileComponent }
];

export const appRouterProviders = [
    provideRouter(routes)
];
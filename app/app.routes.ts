import {provideRouter, RouterConfig} from '@angular/router';
import {AtrapaloTeamComponent} from './component/atrapalo-team.component';
import {MemberProfileComponent} from './component/member-profile.component';

const routes: RouterConfig = [
    { path: '', component: AtrapaloTeamComponent },
    { path: 'member-profile', component: MemberProfileComponent }
];

export const appRouterProviders = [
    provideRouter(routes)
];
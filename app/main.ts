import {bootstrap}    from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import {appRouterProviders} from './app.routes';
import {HTTP_PROVIDERS} from '@angular/http';
import {UserProvider} from "./user/user.provider";
import {CommitProvider} from "./commit/commit.provider";
import {GitHubUserService} from "./user/github-user.service";
import {GitHubCommitService} from "./commit/github-commit.service";

bootstrap(AppComponent, [CommitProvider, GitHubCommitService, GitHubUserService, UserProvider, appRouterProviders, HTTP_PROVIDERS])
    .catch(err => console.error(err));

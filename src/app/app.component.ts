import { Component, OnInit } from '@angular/core';
import { RepositoriesGithubService } from './repositories-github.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [RepositoriesGithubService]
})
export class AppComponent {
  theme: string;
  iconSmile: string;
  iconSun: string;
  iconMoon: string;
  content: string;
  active: string;
  repositories: any;

  constructor(private repositoriesService: RepositoriesGithubService) {
    this.iconSmile = 'icone de emoji';
    this.iconSun = 'icone do sol';
    this.iconMoon = 'icone da lua';
    this.theme = 'light';
    this.content = `
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
`;
    this.active = 'modules'
  }

  async ngOnInit() {
    this.repositories = await this.repositoriesService.loadRepos();
  }

  handleLike(): void {
    alert('Thank you to like! :)')
  }
  handleDeslike(): void{
    alert('Oh, it´s so bad .. :(')
  }

  changeContent(content: string): void {
    this.active = content
    switch (content) {
      case 'modules':
        this.content = `
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
`;
        break;
      case 'components':
        this.content = `
import { Component } from '@angular/cor
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  theme: string;
  iconSmile: string;
  iconSun: string;
  iconMoon: string;
  content: string;
  active: string;

  constructor() {
    this.iconSmile = 'icone de emoji';
    this.iconSun = 'icone do sol';
    this.iconMoon = 'icone da lua';
    this.theme = 'light';
    this.content = 'código font do módulo';
    this.active = 'modules'
  }

  changeContent(content: string): void {
    this.active = content
    switch (content) {
      case 'modules':
        this.content = 'código font do módulo'
        break;
      case 'components':
        this.content = 'código font do components'
        break;
      case 'services':
        this.content = 'código font do services';
        break;
      default:
        break;
    }
  }
}

html

<div ngClass="container-column {{theme}} moldure">
  <div ngClass="container-row baseline">
    <h3>SPA with Angular</h3>
    <span>{{iconSmile}}</span>
  </div>
  <div ngClass="container-row space-around">
    <button ngClass="button btn-like">Like</button>
    <button ngClass="button btn-deslike">Deslike</button>
    <div ngClass="container-row">
      <span ngClass="icon">{{iconSun}}</span>
      <span ngClass="icon">{{iconMoon}}</span>
    </div>
  </div>
  <div ngClass="container-row">
    <h4>Code</h4>
  </div>
  <div ngClass="container-column">
    <div ngClass="navbar space-around">
      <button ngClass="button nav-item" (click)="changeContent('modules')">Module</button>
      <button ngClass="button nav-item" (click)="changeContent('components')">Components</button>
      <button ngClass="button nav-item" (click)="changeContent('services')">Services</button>
    </div>
    <div ngClass="container-column">
      <div [ngClass]="{'container-row content': true, 'active': active == 'modules'}">
        <pre>
          <code>
            {{content}}
          </code>
        </pre>
      </div>
      <div [ngClass]="{'container-row content': true, 'active': active == 'components'}">
        <pre>
          <code>
            {{content}}
           </code>
        </pre>
      </div>
      <div [ngClass]="{'container-column content': true, 'active': active == 'services'}">
        <h5>List of my repositories</h5>
        <div ngClass="container-column">
          <div *ngFor="let repo of repositories" ngClass="container-row repo">
            {{repo.html_url}}
          </div>
        </div>
        <h5>Code</h5>
        <pre>
          <code>
            {{content}}
           </code>
        </pre>
      </div>
    </div>
  </div>
</div>

css

$light: #f5f5f5;
$dark: #202020;
$primary: #00008b;
$secondary: #b22222;
$shadowDefault: 3px 1px 1px rgba(0, 0, 0, 0.5);

.container-row {
    display: flex;
    flex-direction: row;
}
.container-column {
    display: flex;
    flex-direction: column;
    max-width: 30em;
}
.space-around {
    justify-content: space-around;
}
.button {
    padding: 0.5em;
    border: 0;
    border-radius: 25px;
    flex: 1;
    margin-right: 0.5em;
}
.button:focus {
    outline: 0;
}

.button:hover {
    box-shadow: $shadowDefault;
}
.btn-like {
    background-color: $primary;
    color: $light;
}
.btn-deslike {
    background-color: $secondary;
    color: $light;
}
.icon {
    padding: 0.4em;
    border: 1px solid;
}
.navbar {
    display: flex;
    align-items: center;
    background-color: $light;
    padding: 0.5em;
    box-shadow: $shadowDefault;
    flex: 1;
    border-radius: 10px;
}
.nav-item {
    padding: 1em;
    justify-content: center;
    align-items: center;
    font-weight: bold;

    border: 0;
    flex: 1;
}
.baseline {
    align-items: baseline;
}
.nav-item:hover {
    box-shadow: $shadowDefault;
}
.content {
    display: none;
    font-size: 0.7em;
    color: $dark;
}

.active {
    display: flex;
}

.moldure {
    border: 10px;
    box-shadow: $shadowDefault;
    border-radius: 25px;
    padding: 1em;
}
.repo {
    background-color: $light;
    border-color: #f0f0f0;
    box-shadow: $shadowDefault;
    margin-bottom: 0.5em;
   padding: 0.5em;
}
`
        break;
      case 'services':
        this.content = `
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RepositoriesGithubService {

  constructor(private http: HttpClient) { }
  async loadRepos(): Promise<any> {
    const res = await this.http.get('https://api.github.com/users/endkeyCoder/repos').toPromise();
    return res
  }
}
`;
        break;
      default:
        break;
    }
  }
}

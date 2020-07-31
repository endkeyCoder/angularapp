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

import { GithubApiService} from './GithubApiService';
import { User } from './Uesr';
import { Repo } from './Repo';

let svc = new GithubApiService();
svc.getUserInfo('dhstudents', (user: User) => {
    console.log(user);
});

svc.getRepos('dhstudents', (repos: Repo[]) => {
    console.log(repos);
})
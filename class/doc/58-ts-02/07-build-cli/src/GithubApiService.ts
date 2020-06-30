import * as request from 'request';
import { User } from './Uesr';
import { Repo } from './Repo';

const OPTIONS : any = {
    headers: {
        'User-Agent' : 'request'
    },
    json: true
}



export class GithubApiService {
   //1.  getUserInfo(userName: string) {
    getUserInfo(userName: string , cb: (user : User)  => any ) {
        let uri: string = `https://api.github.com/users/${userName}`;
        //1 . request.get(uri, (response: any) => {
        //2. request.get(uri, (error: any ,res: any , body: any) => {
        request.get(uri,OPTIONS ,(error: any ,res: any , body: any) => {
            // handle the returned data
            //  console.log(error);
            // console.log(res);
            //console.log(body);
           // // let user = new User(JSON.parse(body));
            let user = new User(body);
           //3.  console.log(user);
           cb(user);
        })
    }

    getRepos(userName: string , cb: (repoArray: Repo[]) => any) {
        let uri: string = `https://api.github.com/users/${userName}/repos`;
        request.get(uri,OPTIONS ,(error: any ,res: any , body: any) => {
            let reposArray = body;
            reposArray.map( (repo:any) => new Repo(repo));
            //repos = body.map((repo:any) => new Repo(repo))
           cb(reposArray);

        })

    }
}
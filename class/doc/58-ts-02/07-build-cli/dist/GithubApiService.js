"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var request = __importStar(require("request"));
var Uesr_1 = require("./Uesr");
var Repo_1 = require("./Repo");
var OPTIONS = {
    headers: {
        'User-Agent': 'request'
    },
    json: true
};
var GithubApiService = /** @class */ (function () {
    function GithubApiService() {
    }
    //1.  getUserInfo(userName: string) {
    GithubApiService.prototype.getUserInfo = function (userName, cb) {
        var uri = "https://api.github.com/users/" + userName;
        //1 . request.get(uri, (response: any) => {
        //2. request.get(uri, (error: any ,res: any , body: any) => {
        request.get(uri, OPTIONS, function (error, res, body) {
            // handle the returned data
            //  console.log(error);
            // console.log(res);
            //console.log(body);
            // // let user = new User(JSON.parse(body));
            var user = new Uesr_1.User(body);
            //3.  console.log(user);
            cb(user);
        });
    };
    GithubApiService.prototype.getRepos = function (userName, cb) {
        var uri = "https://api.github.com/users/" + userName + "/repos";
        request.get(uri, OPTIONS, function (error, res, body) {
            var reposArray = body;
            reposArray.map(function (repo) { return new Repo_1.Repo(repo); });
            cb(reposArray);
            //body.map((repo:any) => new Repo(repo))
        });
    };
    return GithubApiService;
}());
exports.GithubApiService = GithubApiService;

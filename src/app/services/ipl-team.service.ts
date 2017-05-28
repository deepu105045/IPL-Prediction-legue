import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';
import { Team } from '../add-team/team';
import { environment } from '../../environments/environment'

@Injectable()
export class IplteamService {
    private  apiUrl = environment.apiUrl;
    private _getUrl: string = this.apiUrl+"/iplteams";
    private _postUrl: string = this.apiUrl+"/iplteam";
    constructor(private __http: Http) { }

    getTeams(): Observable<Team[]> {
        return this.__http.get(this._getUrl)
            .map((response: Response) => {return response.json();})
            .catch(this._errorHandler); 
    }

    addTeam(team: Team): Observable<Team> {
        let headers = new Headers({ 'content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.__http.post(this._postUrl, JSON.stringify(team), options)
            .map((response: Response) => { response.json() })
            .catch(this._errorHandler);
    }

    _errorHandler(error: Response) {
        console.error(error);
        return Observable.throw(error || "Server Error")
    }
}

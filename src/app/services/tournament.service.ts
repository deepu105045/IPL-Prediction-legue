import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';
import { environment } from '../../environments/environment';
import { Tournament } from '../game-scheduler/tournament';

@Injectable()
export class TournamentService {
  private apiUrl = environment.apiUrl;
  private _getUrl: string = this.apiUrl + '/tournaments';
  private _postUrl: string = this.apiUrl + '/tournament';

  constructor(private __http: Http) { }

  getTournaments(){
    return this.__http.get(this._getUrl)
      .map((response: Response) => { return response.json(); })
      .catch(this._errorHandler);

  }

  addTournament(tournament: Tournament): Observable<Tournament> {
    const headers = new Headers({ 'content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.__http.post(this._postUrl, JSON.stringify(tournament), options)
      .map((response: Response) => { response.json(); })
      .catch(this._errorHandler);
  }

  _errorHandler(error: Response) {
    console.error(error);
    return Observable.throw(error || 'Server Error');
  }
}

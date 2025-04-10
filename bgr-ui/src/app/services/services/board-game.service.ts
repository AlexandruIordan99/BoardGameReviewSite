/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { BoardGameResponse } from '../models/board-game-response';
import { findAllBoardGames } from '../fn/board-game/find-all-board-games';
import { FindAllBoardGames$Params } from '../fn/board-game/find-all-board-games';
import { findAllBoardGamesByOwner } from '../fn/board-game/find-all-board-games-by-owner';
import { FindAllBoardGamesByOwner$Params } from '../fn/board-game/find-all-board-games-by-owner';
import { findBoardGameById } from '../fn/board-game/find-board-game-by-id';
import { FindBoardGameById$Params } from '../fn/board-game/find-board-game-by-id';
import { PageResponseBoardGameResponse } from '../models/page-response-board-game-response';
import {saveBoardGame, SaveBoardGame$Params} from '../fn/board-game/save-board-game';
import { updateArchivedStatus } from '../fn/board-game/update-archived-status';
import { UpdateArchivedStatus$Params } from '../fn/board-game/update-archived-status';
import { updateShareableStatus } from '../fn/board-game/update-shareable-status';
import { UpdateShareableStatus$Params } from '../fn/board-game/update-shareable-status';
import { uploadBoardGameSplashArt } from '../fn/board-game/upload-board-game-splash-art';
import { UploadBoardGameSplashArt$Params } from '../fn/board-game/upload-board-game-splash-art';

@Injectable({ providedIn: 'root' })
export class BoardGameService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `findAllBoardGames()` */
  static readonly FindAllBoardGamesPath = '/boardgame';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllBoardGames()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllBoardGames$Response(params?: FindAllBoardGames$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseBoardGameResponse>> {
    return findAllBoardGames(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllBoardGames$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllBoardGames(params?: FindAllBoardGames$Params, context?: HttpContext): Observable<PageResponseBoardGameResponse> {
    return this.findAllBoardGames$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageResponseBoardGameResponse>): PageResponseBoardGameResponse => r.body)
    );
  }

  /** Path part for operation `saveBoardGame()` */
  static readonly SaveBoardGamePath = '/boardgame';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveBoardGame()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveBoardGame$Response(params: SaveBoardGame$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return saveBoardGame(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveBoardGame$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveBoardGame(params: SaveBoardGame$Params, context?: HttpContext): Observable<number> {
    return this.saveBoardGame$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `updateShareableStatus()` */
  static readonly UpdateShareableStatusPath = '/boardgame/shareable/{boardgame-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateShareableStatus()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateShareableStatus$Response(params: UpdateShareableStatus$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return updateShareableStatus(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateShareableStatus$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateShareableStatus(params: UpdateShareableStatus$Params, context?: HttpContext): Observable<number> {
    return this.updateShareableStatus$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `uploadBoardGameSplashArt()` */
  static readonly UploadBoardGameSplashArtPath = '/boardgame/cover/{boardgame-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uploadBoardGameSplashArt()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadBoardGameSplashArt$Response(params: UploadBoardGameSplashArt$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return uploadBoardGameSplashArt(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `uploadBoardGameSplashArt$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadBoardGameSplashArt(params: UploadBoardGameSplashArt$Params, context?: HttpContext): Observable<{
}> {
    return this.uploadBoardGameSplashArt$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `updateArchivedStatus()` */
  static readonly UpdateArchivedStatusPath = '/boardgame/archived/{boardgame-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateArchivedStatus()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateArchivedStatus$Response(params: UpdateArchivedStatus$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return updateArchivedStatus(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateArchivedStatus$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateArchivedStatus(params: UpdateArchivedStatus$Params, context?: HttpContext): Observable<number> {
    return this.updateArchivedStatus$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `findBoardGameById()` */
  static readonly FindBoardGameByIdPath = '/boardgame/{boardgame-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findBoardGameById()` instead.
   *
   * This method doesn't expect any request body.
   */
  findBoardGameById$Response(params: FindBoardGameById$Params, context?: HttpContext): Observable<StrictHttpResponse<BoardGameResponse>> {
    return findBoardGameById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findBoardGameById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findBoardGameById(params: { 'boardgame-id': any }, context?: HttpContext): Observable<BoardGameResponse> {
    return this.findBoardGameById$Response(params, context).pipe(
      map((r: StrictHttpResponse<BoardGameResponse>): BoardGameResponse => r.body)
    );
  }

  /** Path part for operation `findAllBoardGamesByOwner()` */
  static readonly FindAllBoardGamesByOwnerPath = '/boardgame/owner';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllBoardGamesByOwner()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllBoardGamesByOwner$Response(params?: FindAllBoardGamesByOwner$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseBoardGameResponse>> {
    return findAllBoardGamesByOwner(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllBoardGamesByOwner$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllBoardGamesByOwner(params?: FindAllBoardGamesByOwner$Params, context?: HttpContext): Observable<PageResponseBoardGameResponse> {
    return this.findAllBoardGamesByOwner$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageResponseBoardGameResponse>): PageResponseBoardGameResponse => r.body)
    );
  }


  addBoardGameToWishlist(param: {'boardGame-id': number}) {

  }
}

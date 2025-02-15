import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from './pages/main/main.component';
import {MyBoardGamesComponent} from './pages/my-board-games/my-board-games.component';
import {ManageBoardGamesComponent} from './pages/manage-board-games/manage-board-games.component';
import {BoardGameDetailsComponent} from './pages/board-game-details/board-game-details.component';
import {BoardGameListComponent} from './pages/board-game-list/board-game-list.component';
import {authGuard} from '../../services/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        component: BoardGameListComponent,
        canActivate: [authGuard],
      },
      {
        path: 'my-collection',
        component: MyBoardGamesComponent,
      },
      {
        path: 'details/:bookId',
        component: BoardGameDetailsComponent,
      },
      {
        path: 'manage',
        component: ManageBoardGamesComponent,
      },
      {
        path: 'manage/:bookId',
        component: ManageBoardGamesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardGameRoutingModule { }

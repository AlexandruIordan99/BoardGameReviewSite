import { Component } from '@angular/core';
import {PageResponseBoardGameResponse} from '../../../../services/models/page-response-board-game-response';
import {BoardGameService} from '../../../../services/services/board-game.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-wishlist',
  standalone: false,

  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent {

  page = 0;
  size = 5;
  pages: any=[]
  BoardGameResponse: PageResponseBoardGameResponse = {};

  constructor (
    private boardGameService: BoardGameService,
    private router: Router,
  ){
  }

  ngOnInit(): void {
    this.findAllBoardGames();
  }

  private findAllBoardGames(){
    this.boardGameService.findAllBoardGames({
      page: this.page,
      size:this.size
    }).subscribe({
      next: (boardGames): void =>{
        this.BoardGameResponse = boardGames;

        this.pages = Array(this.BoardGameResponse.totalPages)
          .fill(0)
          .map((x, i) => i);
      },

      error:  (err) => {
        console.error("Error grabbing board games", err)
      }
    })
  }


  goToFirstPage() {
    this.page = 0;
    this.findAllBoardGames();
  }

  goToPreviousPage() {
    this.page--;
    this.findAllBoardGames();
  }

  goToPage(page: number) {
    this.page = page;
    this.findAllBoardGames();
  }

  goToNextPage() {
    this.page++;
    this.findAllBoardGames();
  }

  goToLastPage() {
    this.page = this.BoardGameResponse.totalPages as number -1;
    this.findAllBoardGames();
  }

  get isLastPage(): boolean {
    return this.page==this.BoardGameResponse.totalPages as number -1;
  }

}

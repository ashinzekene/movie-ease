import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Content, Slides } from 'ionic-angular';
import { MoviesStorage } from '../../providers/storage/movies-storage'
import { MoviesApi } from "../../providers/api/movies-api";

@IonicPage({
  segment: "/"
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {
  @ViewChild(Content) content: Content;
  @ViewChild(Slides) slides: Slides;
  public contentWidth;
  private _pageNo: number = 1;
  // private slideIndex=0;
  public slidesPerPage;
  public upcomingMovies= [];
  
  constructor(public navCtrl: NavController, public store: MoviesStorage, public movies: MoviesApi) {
    this.getUpcomingMovies();
  }
  goToDetailsPage(movie) {
    this.navCtrl.push('MovieDetails', {id: movie.id, data: movie})
  }
  loadUpcoming() {
    this.movies.upcoming(this._pageNo).subscribe(res => {
      if (this._pageNo === 1) this.upcomingMovies = res.results;
      else this.upcomingMovies = this.upcomingMovies.concat(res.results)
      this._pageNo++
    });

  }
  getUpcomingMovies() {
    this.store.getUpcoming().then(res=> {
      this.upcomingMovies = res.results;
      console.log("On page", res)
    })
  }
  changeSlide(sym) {
    sym === "+"? this.slides.slideNext(): this.slides.slidePrev();
  }
  search() {
    this.navCtrl.push("Search")
  }
  doRefresh(refresher) {
    //this.ionViewDidLoad()
  }
  slideChange(e) {
    // this.slideIndex = this.slides.getActiveIndex()
    let slidesRemaining = this.slides.length() - this.slides.getActiveIndex()
    let scrollForward = this.slides.getActiveIndex() > this.slides.getPreviousIndex()
    if(slidesRemaining === 3 && scrollForward) {
      this.loadUpcoming()
    }
  }
  ionViewDidLoad() {
    // this.slides.slideTo(this.slideIndex || 0)
    let width = this.content.getContentDimensions().contentWidth;
    if (width <= 420) {
      console.log("Small screen")
      this.slidesPerPage =1
    } else if ( width <= 530) {
      console.log("Tablet")
      this.slidesPerPage=2
    } else if ( width <= 650) {
      console.log("Tablet")
      this.slidesPerPage=3
    } else if ( width > 770) {
      console.log("Big screen")
      this.slidesPerPage=4
    } else {
      console.log("Cannot get Screen size")
      this.slidesPerPage=2
    }
  }
}

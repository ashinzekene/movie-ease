import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Content, Slides } from 'ionic-angular';
import { Storage } from '@ionic/storage'
import { MoviesApi } from "../../providers/movies-api";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {
  @ViewChild(Content) content: Content;
  @ViewChild(Slides) slides: Slides;
  public contentWidth;
  public slidesPerPage;
  public upcomingMovies= [];
  
  getUpcomingMovies() {
    this.movies.upcoming(1).subscribe(res => {
      this.upcomingMovies= this.upcomingMovies.concat(res.results);
      console.log(res)
    })
  }
  changeSlide(sym) {
    sym === "+"? this.slides.slideNext(): this.slides.slidePrev();
  }
  search() {
    this.navCtrl.push("Search")
  }
  slideChange(e) {
    let slidesLeft = this.slides.length() - this.slides.getActiveIndex()
    console.log(this.slides.getActiveIndex())
    if(slidesLeft <= 5) {
      this.movies.upcoming(2).subscribe(res => {
        this.upcomingMovies = this.upcomingMovies.concat(res.results)
      })
    }      
  }
  constructor(public navCtrl: NavController, public storage: Storage, public movies: MoviesApi) {
    this.getUpcomingMovies();
  }
  ionViewDidLoad() {
    let width = this.content.getContentDimensions().contentWidth;
    if (width <= 420) {
      console.log("Small screen")
      this.slidesPerPage =1
    } else if ( width <= 770) {
      console.log("Tablet")
      this.slidesPerPage=2
    } else if ( width > 770) {
      console.log("Big screen")
      this.slidesPerPage=3
    } else {
      console.log("Cannot get Screen size")
      this.slidesPerPage=2
    }

  }
}

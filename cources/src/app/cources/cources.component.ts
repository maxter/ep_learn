import { Component, OnInit } from '@angular/core';
import { ICourceItem } from '../icourceitem';
import { CourceItem } from '../cource-item';
import { OrderByPipe } from '../orderby.pipe';
import { SearchPipe } from '../search.pipe';
import { CourcesService } from '../cources.service';
import { Subscription } from 'rxjs';
import { Router } from "@angular/router"
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cources',
  templateUrl: './cources.component.html',
  styleUrls: ['./cources.component.css'],
  providers: [CourcesService]
})
export class CourcesComponent implements OnInit {

  filterargs = { Title: 'test' };
  searchText = "";
  cources: ICourceItem[] = [];
  private sub: Subscription;
  private id: number;

  private start: number;
  private count: number;
  private isFirstPage: boolean;
  private isLastPage: boolean;

  constructor(private courcesService: CourcesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      console.log(params);
      this.id = +params['id'];
      this.reload();
    });

    this.route.queryParams.subscribe(params => {
      this.start = params.start;
      this.count = params.count;
      this.reload();
      console.log("new params! start:" + this.start + "count:" + this.count);
    });

    this.logIt(`OnInit`);
  }

  reload() {
    if (this.id > 0)
      this.cources.push(this.courcesService.getCourceById(this.id));
    else {
      if (this.start && this.count)
        this.cources = this.courcesService.getCourcePage(this.start, this.count);
      else
      this.courcesService.getObservableCources().subscribe(cources => {
          this.cources = cources as ICourceItem[]
      })
    }

    if (this.start == 1)
      this.isFirstPage = true
    else
      this.isFirstPage = false;

    if (Number(this.start) === this.courcesService.getSize())
      this.isLastPage = true
    else
      this.isLastPage = false;
  }

  ngOnChanges() {
    //this.logIt(`ngOnChanges`);
  }

  ngDoCheck() {
    //this.logIt(`ngDoCheck`);
  }

  ngAfterContentInit() {
    //this.logIt(`ngAfterContentInit`);
  }

  ngAfterContentChecked() {
    //this.logIt(`ngAfterContentChecked`);
  }

  ngAfterViewInit() {
    //this.logIt(`ngAfterViewInit`);
  }

  ngAfterViewChecked() {
    //this.logIt(`ngAfterViewChecked`);
  }

  ngOnDestroy() {
    //this.logIt(`ngOnDestroy`);
  }

  logIt(msg: string) {
    console.log(msg);
  }

  deleteCource(courceId: number) {
    console.log(`deleting cource with ID ${courceId}`)
    this.courcesService.removeCource(courceId);
  }

  search(search: string) {
    this.searchText = search;
    console.log(`searching cource ${search}`)
  //  this.cources = this.courcesService.findCources(this.searchText);


    this.courcesService.findCources(this.searchText).subscribe(cources => {
      this.cources = cources as ICourceItem[]
  })

    
  }

  goNextPage() {
    if (this.start && this.count) {
      this.router.navigate(['/cources'], { queryParams: { 'start': Number(this.start) + 1, 'count': 1 } });
    }
  }

  goPrevPage() {
    if (this.start && this.count) {
      this.router.navigate(['/cources'], { queryParams: { 'start': Number(this.start) - 1, 'count': 1 } });
    }
  }

}


//this.router.navigate(['/products'], { queryParams: { order: 'popular', 'price-range': 'not-cheap' } });
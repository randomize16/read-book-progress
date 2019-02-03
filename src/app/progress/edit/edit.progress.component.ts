import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl, AbstractControl} from '@angular/forms';
import {ActivatedRoute, Router, Params} from '@angular/router';
import {AppState} from '../../app.state';
import {Store} from '@ngrx/store';
import {Author} from '../../authors/author.model';
import {ProgressItem, Quarter, Source} from '../progress.model';
import {AddProgressAction, UpdateProgressAction} from '../store/progress.actions';
import {debounceTime, filter, first, map, startWith, switchMap, tap} from 'rxjs/operators';
import {Subscription, Observable} from 'rxjs';

@Component({
  selector: 'app-edit.progress',
  templateUrl: './edit.progress.component.html',
  styleUrls: ['./edit.progress.component.less']
})
export class EditProgressComponent implements OnInit, OnDestroy {

  private id: number;
  private editMode: boolean;
  private routeSubscribe: Subscription;

  authors: Observable<any[]> = this.store.select('author').pipe(map(item => item.authors));
  genres: Observable<{genre: string}[]> = this.store.select('genres').pipe(map(item => item.genres));

  filteredGenres: Observable<{genre: string}[]>;
  filteredAuthors: Observable<Author[]>;

  genresControl: AbstractControl;
  authorControl: AbstractControl;



  sources = Object.entries(Source).map(value => {
    return {key: value[1], value: value[0]};
  });
  quarters = Object.entries(Quarter).map(value => {
    return {key: value[1], value: value[0]};
  });

  months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  editProgressForm: FormGroup = this.fb.group({
    name: [null, Validators.required],
    author: null,
    genres: null,
    source: null,
    year: [null, Validators.compose([Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)])],
    quarter: null,
    month: [null, Validators.compose([Validators.min(1), Validators.max(12)])],
    isComics: null,
    isSeries: null,
    rating: null,
    isFinish: null,
    comments: null,
  });

  constructor(private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder,
              private store: Store<AppState>) { }

  ngOnInit() {
    this.routeSubscribe = this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] !== 'new';
      if (this.editMode) {
        this.store.select('progress').pipe(
          first(),
          map(state => state.progressItemList)
        ).subscribe(progressList => {
          this.editProgressForm.setValue(progressList[this.id]);
        });
      }
    });
    this.genresControl = this.editProgressForm.get('genres');
    this.authorControl = this.editProgressForm.get('author');
    this.filteredGenres = this.genresControl.valueChanges
      .pipe(
        debounceTime(500),
        startWith(this.genresControl.value),
        switchMap(filteredValue => {
          return this.genres
            .pipe(
              map(genres => {
                  return genres.filter(genre => genre.genre.toLowerCase().includes(filteredValue.toLowerCase()));
                }
              )
            );
        })
      );

    this.filteredAuthors = this.authorControl.valueChanges
      .pipe(
        debounceTime(500),
        startWith(this.authorControl.value),
        switchMap(filteredValue => {
          return this.authors
            .pipe(
              map(authors => {
                  return authors.filter(author => author.fullName.toLowerCase().includes(filteredValue.toLowerCase()));
                }
              )
            );
        })
      );
  }

  ngOnDestroy(): void {
    this.routeSubscribe.unsubscribe();
  }

  saveProgress() {
    this.router.navigate(['../']);
    if (this.editMode) {
      this.store.dispatch(new UpdateProgressAction({index: this.id, progressItem: this.editProgressForm.value}));
    } else {
      this.store.dispatch(new AddProgressAction(this.editProgressForm.value));

    }
  }
}

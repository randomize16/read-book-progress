import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute, Router, Params} from '@angular/router';
import {AppState} from '../../app.state';
import {Store} from '@ngrx/store';
import {ProgressItem, Quarter, Source} from '../progress.model';
import {AddProgressAction, UpdateProgressAction} from '../store/progress.actions';
import {first, map} from 'rxjs/operators';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-edit.progress',
  templateUrl: './edit.progress.component.html',
  styleUrls: ['./edit.progress.component.less']
})
export class EditProgressComponent implements OnInit, OnDestroy {

  private id: number;
  private editMode: boolean;
  private routeSubscribe: Subscription;
  sources = Object.entries(Source).map(value => {
    return {key: value[1], value: value[0]};
  });
  quarters = Object.entries(Quarter).map(value => {
    return {key: value[1], value: value[0]};
  });

  editProgressForm: FormGroup = this.fb.group({
    name: [null, Validators.required],
    author: null,
    source: null,
    year: null,
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
      this.id = params['id'];
      this.editMode = params['id'] === 'new';
      this.store.select('progress').pipe(
        first(),
        map(state => state.progressItemList)
      ).subscribe(progressList => {
        this.editProgressForm.setValue(progressList[this.id]);
      });
    });
    console.log(this.sources);
  }

  ngOnDestroy(): void {
    this.routeSubscribe.unsubscribe();
  }

  saveProgress() {
    this.router.navigate(['../']);
    this.store.dispatch(new UpdateProgressAction({index: this.id, progressItem: this.editProgressForm.value}));
  }
}

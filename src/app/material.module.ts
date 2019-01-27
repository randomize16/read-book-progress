import {NgModule} from '@angular/core';
import {MatSidenavModule, MatButtonModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatCardModule, MatSelectModule,
  MatIconModule,
  MatListModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule} from '@angular/material';

@NgModule({
  imports: [
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  exports: [
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})

export class MaterialModule {
}

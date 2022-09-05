import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-save-load-query',
  templateUrl: './save-load-query.component.html',
  styleUrls: ['./save-load-query.component.css']
})
export class SaveLoadQueryComponent implements OnInit {

  // https://www.youtube.com/watch?v=I317BhehZKM&t=214s PARRENT to CHILD with @Input()
  @Input() saveQuery: string = '';

  savedQueries$: Observable<{ Queries: string[]; }> | undefined ;
  
  constructor(private store: Store<{ selectQueryReducer: { Queries: string[]; } }>) { }

  ngOnInit(): void {
  //  i will initialice the saved queries in ngOnInit
  this.savedQueries$ = this.store.select('selectQueryReducer');
  }

  onSaveQuery() {
    console.log( `%c clicked SAVE`, 'color: blue' )
    console.log( `%c ${this.saveQuery}`, 'color: blue; font-weight: bold' ) // saveQuery
    this.store.dispatch({type: 'SAVE'})
  }

}


/* I have two errors when using store funciton...


SOLVED BY: <li *ngFor="let temp of (savedQueries$ | async)?.Queries; index as i"> {{i+1}} - {{temp}}  </li>
 

1) in  save-load-query.component.ts
 savedQueries: Observable<{ Queries: Query[]; }> //| undefined ;
Property 'savedQueries' has no initializer and is not definitely assigned in the constructor.ts(2564
>>> can be solved by adding | undefined ;


2) save-load-query.component.html

<ul *ngIf="savedQueries !== undefined" class="bg-slate-200 p-2"> 
    <li *ngFor="let temp of (savedQueries | async).Queries; index as i"> {{i+1}} - {{temp}}  </li>
  </ul>

Object is possibly 'null'.ngtsc(2531)
save-load-query.component.ts(8, 33): Error occurs in the template of component SaveLoadQueryComponent. 

 >> I was trying to manage this by *ngIf="savedQueries !== undefined"

*/
import { map } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {
  isAuth = false;
  authSubscription: Subscription;

  // @Output() sidenavClose = new EventEmitter(); TODO for Prod

  // responsive ref: 'ai-clien2020-rev3' good for prod
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private authService: AuthService) { }

  // Auth ref: 'my-fitness' TODO update to OAuth 2.0 for prod
  ngOnInit() {
    this.AuthSubscription();
  }

  Logout() {
    this.authService.logout();
  }

  // Auth ref: 'my-fitness' TODO update to OAuth 2.0 for prod
  AuthSubscription() {
    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    });
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-details',
  imports: [CommonModule, RouterModule],
  templateUrl: './user-details.component.html',
  standalone: true,    
})
export class UserDetailsComponent implements OnInit, OnDestroy {
  user: User | null = null;
  objectKeys = Object.keys;
  getUserSubscription$!: Subscription;

  constructor(private route: ActivatedRoute, private userService: UserService) {}

  ngOnInit(): void {
    const index = Number(this.route.snapshot.paramMap.get('id') ?? -1);

    if (index >= 0) {
      this.getUserSubscription$ = this.userService.getUsers().subscribe({
        next: (users) => {
          this.user = users[index] || null;
        },
        error: (err) => {
          console.error('Failed to load user details', err);
        },
      });
    }
  }

  ngOnDestroy(): void {
    if (this.getUserSubscription$) {
      this.getUserSubscription$.unsubscribe();
    }
  }
}

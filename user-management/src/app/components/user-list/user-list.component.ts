import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './user-list.component.html',
  standalone: true,
})
export class UserListComponent implements OnInit, OnDestroy {
  users: User[] = [];
  headers: string[] = [];
  editingRows = new Set<number>();
  getUserSubscription$!: Subscription;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.getUserSubscription$ = this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        if (this.users.length > 0) {
          this.headers = Object.keys(this.users[0]);
        }
      },
      error: (err) => {
        console.error('Failed to load users', err);
      },
    });
  }


  toggleEdit(index: number): void {
    if (this.editingRows.has(index)) {
      this.editingRows.delete(index);
    } else {
      this.editingRows.add(index);
    }
  }

  isRowInEdit(index: number): boolean {
    return this.editingRows.has(index);
  }

  goToDetails(index: number): void {
    if (!this.isRowInEdit(index)) {
      this.router.navigate(['/users', index]);
    }
  }

  ngOnDestroy(): void {
    if (this.getUserSubscription$) {
      this.getUserSubscription$.unsubscribe();
    }
  }
}

# 📋 User Management App

This is a simple **Angular standalone component-based User Management App** that displays a list of users, allows inline editing, and shows detailed information for each user.

---

## 🚀 Features

- ✅ Display a **list of users** in a styled table.  
- ✅ **Inline editing** for user fields (except `id`).  
- ✅ Clickable rows to view **user details** in a card layout.  
- ✅ Responsive **Bootstrap 5 styling**.  
- ✅ Angular **standalone components** (no `NgModule`).  
- ✅ Clean subscription handling with `OnDestroy`.  

---

## 🛠️ Tech Stack

- **Angular 18+** (standalone components)  
- **Bootstrap 5** for styling  
- **RxJS** for subscriptions  
- **TypeScript** for type safety  

---

## 📂 Project Structure
src
/models
user.model.ts # User interface definition
/services
user.service.ts # Service for fetching user data

/app/components/
user-list/
user-list.component.ts # User List logic
user-list.component.html # User List template
user-details/
user-details.component.ts # User Details logic
user-details.component.html # User Details template

---

## ⚙️ Installation & Setup

1. Clone the repository:
   git clone https://github.com/Sachin-Oj/UserManagementApp/tree/main
   cd user-management

Install dependencies:
npm install

Run the app:
ng s --o

📖 Usage
Navigate to /users → view user list.
Click Edit → modify fields (except id).
Click Save → exit edit mode.
Click on any row → navigate to /users/:id and view user details.
Use Back button in User Details to return to list.


Improvements / TODO
🔄 Connect with real API (currently mocked service).
🗑️ Add delete functionality.
➕ Add create new user form.
✅ Unit tests & e2e tests.

👤 Author
Sachin Ojha

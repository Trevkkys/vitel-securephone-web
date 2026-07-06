# VITEL SECUREPHONE DEVELOPER HANDBOOK

---

# Project

**Name**

Vitel SecurePhone

**Frontend Stack**

* React
* TypeScript
* React Router
* CSS Modules
* Vite

---

# Project Purpose

Vitel SecurePhone is a multi-tenant enterprise platform used to manage stolen device investigations, tracking operations, recoveries, insurance claims, organizational administration, reporting and monitoring.

The platform supports multiple organizations while sharing a single codebase.

---

# Supported Portals

## Super Administrator

Responsible for platform-wide administration.

Modules

* Dashboard
* Organizations
* Cases
* Devices
* Analytics
* Audit Logs
* Reports
* Settings

---

## Police Portal

Modules

* Dashboard
* Cases
* Tracking

  * Live Tracking
  * Geo-Fencing
  * X-TRAC
  * MSISDN Tracking
* Recoveries
* Users
* Roles & Permissions
* Reports
* Settings

---

## Insurance Portal

Modules

* Dashboard
* Claims
* Recoveries
* Users
* Roles & Permissions
* Reports
* Settings

---

## Vitel Operations

Modules

* Dashboard
* Customers
* Devices
* Monitoring
* Support
* Users
* Roles
* Reports
* Settings

---

# Folder Structure

src/

assets/

components/

common/

layout/

ui/

config/

features/

layouts/

routes/

styles/

utils/

---

# Components

Common Components

* PageHeader
* SummaryCard
* OrganizationHeader

Layout Components

* Header
* Sidebar

UI Components

* Button
* Modal
* Toggle
* Input
* ActionMenu

---

# Configuration Files

navigation.ts

Controls sidebar navigation.

Never hardcode sidebar items inside components.

---

portals.ts

Defines portal types.

---

devPortal.ts

Used only for development.

Will eventually be removed when backend authentication becomes active.

---

demoUsers.ts

Stores demo login accounts.

Will later be replaced with backend authentication.

---

organizations.ts

Single source of truth for organizations.

Stores

* id
* name
* type
* administrator
* enabled modules
* portal
* status

Organization pages should always use this configuration.

---

# Utility Files

currentUser.ts

Returns the currently logged in user from Local Storage.

This is now the application's authentication source until backend integration.

---

getOrganization.ts

Returns organization information from organizations.ts.

Organization pages should never hardcode organization information.

---

# Routing

/

Login

/dashboard

Dashboard

/dashboard/cases

Cases

/dashboard/devices

Devices

/dashboard/organizations

Organizations

/dashboard/organizations/:organizationId

Overview

/dashboard/organizations/:organizationId/modules

Modules

/dashboard/organizations/:organizationId/administrator

Administrator

/dashboard/organizations/:organizationId/activity

Activity

Additional routes follow the same structure.

---

# Current Authentication Flow

Login

↓

demoUsers.ts

↓

Local Storage

↓

currentUser.ts

↓

Header

↓

Sidebar

↓

Dashboard

↓

Portal Pages

Future Flow

Backend API

↓

JWT

↓

Refresh Token

↓

Axios

↓

Protected Routes

↓

Application

---

# Current Dynamic Features

Completed

✓ Dynamic Login

✓ Dynamic Sidebar

✓ Dynamic Header

✓ Dynamic Dashboard

✓ Dynamic Cases

✓ Dynamic Organizations

✓ Organization Overview

✓ Organization Modules

✓ Organization Administrator

✓ Organization Activity

✓ Audit Logs

✓ Reports

✓ Dark Mode

✓ Logout

✓ Vercel Deployment

---

# Coding Standards

Always prefer configuration over hardcoded values.

Pages should remain lightweight.

Business logic belongs inside utils or config.

Reusable components should be preferred over duplication.

Never rename files without a good reason.

Avoid unnecessary UI modifications across multiple files.

Maintain CSS Modules.

Keep architecture scalable for backend integration.

---

# Backend Integration Plan

Authentication

↓

Axios Client

↓

API Service Layer

↓

Hooks

↓

Pages

↓

Reusable Components

↓

Production

---

# Pending Tasks

Immediate

* Backend authentication
* JWT implementation
* Axios configuration
* Protected routes
* Audit log backend
* Reports backend
* Organization CRUD
* Device CRUD
* Case CRUD

Future

* Notifications
* Real-time tracking
* WebSocket support
* File uploads
* Search APIs
* Pagination
* Server-side filtering

---

# Deployment

Development

npm run dev

Production

npm run build

Deployment

git add .

git commit -m "message"

git push

Vercel automatically deploys the latest version.

---

# Useful Git Commands

git status

git add .

git commit -m ""

git push

git pull

git checkout branch-name

---

# Useful VS Code Shortcuts

Ctrl + Shift + P

Open Command Palette

Ctrl + P

Quick File Search

Alt + Shift + F

Format Document

Ctrl + /

Toggle Comment

F2

Rename Symbol

---

# Project Philosophy

The frontend is intentionally designed to remain independent from backend implementation during early development.

All portal behavior, navigation, organization information and authentication are configuration-driven to minimize future refactoring.

The architecture favors scalability, maintainability and reusable components over quick hardcoded solutions.

---

# Lessons Learned

* Configuration-driven architecture is easier to maintain than hardcoded values.
* Shared reusable components significantly reduce duplication.
* Centralized utilities simplify future backend integration.
* Dark Mode should be handled globally.
* Organization information should never be duplicated.
* Documentation is part of the software, not an afterthought.

---

# Maintainer

Martin Mek

Frontend Developer

Vitel SecurePhone

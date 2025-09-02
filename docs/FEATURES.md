### Proposed feature roadmap (by category)

- **Core product**
  - Groups: create/join/leave, invite members, member roles
  - Expenses: add/edit/delete expenses with equal/share/percentage splits
  - Balances: per-user and per-group balances, settle-up flows
  - Multi-currency: per-expense currency with FX rate conversion
  - Attachments: receipt images with optional OCR
  - Export/share: CSV/PDF summaries and share sheets

- **UI/UX**
  - Design system with NativeWind: colors, spacing, typography scale, components
  - Dark mode polishing and theme tokens; consistent theming across screens
  - Empty states, loading skeletons, toasts/snackbars, error banners
  - Pull-to-refresh, swipe gestures for list items (edit/delete)

- **Navigation**
  - Screens: Group List, Group Detail, New Expense, Settle Up, Profile, Settings
  - Deep linking/URL schemes for groups and invites

- **State management**
  - Client state with Zustand or Redux Toolkit
  - Server/cache state with React Query (TanStack Query)

- **Data layer**
  - Local persistence via AsyncStorage or SQLite
  - Cloud sync (Supabase/Firebase) with auth-bound user data

- **Authentication**
  - Email/password and OAuth (Google/Apple) via Expo AuthSession or Supabase Auth

- **Networking**
  - API client (axios/fetch) with interceptors, auth headers, retries, error mapping

- **Notifications**
  - Push notifications (Expo Notifications) for invites, new expenses, settlements

- **Offline-first**
  - Optimistic updates, action queue, conflict resolution on sync

- **Testing**
  - Unit/component tests (Jest + React Native Testing Library)
  - E2E tests (Detox)

- **CI/CD**
  - GitHub Actions for lint/test/typecheck; EAS build/update previews

- **Accessibility**
  - A11y roles/labels, color contrast checks, dynamic type/font scaling

- **Internationalization**
  - i18next with language switcher and translation resources

- **Analytics & crash reporting**
  - Analytics (PostHog/Amplitude) and Sentry for errors

- **Quality & DX**
  - ESLint + Prettier + TypeScript strict; Husky pre-commit hooks


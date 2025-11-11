# Story 2.2: User Profile Display Component

Status: drafted

## Story

As a user,
I want to see my profile information on the dashboard,
So that I can confirm my identity and session status.

## Acceptance Criteria

1. Given I am authenticated and on the dashboard, when the dashboard loads, then I see my profile picture/avatar
2. Given I am authenticated and on the dashboard, when the dashboard loads, then my name is displayed prominently
3. Given I am authenticated and on the dashboard, when the dashboard loads, then my email address is shown
4. Given I am authenticated and on the dashboard, when the dashboard loads, then the information matches the mock user data

## Tasks / Subtasks

- [ ] Create UserProfile component (AC: 1-4)
  - [ ] Create `components/auth/UserProfile.tsx` component
  - [ ] Implement avatar display with fallback handling
  - [ ] Add user name and email display
  - [ ] Style profile information professionally
- [ ] Integrate with NextAuth session data (AC: 2-4)
  - [ ] Use useSession() hook to access user data
  - [ ] Handle loading states for session data
  - [ ] Validate data matches mock user profile
- [ ] Add profile to dashboard layout (AC: 1-4)
  - [ ] Integrate UserProfile component in dashboard
  - [ ] Position profile information prominently
  - [ ] Ensure responsive design for profile display

## Dev Notes

### Component Architecture
- Reusable UserProfile component in `components/auth/`
- Integration with NextAuth session data
- Professional styling with Tailwind CSS
- Support for missing profile images with fallbacks

### Session Data Integration
- Use NextAuth useSession() hook for real-time session data
- Handle loading and error states gracefully
- Display mock user data: "Demo User", "demo@example.com"
- Avatar image from UI avatar service or placeholder

### Visual Design Requirements
- Clean, professional profile display
- Consistent with Google's profile card design patterns
- Proper spacing and typography hierarchy
- Mobile-responsive layout considerations

### Technical Implementation
- TypeScript interfaces for user data
- Proper error handling for missing profile data
- Accessibility features for screen readers
- Loading states during session data fetch

### References
- [Source: ../architecture.md#Authentication-Components](../architecture.md#authentication-components)
- [Source: ../architecture.md#User-Profile-Component](../architecture.md#user-profile-component)
- [Source: ../PRD.md#User-Information-Display](../PRD.md#user-information-display)
- Previous Stories: [2-1-dashboard-layout-and-route-protection.md](./2-1-dashboard-layout-and-route-protection.md)

## Dev Agent Record

### Context Reference

<!-- Path(s) to story context XML will be added here by context workflow -->

### Agent Model Used

Claude Sonnet 4.5 (claude-sonnet-4-5-20250929)

### Debug Log References

### Completion Notes List

### File List
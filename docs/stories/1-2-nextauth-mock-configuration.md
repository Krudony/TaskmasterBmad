# Story 1.2: NextAuth Mock Configuration

Status: completed

## Story

As a developer,
I want to configure NextAuth.js with mock Google provider,
So that I can simulate Google OAuth without real credentials.

## Acceptance Criteria

1. Given the project structure is set up, when I configure NextAuth.js, then a mock Google provider is configured with sample user data
2. Given the project structure is set up, when I configure NextAuth.js, then authentication API routes are properly set up
3. Given the project structure is set up, when I configure NextAuth.js, then session management is configured with appropriate settings

## Tasks / Subtasks

- [x] Create NextAuth configuration file (AC: 1, 3)
  - [x] Create `lib/auth.ts` with NextAuth configuration
  - [x] Configure mock Google provider with sample user data
  - [x] Set session strategy to JWT with 24-hour timeout
- [x] Set up authentication API routes (AC: 2)
  - [x] Create `app/api/auth/[...nextauth]/route.ts`
  - [x] Configure route handler for NextAuth
  - [x] Test API route accessibility
- [x] Configure mock user profile data (AC: 1)
  - [x] Define mock user: Demo User, demo@example.com
  - [x] Set up placeholder avatar image
  - [x] Configure profile data structure

## Dev Notes

### Architecture Alignment
- Follow NextAuth configuration patterns from [architecture.md](../architecture.md)
- Use JWT session strategy as specified in security architecture
- Mock provider should simulate Google OAuth flow realistically

### Technical Implementation
- Mock Google provider configuration in `lib/auth.ts`
- API route structure follows Next.js 14 App Router conventions
- Session configuration with secure cookie settings
- Environment variables for NextAuth configuration

### Mock Provider Setup
- Sample user data: "Demo User", "demo@example.com"
- Profile image placeholder from UI avatar service
- Mock authorization flow simulation
- Consistent user session creation

### References
- [Source: ../architecture.md#Authentication-Components](../architecture.md#authentication-components)
- [Source: ../architecture.md#Mock-Provider-Security](../architecture.md#mock-provider-security)
- [Source: ../PRD.md#Functional-Requirements](../PRD.md#functional-requirements)
- Previous Story: [1-1-project-infrastructure-setup.md](./1-1-project-infrastructure-setup.md)

## Dev Agent Record

### Context Reference

<!-- Path(s) to story context XML will be added here by context workflow -->

### Agent Model Used

Claude Sonnet 4.5 (claude-sonnet-4-5-20250929)

### Debug Log References

### Completion Notes List

### File List
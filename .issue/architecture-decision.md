# Architecture Decision: Contact Page Implementation

## Goal
Implement a responsive contact page with a validated form and a backend API route.

## Plan
1. **Dependencies**: Add `zod` and `react-hook-form`.
2. **Validation**: Create `src/lib/validations/contact.ts` with a Zod schema for the contact form (name, email, subject, message).
3. **UI Components**: Implement/Add ShadCN components:
   - `src/components/ui/form.tsx`
   - `src/components/ui/input.tsx`
   - `src/components/ui/textarea.tsx`
4. **API Route**: Create `src/app/api/contact/route.ts` to handle POST requests, validate payload using Zod, and return a JSON response.
5. **Contact Page**: Create `src/app/contact/page.tsx` with:
   - Responsive 2-column grid layout on desktop.
   - Contact form using ShadCN and Zod validation.
   - Business info: Location and Hours of Operation.
   - Form submission state handling (loading, success, error).

## Constraints
- Build ONLY the listed files.
- Do NOT add libraries other than `zod` and `react-hook-form`.
- Use existing project patterns for styling and components.

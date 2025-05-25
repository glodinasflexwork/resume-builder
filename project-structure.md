# Resume Builder Website Structure

## Project Structure

```
resume-builder/
├── public/
│   ├── images/
│   │   └── templates/
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── auth/
│   │   │   ├── resumes/
│   │   │   └── templates/
│   │   ├── dashboard/
│   │   │   └── page.tsx
│   │   ├── editor/
│   │   │   ├── [id]/
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── templates/
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── auth/
│   │   ├── common/
│   │   ├── editor/
│   │   │   ├── sections/
│   │   │   │   ├── PersonalDetails.tsx
│   │   │   │   ├── Education.tsx
│   │   │   │   ├── Experience.tsx
│   │   │   │   ├── Skills.tsx
│   │   │   │   ├── Languages.tsx
│   │   │   │   ├── Courses.tsx
│   │   │   │   ├── ExtraCurricular.tsx
│   │   │   │   ├── Hobbies.tsx
│   │   │   │   ├── References.tsx
│   │   │   │   └── Websites.tsx
│   │   │   ├── SectionContainer.tsx
│   │   │   └── SectionNavigation.tsx
│   │   ├── templates/
│   │   │   ├── Brussels.tsx
│   │   │   ├── Prague.tsx
│   │   │   ├── Shanghai.tsx
│   │   │   └── TemplatePreview.tsx
│   │   └── ui/
│   ├── db/
│   │   ├── schema.ts
│   │   └── index.ts
│   ├── hooks/
│   │   ├── useResume.ts
│   │   └── useAuth.ts
│   ├── lib/
│   │   ├── auth.ts
│   │   ├── pdf.ts
│   │   └── utils.ts
│   ├── providers/
│   │   ├── AuthProvider.tsx
│   │   └── ResumeProvider.tsx
│   └── types/
│       └── index.ts
├── prisma/
│   └── schema.prisma
├── .env
├── .env.example
├── .gitignore
├── next.config.js
├── package.json
├── README.md
└── tsconfig.json
```

## Component Hierarchy

1. **Layout Components**
   - MainLayout (app layout with navigation)
   - EditorLayout (split view with form and preview)
   - DashboardLayout (user's saved resumes)

2. **Page Components**
   - HomePage (landing page with features)
   - DashboardPage (user's saved resumes)
   - EditorPage (resume creation/editing)
   - TemplatePage (template selection)
   - PreviewPage (resume preview before export)

3. **Form Components**
   - Each resume section (PersonalDetails, Education, Experience, etc.)
   - FormField (reusable input component)
   - AddItemButton (for adding new entries to sections)
   - RemoveItemButton (for removing entries)

4. **Template Components**
   - Template variants (Brussels, Prague, Shanghai, etc.)
   - TemplatePreview (thumbnail view for selection)
   - TemplateColorPicker (for customizing template colors)

5. **UI Components**
   - Button
   - Input
   - Select
   - Checkbox
   - Modal
   - Tooltip
   - Notification

6. **Utility Components**
   - PDFExport
   - ProgressBar (resume completion)
   - DragAndDrop (for reordering sections)

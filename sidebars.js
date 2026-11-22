export default {
  course: [
    { type: 'doc', id: 'course/OVERVIEW', label: 'Start here · two tracks' },
    { type: 'doc', id: 'course/SETUP', label: 'Set up & what’s next' },
    {
      type: 'doc',
      id: 'course/project-and-git',
      label: '0. Directing an agent (both tracks)',
    },
    {
      type: 'category',
      label: 'Build an app',
      collapsed: false,
      items: [
        { type: 'doc', id: 'course/CURRICULUM', label: 'Learning path' },
        { type: 'doc', id: 'course/PLAN', label: 'Plan your app' },
        { type: 'doc', id: 'course/PRACTICE', label: 'Practice and review' },
        {
          type: 'doc',
          id: 'course/testing-and-qa',
          label: '1. Testing and QA',
        },
        {
          type: 'doc',
          id: 'course/modeling-data-and-behavior',
          label: '2. Modeling data and behavior',
        },
        {
          type: 'doc',
          id: 'course/error-handling-and-recovery',
          label: '3. Debugging, errors and recovery',
        },
        {
          type: 'doc',
          id: 'course/persistence-and-shared-state',
          label: '4. Persistence and shared state',
        },
        {
          type: 'doc',
          id: 'course/typing-protocols-and-data-validation',
          label: '5. Typing, protocols and validation',
        },
        {
          type: 'doc',
          id: 'course/structuring-a-program',
          label: '6. Structuring a program',
        },
        { type: 'doc', id: 'course/concurrency', label: '7. Concurrency' },
        {
          type: 'doc',
          id: 'course/share-run-and-maintain',
          label: '8. Share, run and maintain',
        },
        {
          type: 'doc',
          id: 'course/build-and-learn-on-your-own',
          label: '9. Build and learn on your own',
        },
      ],
    },
    {
      type: 'category',
      label: 'Understand code and changes',
      collapsed: false,
      items: [
        { type: 'doc', id: 'understand-code/index', label: 'Track guide' },
        {
          type: 'doc',
          id: 'understand-code/how-software-fits-together',
          label: '1. How software fits together',
        },
        {
          type: 'doc',
          id: 'understand-code/find-your-way',
          label: '2. Find your way around a project',
        },
        {
          type: 'doc',
          id: 'understand-code/follow-one-behavior',
          label: '3. Follow one behavior',
        },
        {
          type: 'doc',
          id: 'understand-code/run-and-investigate',
          label: '4. Run and investigate a behavior',
        },
        {
          type: 'doc',
          id: 'understand-code/evidence-of-correctness',
          label: '5. Understand a change and its evidence',
        },
        {
          type: 'doc',
          id: 'understand-code/read-evolving-project',
          label: '6. Read an evolving project',
        },
        {
          type: 'doc',
          id: 'understand-code/work-with-engineers',
          label: '7. Work with engineers on GitHub',
        },
        {
          type: 'doc',
          id: 'understand-code/use-it-in-your-role',
          label: 'Use it in your role',
        },
        {
          type: 'doc',
          id: 'understand-code/review-questions',
          label: 'Review questions for a change',
        },
        {
          type: 'category',
          label: 'Practice, labs and teacher notes',
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'understand-code/fixtures/module-1-shelf-summary',
              label: 'M1 practice: Shelf summary',
            },
            {
              type: 'doc',
              id: 'understand-code/navigation-evidence',
              label: 'M2 practice: Pocket Library',
            },
            {
              type: 'doc',
              id: 'understand-code/behavior-evidence',
              label: 'M3 practice: reading-list filter',
            },
            {
              type: 'doc',
              id: 'understand-code/workshop-practice',
              label: 'M4 practice: workshop directory',
            },
            {
              type: 'doc',
              id: 'understand-code/practice-evidence',
              label: 'M5 practice: blank-title change',
            },
            {
              type: 'doc',
              id: 'understand-code/change-evidence',
              label: 'M5 extra practice: Note Finder',
            },
            {
              type: 'doc',
              id: 'understand-code/harbor-log-lab',
              label: 'M6 lab: Harbor Log',
            },
            {
              type: 'doc',
              id: 'companions/fieldnotes-evidence',
              label: 'M6 extra practice: Fieldnotes',
            },
            {
              type: 'doc',
              id: 'understand-code/teacher-notes',
              label: 'M4 notes for the teaching agent',
            },
          ],
        },
      ],
    },
    { type: 'doc', id: 'course/AI-TEACHER', label: 'Teaching guide' },
    { type: 'doc', id: 'for-ai', label: 'For AI' },
  ],
};

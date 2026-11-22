export default {
  course: [
    { type: 'doc', id: 'course/OVERVIEW', label: 'Start here' },
    { type: 'doc', id: 'course/SETUP', label: 'Set up & what’s next' },
    { type: 'doc', id: 'course/CURRICULUM', label: 'Learning path' },
    {
      type: 'doc',
      id: 'course/project-and-git',
      label: '0. Directing an agent',
    },
    { type: 'doc', id: 'course/testing-and-qa', label: '1. Testing and QA' },
    {
      type: 'category',
      label: 'Modules 2–8',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'course/error-handling-and-recovery',
          label: '2. Debugging, errors and recovery',
        },
        {
          type: 'doc',
          id: 'course/persistence-and-shared-state',
          label: '3. Persistence and shared state',
        },
        {
          type: 'doc',
          id: 'course/modeling-data-and-behavior',
          label: '4. Modeling data and behavior',
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
          id: 'course/build-and-learn-on-your-own',
          label: '8. Build and learn on your own',
        },
      ],
    },
    { type: 'doc', id: 'course/PRACTICE', label: 'Project practice' },
    { type: 'doc', id: 'course/AI-TEACHER', label: 'Teaching guide' },
    { type: 'doc', id: 'for-ai', label: 'For AI' },
  ],
};

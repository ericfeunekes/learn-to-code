export default {
  course: [
    { type: 'doc', id: 'course/OVERVIEW', label: 'Start here' },
    { type: 'doc', id: 'course/SETUP', label: 'Set up & what’s next' },
    { type: 'doc', id: 'course/CURRICULUM', label: 'Learning path' },
    {
      type: 'doc',
      id: 'course/project-and-git',
      label: '0. Git/GitHub · draft',
    },
    { type: 'doc', id: 'course/testing-and-qa', label: '1. Testing and QA' },
    {
      type: 'category',
      label: 'Future modules · being built',
      collapsed: true,
      items: [
        'course/error-handling-and-recovery',
        'course/persistence-and-shared-state',
        'course/modeling-data-and-behavior',
        'course/typing-protocols-and-data-validation',
        'course/structuring-a-program',
        'course/concurrency',
      ],
    },
    { type: 'doc', id: 'course/PRACTICE', label: 'Project practice' },
    { type: 'doc', id: 'course/AI-TEACHER', label: 'Teaching guide' },
    { type: 'doc', id: 'for-ai', label: 'For AI' },
  ],
};

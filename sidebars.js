export default {
  course: [
    { type: 'doc', id: 'welcome', label: 'Start here' },
    { type: 'doc', id: 'course/OVERVIEW', label: 'Course overview' },
    { type: 'doc', id: 'course/CURRICULUM', label: 'Learning path' },
    {
      type: 'category',
      label: 'Core modules',
      collapsed: false,
      items: [
        'course/testing-and-qa',
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

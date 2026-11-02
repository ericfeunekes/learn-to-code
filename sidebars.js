export default {
  course: [
    { type: 'doc', id: 'course/OVERVIEW', label: 'Start here · two tracks' },
    {
      type: 'doc',
      id: 'course/project-and-git',
      label: '0. GitHub for everyone · draft',
    },
    { type: 'doc', id: 'course/CURRICULUM', label: 'Learning path' },
    {
      type: 'category',
      label: 'Build and improve software',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'course/SETUP',
          label: 'Project setup & next choices',
        },
        {
          type: 'doc',
          id: 'course/testing-and-qa',
          label: '1. Testing and QA',
        },
        {
          type: 'doc',
          id: 'course/error-handling-and-recovery',
          label: '2. Error handling and recovery · draft',
        },
        {
          type: 'doc',
          id: 'course/persistence-and-shared-state',
          label: '3. Persistence and shared state · outline',
        },
        {
          type: 'doc',
          id: 'course/modeling-data-and-behavior',
          label: '4. Modeling data and behavior · outline',
        },
        {
          type: 'doc',
          id: 'course/typing-protocols-and-data-validation',
          label: '5. Typing, protocols, validation · outline',
        },
        {
          type: 'doc',
          id: 'course/structuring-a-program',
          label: '6. Structuring a program · outline',
        },
        {
          type: 'doc',
          id: 'course/concurrency',
          label: '7. Concurrency · outline',
        },
      ],
    },
    {
      type: 'category',
      label: 'Understand code and changes',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'understand-code/index',
          label: 'Second-track guide',
        },
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
          label: '6. Understand an evolving project',
        },
        {
          type: 'category',
          label: 'Examples, labs and teacher notes',
          collapsed: true,
          items: [
            'understand-code/fixtures/module-1-shelf-summary',
            'understand-code/navigation-evidence',
            'understand-code/behavior-evidence',
            'understand-code/workshop-practice',
            'understand-code/teacher-notes',
            'understand-code/change-evidence',
            'understand-code/practice-evidence',
            'understand-code/module6-harbor-log-lab',
            'companions/fieldnotes-evidence',
          ],
        },
      ],
    },
    { type: 'doc', id: 'course/PRACTICE', label: 'Practice & evidence review' },
    { type: 'doc', id: 'course/AI-TEACHER', label: 'Teaching guide' },
    { type: 'doc', id: 'for-ai', label: 'For AI' },
  ],
};

const mockData = [
  {
    "Sr No.": 1,
    taskType: "Type A",
    deadline: {
      from: "2024-04-10",
      to: "2024-04-15",
    },
    assignee: "John Doe",
    priority: "HIGH PRIORITY",
    teamMember: ["Alice", "Bob", "Charlie"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    userRole: "Developer",
    taskActivity: "In Progress",
  },
  {
    "Sr No.": 2,
    taskType: "Type B",
    deadline: {
      from: "2024-04-12",
      to: "2024-04-20",
    },
    assignee: "Jane Smith",
    priority: "PRIORITY",
    teamMember: ["David", "Emma"],
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    userRole: "Designer",
    taskActivity: "Pending",
  },
  {
    "Sr No.": 3,
    taskType: "Type C",
    deadline: {
      from: "2024-04-15",
      to: "2024-04-25",
    },
    assignee: "Michael Brown",
    priority: "NORMAL",
    teamMember: ["Grace"],
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    userRole: "Tester",
    taskActivity: "Completed",
  },
  {
    "Sr No.": 4,
    taskType: "Type D",
    deadline: {
      from: "2024-04-18",
      to: "2024-04-30",
    },
    assignee: "Sophia Johnson",
    priority: "HIGH PRIORITY",
    teamMember: ["Frank", "Hannah"],
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    userRole: "Manager",
    taskActivity: "In Progress",
  },
  {
    "Sr No.": 5,
    taskType: "Type E",
    deadline: {
      from: "2024-04-20",
      to: "2024-05-05",
    },
    assignee: "William Wilson",
    priority: "NORMAL",
    teamMember: ["Isabella", "Jack"],
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    userRole: "Developer",
    taskActivity: "Pending",
  },
];


export default mockData;
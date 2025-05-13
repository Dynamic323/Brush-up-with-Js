const megaData = {
  meta: {
    version: "2.1.0",
    lastUpdated: new Date("2025-04-01"),
    flags: {
      verified: true,
      archived: false,
    },
  },
  users: [
    {
      id: "u01",
      profile: {
        name: "Zara Moon",
        dob: "1998-07-19",
        preferences: {
          language: "en",
          theme: "dark",
        },
      },
      history: [
        {
          login: { time: "2025-04-01T08:30:00Z", device: "mobile" },
          activity: [
            { type: "post", id: 101 },
            { type: "like", targetId: 301 },
          ],
        },
      ],
      projects: [
        {
          code: "P-01",
          details: {
            name: "Nebula",
            contributors: [
              {
                id: "c1",
                name: "Liam",
                roles: ["frontend", "tester"],
                logs: [{ date: "2025-03-20", hours: 5 }],
              },
              {
                id: "c2",
                name: "Emma",
                roles: ["backend"],
                logs: [{ date: "2025-03-21", hours: 3 }],
              },
            ],
          },
        },
      ],
    },
    {
      id: "u02",
      profile: {
        name: "Noah Blaze",
        dob: "1995-03-11",
        preferences: {
          language: "es",
          theme: "light",
        },
      },
      history: [],
      projects: [],
    },
  ],
  analytics: {
    daily: [
      {
        date: "2025-04-01",
        metrics: {
          activeUsers: 120,
          posts: {
            total: 45,
            breakdown: [
              { type: "text", count: 30 },
              { type: "image", count: 10 },
              { type: "video", count: 5 },
            ],
          },
        },
      },
    ],
  },
  accessControl: {
    roles: {
      admin: ["u01"],
      viewer: ["u02"],
      editor: [],
    },
  },
};

//   NOT THIS IS A COMPLEX DATA OOOOO JUST TAKE UR TIME AND PLAY WITH IT

// 9 Challenging Questions Based on the Data:
// What is the name of the second contributor to the project named "Nebula"?

console.log(megaData.users[0].projects[0].details.name);

// How many hours did Liam work on the Nebula project on March 20th?
console.log(
  megaData.users[0].projects[0].details.contributors[0].logs[0].hours
);

// Get the type of the first activity of the first login history for the first user.

// What language preference does the user with ID "u02" have?

// Who has the 'admin' access role? Provide their full name.

// How many posts were made on April 1st, 2025, and how many of them were videos?

// Return all contributor names from all projects of all users.

// What is the theme preference of the user who has no login history?

// Does any user have both "backend" and "frontend" roles in any project? If yes, return their name.

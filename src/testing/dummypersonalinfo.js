import uniqid from "uniqid";
const dummyData = {
  personalInfo: {
    name: "Costin ",
    email: "costineats@gmail.com",
    phoneNumber: "123-456-7890",
    address: "1234 Spooner Lane",
    id: uniqid(),
  },
  schoolInfo: [
    {
      name: "School of Hard Knocks",
      schoolLocation: "New York",
      degree: "Bachelors",
      major: "Computer Science",
      startDate: "11/11/11",
      endDate: "12/12/12",
      id: uniqid(),
    },
    {
      name: "School of Hard Knocks",
      schoolLocation: "New York",
      degree: "Masters",
      major: "Computer Science",
      startDate: "11/11/11",
      endDate: "12/12/12",
      id: uniqid(),
    }
  ],
  employmentInfo: [
    {
      name: "Data British Shorthair",
      jobTitle: "Junior SWE",
      startDate: "13/13/13",
      endDate: "14/14/14",
      jobLocation: "New York",
      jobDescription: "Worked on sensitive data",
      id: uniqid(),
    },
    {
      name: "Data Bull",
      jobTitle: "Junior SWE",
      startDate: "13/13/13",
      endDate: "14/14/14",
      jobLocation: "New York",
      id: uniqid(),
    },
    {
        name: "Data Cat",
        jobTitle: "Junior SWE",
        startDate: "13/13/13",
        endDate: "14/14/14",
        jobLocation: "New York",
        id: uniqid(),
      },
  ]
};

export { dummyData };

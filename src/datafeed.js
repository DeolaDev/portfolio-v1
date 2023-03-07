export const skills = [
  "HTML5",
  "CSS",
  "Flexbox",
  "Tailwind CSS",
  "Bootstrap",
  "JavaScript | ES6",
  "React",
  "Node",
  "PHP",
  "Python",
  "GraphQL",
  "Git | GitHub",
  "API Development",
  "WordPress",
  "WebSockets",
  "DynamoDB",
];

export const projects = [
  {
    title: "BOOK PICTURES WEB APP",
    toolstack:
      "HTML5 | Python | Twilio API | WebSocket | DynamoDB | AWS Lambda",
    description:
      "Users send a text to my TWILIO number with a picture of their favourite book and the web client receives a message via the socket when a new picture is sent and automatically refreshes the page to display the new picture received.",
    image: "./BookPicsAutoRefresh.gif",
    alt: "Book Pics with Twilio API and WebSockets",
    github: "https://github.com/DeolaDev/book-pics-API-WebSockets",
    link: "https://book-pics-v2.netlify.app/",
  },
  {
    title: "BOOK RATING APP",
    toolstack: "Javascript | Python | DynamoDB | AWS Amplify",
    description:
      "A simple app that uses GraphQL API and connected to multiple DynamoDB tables using AWS AppSync. One DynamoDB table is populated with form data and the second DynamoDB is populated from CSV flies uploaded to an S3 bucket.",
    image: "./Bookratingapp.gif",
    alt: "Adeola - Book Rating App",
    github: "https://github.com/DeolaDev/rate-books-app-graphql",
    link: " https://main.d2zdr4h8jx6b5p.amplifyapp.com",
  },
];

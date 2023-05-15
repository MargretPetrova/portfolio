  /* STATIC RESUME DATA */
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [

    { skill: "JavaScript", ratingPercentage: 70 },
    { skill: "React JS", ratingPercentage: 70 },
    { skill: "Express JS", ratingPercentage: 60 },
    { skill: "Node JS", ratingPercentage: 70 },
    { skill: "Mongo Db", ratingPercentage: 60 },
    { skill: "HTML", ratingPercentage: 70 },
    { skill: "CSS", ratingPercentage: 70 },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2023", toDate: "2023" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place. Deployed",
      subHeading: "Technologies Used: React JS",
    },
    {
      title: "Real Estate ",
      duration: { fromDate: "2023", toDate: "present" },
      description:
        "A real estate website designed to sell, buy or rent homes. Deployed",
      subHeading: "Technologies Used:  React JS",
      link:'https://margretpetrova.github.io/realestate-react-project/'
    },
    {
      title: "Support people of Ukraine ",
      duration: { fromDate: "2022", toDate: "2022" },
      description:
        "A MERN project for support people of Ukraine with donation in centers or register a help center",
      subHeading:
        "Technologies Used: Mongo DB, Express JS, React JS, Node JS.",
        link:'https://github.com/MargretPetrova/react-project-mern'
    },
    
  ];

  const educationDetails=[{
    heading:"Software University",subHeading:"Java Script",fromDate:"2020",toDate:"2022"},
{heading:"University of minning and geology-Sofia,Bulgaria",subHeading:"Engineer - geology and exploration of mineral and energy resources ",fromDate:"2010",toDate:"2015"},
{heading:"High School of Mathematics and Natural Sciences- 'Dobri Chintulov'-Sliven, Bulgaria",subHeading:"Math",fromDate:"2005",toDate:"2010"}
];

const interestsDetails = [{
    heading:"Hiking",
    description:"I love a long walks on trails or footpaths in the countryside."
},{
    heading:"Reading",
    description:"The adventure books are my favorite as 'Buried in the Sky by Peter Zuckerman', 'Broad Peak' by Mike Horn"

},{
    heading:"Helping stray animals",
    description:"I like to help stray animals- feeding them, taking them to the doctor, finding them homes..."
 
}];


  export  {resumeBullets,programmingSkillsDetails, projectsDetails,educationDetails,interestsDetails};
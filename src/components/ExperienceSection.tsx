
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const experiences = [
  {
    id: 1,
    role: "Senior Android Developer",
    company: "Tech Solutions Inc.",
    duration: "Jan 2022 - Present",
    description: "Lead developer for the company's flagship product, implemented CI/CD pipelines, and mentored junior developers.",
    responsibilities: [
      "Developed and maintained multiple Android applications with over 1M+ downloads",
      "Led a team of 5 developers and implemented agile methodologies",
      "Improved app performance by 40% through code optimization",
      "Integrated various third-party SDKs and APIs"
    ]
  },
  {
    id: 2,
    role: "Backend Developer",
    company: "Data Systems Corp.",
    duration: "Mar 2020 - Dec 2021",
    description: "Designed and implemented RESTful APIs and microservices for a cloud-based platform.",
    responsibilities: [
      "Built scalable backend services using Node.js and Express",
      "Designed and optimized database schemas and queries",
      "Implemented authentication and authorization systems",
      "Deployed services using Docker and Kubernetes"
    ]
  },
  {
    id: 3,
    role: "Junior Software Engineer",
    company: "StartUp Innovations",
    duration: "Jun 2018 - Feb 2020",
    description: "Worked on full-stack development for a SaaS product targeted at small businesses.",
    responsibilities: [
      "Developed responsive web interfaces using React",
      "Created RESTful APIs using Express.js",
      "Implemented database schemas using MongoDB",
      "Participated in code reviews and testing"
    ]
  },
  {
    id: 4,
    role: "Software Engineer Intern",
    company: "Tech Academy",
    duration: "Jan 2018 - May 2018",
    description: "Assisted in developing learning materials and example projects for programming courses.",
    responsibilities: [
      "Created sample projects for Android development courses",
      "Helped maintain documentation and learning resources",
      "Provided technical support for students",
      "Contributed to the development of course content"
    ]
  }
];

const TimelineItem = ({ experience, isLast }: { experience: typeof experiences[0], isLast: boolean }) => (
  <div className="relative pl-8">
    {!isLast && (
      <div className="absolute left-0 top-1 w-0.5 h-full bg-border"></div>
    )}
    <div className="absolute left-[-8px] top-1 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>
    <Card className="mb-10">
      <CardHeader className="pb-2">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
          <div>
            <CardTitle>{experience.role}</CardTitle>
            <CardDescription className="text-base font-medium text-primary">
              {experience.company}
            </CardDescription>
          </div>
          <span className="text-sm text-muted-foreground whitespace-nowrap">
            {experience.duration}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{experience.description}</p>
        <ul className="list-disc pl-5 space-y-2">
          {experience.responsibilities.map((item, i) => (
            <li key={i} className="text-gray-600">{item}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  </div>
);

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20">
      <div className="section-container">
        <h2 className="section-title text-center">Experience</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          My professional journey in software engineering, showcasing my growth and expertise.
        </p>
        
        <div className="max-w-4xl mx-auto mt-16">
          {experiences.map((experience, index) => (
            <div key={experience.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <TimelineItem 
                experience={experience} 
                isLast={index === experiences.length - 1} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

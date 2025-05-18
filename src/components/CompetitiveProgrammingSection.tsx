
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

// LeetCode problem data
const leetcodeData = [
  { name: 'Easy', value: 85, color: '#73c0de' },
  { name: 'Medium', value: 42, color: '#5470c6' },
  { name: 'Hard', value: 15, color: '#91cc75' },
];

// Topic distribution data
const topicData = [
  { name: 'Arrays', value: 45, color: '#5470c6' },
  { name: 'Strings', value: 20, color: '#91cc75' },
  { name: 'Dynamic Programming', value: 18, color: '#fac858' },
  { name: 'Graphs', value: 15, color: '#ee6666' },
  { name: 'Trees', value: 22, color: '#73c0de' },
  { name: 'Greedy', value: 10, color: '#3ba272' },
  { name: 'BFS/DFS', value: 12, color: '#fc8452' },
];

// Platform stats
const platformStats = [
  { platform: 'LeetCode', problems: 142, rank: '15,234', rating: '1825' },
  { platform: 'HackerRank', problems: 78, rank: '9,874', rating: '5 stars' },
  { platform: 'CodeChef', problems: 56, rank: '12,421', rating: '1650' },
  { platform: 'CodeForces', problems: 45, rank: '18,982', rating: '1420' },
  { platform: 'GeeksForGeeks', problems: 68, rank: '8,542', rating: 'Expert' },
];

// SQL Skills data
const sqlSkillsData = [
  { skill: 'Basic Queries', level: 90 },
  { skill: 'Joins', level: 85 },
  { skill: 'Subqueries', level: 75 },
  { skill: 'Aggregations', level: 80 },
  { skill: 'Window Functions', level: 70 },
  { skill: 'Indexing', level: 65 },
];

// Common topics to filter
const commonTopics = [
  "Arrays", "Strings", "DP", "Graphs", "Trees", 
  "Greedy", "BFS/DFS", "Heap", "Stack", "Queue", 
  "Binary Search", "Recursion", "Backtracking", "Bit Manipulation", "SQL"
];

const CompetitiveProgrammingSection = () => {
  return (
    <section id="cp-stats" className="py-20 bg-secondary/30">
      <div className="section-container">
        <h2 className="section-title text-center">Competitive Programming</h2>
        <p className="text-center text-foreground/80 mb-12 max-w-3xl mx-auto">
          My problem-solving journey across various competitive programming platforms.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="overflow-hidden border border-border/50 backdrop-blur-sm bg-card/30">
            <CardHeader className="bg-primary/5 border-b border-border/30">
              <CardTitle>LeetCode Statistics</CardTitle>
              <CardDescription>Problems solved by difficulty level</CardDescription>
            </CardHeader>
            <CardContent className="pt-6 h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={leetcodeData}
                  margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#66666620" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(30, 41, 59, 0.8)', 
                      borderColor: 'rgba(148, 163, 184, 0.2)',
                      borderRadius: '8px',
                      color: '#fff',
                      backdropFilter: 'blur(8px)'
                    }} 
                  />
                  <Legend />
                  <Bar dataKey="value" name="Problems Solved">
                    {leetcodeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden border border-border/50 backdrop-blur-sm bg-card/30">
            <CardHeader className="bg-primary/5 border-b border-border/30">
              <CardTitle>Topic Distribution</CardTitle>
              <CardDescription>Problems solved by topic category</CardDescription>
            </CardHeader>
            <CardContent className="pt-6 h-72">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={topicData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {topicData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(30, 41, 59, 0.8)', 
                      borderColor: 'rgba(148, 163, 184, 0.2)',
                      borderRadius: '8px',
                      color: '#fff',
                      backdropFilter: 'blur(8px)'
                    }} 
                    formatter={(value) => [`${value} problems`, 'Count']}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
        
        <Card className="overflow-hidden border border-border/50 backdrop-blur-sm bg-card/30 mb-12">
          <CardHeader className="bg-primary/5 border-b border-border/30">
            <CardTitle>Platform Statistics</CardTitle>
            <CardDescription>My activity across different coding platforms</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {platformStats.map((stat, index) => (
                <Card 
                  key={index} 
                  className="bg-background/50 backdrop-blur-sm border border-border/30 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <CardHeader className="pb-2">
                    <CardTitle className="text-center text-lg">{stat.platform}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center pt-0">
                    <p className="text-2xl font-semibold text-primary">{stat.problems}</p>
                    <p className="text-sm text-muted-foreground">Problems Solved</p>
                    <div className="mt-2 pt-2 border-t border-border/30">
                      <p className="text-sm"><span className="text-muted-foreground">Rank:</span> {stat.rank}</p>
                      <p className="text-sm"><span className="text-muted-foreground">Rating:</span> {stat.rating}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="overflow-hidden border border-border/50 backdrop-blur-sm bg-card/30">
            <CardHeader className="bg-primary/5 border-b border-border/30">
              <CardTitle>Problem Filters</CardTitle>
              <CardDescription>Common topics I've solved problems in</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex flex-wrap gap-2">
                {commonTopics.map((topic, index) => (
                  <Badge 
                    key={index}
                    variant="outline"
                    className="rounded-full py-1.5 border-primary/30 hover:bg-primary/20 transition-colors duration-200 cursor-pointer"
                  >
                    {topic}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden border border-border/50 backdrop-blur-sm bg-card/30">
            <CardHeader className="bg-primary/5 border-b border-border/30">
              <CardTitle>SQL Skills</CardTitle>
              <CardDescription>Proficiency in SQL concepts</CardDescription>
            </CardHeader>
            <CardContent className="pt-6 h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={sqlSkillsData}
                  layout="vertical"
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#66666620" horizontal={false} />
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis dataKey="skill" type="category" width={100} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(30, 41, 59, 0.8)', 
                      borderColor: 'rgba(148, 163, 184, 0.2)',
                      borderRadius: '8px',
                      color: '#fff',
                      backdropFilter: 'blur(8px)'
                    }} 
                    formatter={(value) => [`${value}%`, 'Proficiency']}
                  />
                  <Bar dataKey="level" fill="#91cc75" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveProgrammingSection;

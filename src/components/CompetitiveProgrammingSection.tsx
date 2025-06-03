import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// LeetCode problem data
const leetcodeData = [
  { name: 'Easy', value: 127, color: '#73c0de' },
  { name: 'Medium', value: 169, color: '#5470c6' },
  { name: 'Hard', value: 19, color: '#91cc75' },
];

// Topic distribution data
const topicData = [
  { name: 'Arrays', value: 143, color: '#5470c6' },
  { name: 'Strings', value: 56, color: '#f930a4' },
  { name: 'HashMap', value: 54, color: '#ee6666' },
  { name: 'Database', value: 115, color: '#91cc75' },
  { name: 'Trees', value: 28, color: '#73c0de' },
  { name: 'Greedy', value: 29, color: '#3ba272' },
  { name: 'BFS/DFS', value: 82, color: '#fc8452' },
  { name: 'DP', value: 24, color: '#fac858' },
];

// Platform stats
const platformStats = [
  { platform: 'LeetCode', problems: 315, rank: '333,157', rating: '1,587' },
  { platform: 'HackerRank', problems: 55, Hackos: '873', rating: '5⭐' },
  { platform: 'CodeChef', problems: 53, rank: '1,164', rating: '1322' },
  { platform: 'GeeksForGeeks', problems: 28, rank: '411', rating: '-' },
  { platform: 'CodeForces', problems: 5,   rank: '12,065', rating: '611' }
];

// Common topics to filter
const commonTopics = [
  "Arrays", "Strings", "HashMap/Set", "Sorting", "Two Pointer", "DP", "Graphs", "Trees", 
  "Greedy", "BFS/DFS", "Stack", "Queue", "Database", "LinkedList", 
  "Binary Search", "Recursion", "Backtracking", "Sliding Window"
];

const RADIAN = Math.PI / 180;

const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 1.2;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="currentColor"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
      fontSize={12}
    >
      {`${topicData[index].name} ${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const CompetitiveProgrammingSection = () => {
  return (
    <section id="cp-stats" className="py-20 bg-secondary/30">
      <div className="section-container">
        <h2 className="section-title text-center">Competitive Programming</h2>
        <p className="text-center text-foreground/80 mb-12 max-w-3xl mx-auto">
          My problem-solving journey across various competitive programming platforms.
        </p>

        {/* Centered Card */}
        <div className="flex justify-center mb-12">
          <Card className="overflow-hidden border border-border/50 backdrop-blur-sm bg-card/30 w-full max-w-2xl">
            <CardHeader className="bg-primary/5 border-b border-border/30">
              <CardTitle>Topic Distribution</CardTitle>
              <CardDescription>Problems solved by topic category</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center py-10">
              <div className="w-full h-[300px] mb-6">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={topicData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={renderCustomLabel}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
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
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex flex-wrap justify-center gap-4 mt-2">
                {topicData.map((entry) => (
               <Badge
               key={entry.name}
               variant="outline"
               className="rounded-full px-4 py-1 text-sm border-none"
               style={{
                 backgroundColor: `rgba(0, 0, 0, 0.05)`,
                 color: entry.color
               }}
             >
               {entry.name}
             </Badge>               
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Platform Statistics */}
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

        {/* Other Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="overflow-hidden border border-border/50 backdrop-blur-sm bg-card/30">
            <CardHeader className="bg-primary/5 border-b border-border/30">
              <CardTitle>Problem Domains</CardTitle>
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
              <CardTitle>SQL Practice</CardTitle>
              <CardDescription>Problems solved in SQL</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex flex-wrap gap-3 items-center">
                <Badge variant="secondary" className="rounded-full py-2 px-4 text-base">
                  LeetCode SQL: 54 Problems
                </Badge>
                <Badge variant="secondary" className="rounded-full py-2 px-4 text-base">
                  HackerRank SQL: 23 Problems
                </Badge>
                <Badge variant="secondary" className="rounded-full py-2 px-4 text-base">
                  CodeChef SQL: 38 Problems
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveProgrammingSection;

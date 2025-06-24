
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// LeetCode problem data
const leetcodeData = [
  { name: 'Easy', value: 127, color: '#73c0de' },
  { name: 'Medium', value: 169, color: '#5470c6' },
  { name: 'Hard', value: 19, color: '#91cc75' },
];

const topicData = [
  { name: 'Arrays', value: 168, color: '#5470c6' },
  { name: 'Strings', value: 58, color: '#f930a4' },
  { name: 'HashMap', value: 56, color: '#ee6666' },
  { name: 'Trees', value: 28, color: '#73c0de' },
  { name: 'Database', value: 115, color: '#91cc75' },
  { name: 'Greedy', value: 31, color: '#3ba272' },
  { name: 'Graph', value: 45, color: '#7F00FF' },
  { name: 'BFS/DFS', value: 92, color: '#fc8452' },
  { name: 'DP', value: 53, color: '#fac858' },
];

const platformStats = [
  { platform: 'LeetCode', problems: 337, rank: '333,157', rating: '1,518' },
  { platform: 'HackerRank', problems: 103, Hackos: '873', rating: '5⭐' },
  { platform: 'CodeChef', problems: 77, rank: '1,164', rating: '1126' },
  { platform: 'GeeksForGeeks', problems: 64, rank: '411', rating: '-' },
  { platform: 'CodeForces', problems: 7,   rank: '12,065', rating: '611' },
  { platform: 'Coding Ninjas', problems: 27,   rank: 'Weekly - 3rd', rating: '-' }
];

const commonTopics = [
  "Arrays", "Strings", "HashMap/Set", "Sorting", "Two Pointer", "DP", "Graphs", "Trees", 
  "Greedy", "BFS/DFS", "Stack", "Queue", "Database", "LinkedList", 
  "Binary Search", "Recursion", "Backtracking", "Sliding Window"
];

const RADIAN = Math.PI / 180;

const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 1.3;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="currentColor"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
      fontSize={13}
      fontWeight={500}
      className="drop-shadow-sm"
    >
      {`${topicData[index].name} ${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0];
    return (
      <div className="bg-background/95 backdrop-blur-md border border-border/50 rounded-xl shadow-xl p-4 min-w-[140px]">
        <div className="flex items-center gap-3">
          <div 
            className="w-4 h-4 rounded-full shadow-md"
            style={{ backgroundColor: data.payload.color }}
          />
          <div>
            <p className="font-semibold text-foreground">{data.payload.name}</p>
            <p className="text-sm text-muted-foreground">{data.value} problems</p>
            <p className="text-xs text-primary font-medium">
              {((data.value / topicData.reduce((sum, item) => sum + item.value, 0)) * 100).toFixed(1)}%
            </p>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

const CompetitiveProgrammingSection = () => {
  return (
    <section id="cp-stats" className="py-20 bg-secondary/30">
      <div className="section-container">
        <h2 className="section-title text-center">Competitive Programming</h2>
        <p className="text-center text-foreground/80 mb-12 max-w-3xl mx-auto">
          My problem-solving journey across various competitive programming platforms.
        </p>

        {/* Enhanced Pie Chart Card */}
        <div className="flex justify-center mb-12">
          <Card className="overflow-hidden border border-border/50 backdrop-blur-sm bg-card/40 w-full max-w-4xl shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-b border-border/30 pb-6">
              <div className="text-center">
                <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  Topic Distribution
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Comprehensive breakdown of problems solved across different domains
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <div className="w-full h-[400px] mb-8 relative">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <defs>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                        <feMerge> 
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    <Pie
                      data={topicData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={renderCustomLabel}
                      outerRadius={130}
                      innerRadius={45}
                      fill="#8884d8"
                      dataKey="value"
                      stroke="rgba(255,255,255,0.2)"
                      strokeWidth={2}
                    >
                      {topicData.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`} 
                          fill={entry.color}
                          filter="url(#glow)"
                          className="hover:opacity-80 transition-opacity duration-300 cursor-pointer"
                        />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip active={undefined} payload={undefined} />} />
                  </PieChart>
                </ResponsiveContainer>
                
                {/* Center Statistics */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="text-center bg-background/80 backdrop-blur-sm rounded-full p-6 border border-border/30">
                    <div className="text-3xl font-bold text-primary">
                      {topicData.reduce((sum, item) => sum + item.value, 0)}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      Total Problems
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Legend */}
              <div className="flex flex-wrap justify-center gap-3 mt-4 max-w-4xl">
                {topicData.map((entry, index) => (
                  <Badge
                    key={entry.name}
                    variant="outline"
                    className="rounded-full px-4 py-2 text-sm border-2 hover:scale-105 transition-all duration-300 cursor-pointer shadow-sm"
                    style={{
                      borderColor: entry.color,
                      backgroundColor: `${entry.color}15`,
                      color: entry.color
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-full shadow-sm"
                        style={{ backgroundColor: entry.color }}
                      />
                      <span className="font-medium">{entry.name}</span>
                      <span className="text-xs opacity-80">({entry.value})</span>
                    </div>
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
                  HackerRank SQL: 46 Problems
                </Badge>
                <Badge variant="secondary" className="rounded-full py-2 px-4 text-base">
                  CodeChef SQL: 55 Problems
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

import React from 'react';

const Stats: React.FC = () => {
  return (
    <div className="w-full bg-white dark:bg-background-dark py-12 border-y border-slate-200 dark:border-[#283039]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <StatCard 
                    icon="deployed_code" 
                    value="2+" 
                    label="Projects Delivered" 
                />
                <StatCard 
                    icon="bug_report" 
                    value="200+" 
                    label="Bugs Reported" 
                />
                <StatCard 
                    icon="assignment" 
                    value="500+" 
                    label="Test Cases Written" 
                />
            </div>
            
            <div className="mt-16 flex flex-col items-center gap-8">
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Core Competencies</h3>
                    <p className="text-slate-500 dark:text-slate-400">Tools and technologies I use to ensure quality.</p>
                </div>
                
                <div className="flex flex-wrap justify-center gap-3 max-w-4xl">
                   {['Manual Testing', 'Selenium Automation', 'API Testing', 'JIRA', 'SQL', 'Regression Testing', 'Postman', 'Java'].map((skill) => (
                       <div key={skill} className="flex h-10 items-center justify-center gap-x-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-surface-dark px-4 shadow-sm hover:border-primary hover:text-primary dark:hover:border-primary cursor-default transition-all duration-200">
                           <span className="material-symbols-outlined text-[20px]">{getIconForSkill(skill)}</span>
                           <span className="text-sm font-medium dark:text-slate-300">{skill}</span>
                       </div>
                   ))}
                </div>
            </div>
        </div>
    </div>
  );
};

const StatCard: React.FC<{ icon: string; value: string; label: string }> = ({ icon, value, label }) => (
    <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-surface-dark p-8 shadow-sm hover:border-primary/50 hover:shadow-[0_0_20px_rgba(19,127,236,0.1)] transition-all duration-300 group">
        <div className="p-3 rounded-full bg-primary/10 text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
            <span className="material-symbols-outlined text-3xl">{icon}</span>
        </div>
        <p className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">{value}</p>
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">{label}</p>
    </div>
);

const getIconForSkill = (skill: string) => {
    switch(skill) {
        case 'Manual Testing': return 'pan_tool';
        case 'Selenium Automation': return 'smart_toy';
        case 'API Testing': return 'api';
        case 'JIRA': return 'bug_report';
        case 'SQL': return 'database';
        case 'Regression Testing': return 'autorenew';
        case 'Postman': return 'terminal';
        case 'Java': return 'code';
        default: return 'check_circle';
    }
}

export default Stats;
import React from 'react';

const Experience: React.FC = () => {
  return (
    <div className="w-full bg-slate-50 dark:bg-[#151a21] py-20 border-y border-slate-200 dark:border-[#283039]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight text-center mb-2 text-slate-900 dark:text-white">Professional Journey</h2>
            <div className="h-1 w-16 bg-primary rounded-full mb-6"></div>
            <p className="text-slate-500 dark:text-slate-400 text-center max-w-lg text-lg">
                A timeline of my career in Quality Assurance, highlighting key roles, achievements, and educational background.
            </p>
        </div>

        <div className="flex flex-col">
            <TimelineItem 
                icon="workspace_premium" 
                title="Fresher / Junior" 
                company="HOPEE Co., Ltd." 
                date="11/2024 - Present"
                isCurrent={true}
                items={[
                    "Engaged in full-cycle testing for client projects, ensuring high-quality deliverables.",
                    "Collaborating with cross-functional teams to resolve complex issues and improve product stability.",
                    "Continuing to refine automation skills and contribute to internal QA process improvements."
                ]}
                tags={['Automation', 'Team Collaboration', 'Quality Control']}
            />
            
            <TimelineItem 
                icon="verified" 
                title="Probation" 
                company="HOPEE Co., Ltd." 
                date="09/2024 - 11/2024"
                items={[
                    "Successfully transitioned from intern to probationary employee, taking on increased responsibilities.",
                    "Executed regression testing plans and reported critical defects prior to release cycles.",
                    "Demonstrated strong understanding of QA methodologies and tool proficiency."
                ]}
                tags={['Regression Testing', 'Bug Reporting']}
            />

            <TimelineItem 
                icon="school" 
                title="Intern" 
                company="HOPEE Co., Ltd." 
                date="06/2024 - 08/2024"
                items={[
                    "Gained hands-on experience in manual testing and familiarized with the company's tech stack.",
                    "Assisted senior engineers in creating test cases and documentation.",
                    "Participated in daily stand-ups and agile processes."
                ]}
                tags={['Manual Testing', 'Documentation', 'Agile']}
            />

            <TimelineItem 
                icon="code" 
                title="Computer Education" 
                company="FPT Aptech" 
                date="07/2023 - 05/2024"
                subtext="Aptech Computer Education, India – in cooperation with FPT Corporation"
                items={[
                    "Completed intensive coursework in software development and testing fundamentals.",
                    "Developed foundational knowledge in programming logic, database management, and web technologies.",
                    "Participated in practical projects to apply theoretical concepts."
                ]}
                tags={['Software Development', 'Databases', 'Testing Fundamentals']}
            />
             <TimelineItem 
                icon="public" 
                title="International Student" 
                company="Japan" 
                date="2019 - 2023"
                items={[
                    "Pursued academic studies while adapting to a new cultural environment.",
                    "Developed strong cross-cultural communication skills and resilience.",
                    "Gained proficiency in the Japanese language and work ethic."
                ]}
                tags={['Japanese Language', 'Adaptability']}
                last={true}
            />
        </div>
      </div>
    </div>
  );
};

interface TimelineItemProps {
    icon: string;
    title: string;
    company: string;
    date: string;
    items: string[];
    tags: string[];
    subtext?: string;
    isCurrent?: boolean;
    last?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ icon, title, company, date, items, tags, subtext, isCurrent, last }) => {
    return (
        <div className="grid grid-cols-[48px_1fr] gap-x-4 sm:gap-x-6 group">
            <div className="flex flex-col items-center pt-2">
                <div className={`flex h-12 w-12 items-center justify-center rounded-full ring-4 ring-slate-50 dark:ring-[#151a21] z-10 border transition-all duration-300 ${isCurrent ? 'bg-primary/20 text-primary border-primary/20' : 'bg-white dark:bg-card-dark text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700'}`}>
                    <span className="material-symbols-outlined text-[24px]">{icon}</span>
                </div>
                {!last && <div className="w-[2px] bg-slate-200 dark:bg-slate-700 h-full grow my-2 group-hover:bg-primary/30 transition-colors"></div>}
            </div>
            
            <div className="pb-10">
                <div className={`rounded-xl p-6 sm:p-8 shadow-sm border transition-all duration-300 ${isCurrent ? 'bg-white dark:bg-surface-dark border-primary/30 shadow-[0_0_20px_rgba(19,127,236,0.05)]' : 'bg-white dark:bg-card-dark border-slate-200 dark:border-slate-700/50 hover:border-slate-300 dark:hover:border-slate-600'}`}>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                        <div>
                            <h3 className={`text-xl font-bold transition-colors ${isCurrent ? 'text-primary' : 'text-slate-900 dark:text-white'}`}>{title}</h3>
                            <p className="text-slate-500 dark:text-slate-400 font-medium">{company}</p>
                            {subtext && <p className="text-slate-400 dark:text-slate-500 text-sm mt-1">{subtext}</p>}
                        </div>
                        <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold whitespace-nowrap w-fit ${isCurrent ? 'bg-primary/10 text-primary' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'}`}>
                            {date}
                        </span>
                    </div>
                    
                    <ul className="list-disc list-outside ml-4 space-y-2 text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                        {items.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                        {tags.map(tag => (
                            <span key={tag} className="inline-flex items-center rounded-md bg-slate-100 dark:bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
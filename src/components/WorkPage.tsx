import { useState } from 'react';
import { X, ExternalLink } from 'lucide-react';

type Project = {
  id: string;
  title: string;
  category: 'project' | 'experiment' | 'client';
  tagline: string;
  problem: string;
  approach: string;
  outcome: string;
  status: 'Shipped' | 'Building' | 'Exploring';
};

export function WorkPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<'all' | 'project' | 'experiment' | 'client'>('all');

  const projects: Project[] = [
    {
      id: '1',
      title: 'SmartScriber',
      category: 'project',
      tagline: 'Email-powered personal finance assistant',
      problem:
        'People lose track of digital spending because subscription and purchase details are scattered across emails, leading to forgotten renewals and poor financial visibility.',
      approach:
        'SmartScriber analyzes transactional emails to automatically detect subscriptions and one-time purchases. It extracts key details like provider, amount, billing cycle, and renewal dates, presenting everything in a clean, structured dashboard.',
      outcome:
        'Pre-registration is live on the Play Store, validating early user interest ahead of public launch.',
      status: 'Building',
    },
    {
      id: '2',
      title: 'SuprServices',
      category: 'experiment',
      tagline: 'Local-first freelancing & solutions studio',
      problem:
        'Local businesses struggle to find reliable teams for practical digital solutions, while freelancers often lack long-term, meaningful local work.',
      approach:
        'SuprServices operates as a hands-on freelancing studio delivering design, development, automation, and system solutions tailored for local clients—focused on work that actually gets used.',
      outcome:
        'Early-stage experiment. One local project is currently in progress, with active outreach to additional local clients.',
      status: 'Building',
    },
    {
      id: '3',
      title: 'Aarohan Library',
      category: 'client',
      tagline: 'Digital seat reservation system for libraries',
      problem:
        'Manual library seat allocation leads to inefficiencies, unfair usage, and administrative overhead.',
      approach:
        'Built a dedicated mobile app that allows students and staff to reserve library seats using Google authentication. Includes half-day and full-day booking options, booking history, and an admin panel for instant management.',
      outcome:
        'Live on the Play Store. Payment integration is currently pending and under development.',
      status: 'Shipped',
    },
    {
      id: '4',
      title: 'LocalFirst',
      category: 'experiment',
      tagline: 'Exploring offline-first web apps',
      problem: 'Most apps break without internet. Can we build better?',
      approach:
        'Experimenting with local-first architecture. Building a note-taking app that works offline and syncs when ready.',
      outcome: 'Learning phase. Testing sync strategies and conflict resolution.',
      status: 'Building',
    },
    {
      id: '5',
      title: 'CodeConnect',
      category: 'project',
      tagline: 'Community-driven learning & mentorship platform',
      problem:
        'Tier-2 and Tier-3 college students often lack access to quality mentorship, real-world coding guidance, and structured support for projects and career growth.',
      approach:
        'Building a community-focused platform that provides doubt resolution, peer learning, mentorship, and guided support for coding, internships, and interview preparation—without gatekeeping or noise.',
      outcome:
        'MVP is under progress with a strong focus on accessibility, clarity, and practical learning outcomes.',
      status: 'Building',
    },
    {
      id: '6',
      title: 'API Playground',
      category: 'experiment',
      tagline: 'Testing ideas for developer tools',
      problem: 'Exploring better ways to test and debug APIs.',
      approach: 'Early prototype. Thinking through UX patterns and core features.',
      outcome: 'Validating the problem. Talking to potential users.',
      status: 'Exploring',
    },
  ];

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((project) => project.category === filter);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'project':
        return 'border-blue-500/30 bg-blue-500/10 text-blue-400';
      case 'experiment':
        return 'border-purple-500/30 bg-purple-500/10 text-purple-400';
      case 'client':
        return 'border-green-500/30 bg-green-500/10 text-green-400';
      default:
        return 'border-white/30 bg-white/10 text-white';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Shipped':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Building':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Exploring':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default:
        return 'bg-white/10 text-white border-white/20';
    }
  };

  return (
    <div className="pt-32 px-6 pb-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl mb-6">Builds & Experiments</h1>
          <p className="text-xl text-white/60 max-w-3xl">
            Projects we've shipped, experiments we're running, and work we've done
            with others. Everything here is real—no mockups, no vaporware.
          </p>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap gap-3 mb-12">
          <button
            onClick={() => setFilter('all')}
            className="px-4 py-2 rounded-full border border-white/20 bg-white/5 text-sm hover:bg-white/10 transition-colors"
          >
            All
          </button>
          <button
            onClick={() => setFilter('project')}
            className="px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm hover:bg-blue-500/20 transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => setFilter('experiment')}
            className="px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-sm hover:bg-purple-500/20 transition-colors"
          >
            Experiments
          </button>
          <button
            onClick={() => setFilter('client')}
            className="px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm hover:bg-green-500/20 transition-colors"
          >
            Client Work
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-4">
                <span
                  className={`px-3 py-1 rounded-full border text-xs ${getCategoryColor(
                    project.category
                  )}`}
                >
                  {project.category}
                </span>
                <span
                  className={`px-3 py-1 rounded-full border text-xs ${getStatusColor(
                    project.status
                  )}`}
                >
                  {project.status}
                </span>
              </div>

              <h3 className="text-xl mb-2 group-hover:text-white/80 transition-colors">
                {project.title}
              </h3>
              <p className="text-white/60 text-sm">{project.tagline}</p>

              <div className="mt-4 flex items-center text-sm text-white/40 group-hover:text-white/60 transition-colors">
                <span>View case</span>
                <ExternalLink size={14} className="ml-1" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-[#0a0a0a] border border-white/20 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-[#0a0a0a] border-b border-white/10 p-6 flex items-center justify-between">
              <h2 className="text-2xl">{selectedProject.title}</h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-8 space-y-8">
              <div>
                <p className="text-lg text-white/80 mb-4">
                  {selectedProject.tagline}
                </p>
                <div className="flex gap-3">
                  <span
                    className={`px-3 py-1 rounded-full border text-xs ${getCategoryColor(
                      selectedProject.category
                    )}`}
                  >
                    {selectedProject.category}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full border text-xs ${getStatusColor(
                      selectedProject.status
                    )}`}
                  >
                    {selectedProject.status}
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-xl mb-3 text-white/60">Problem</h3>
                <p className="text-white/80">{selectedProject.problem}</p>
              </div>

              <div>
                <h3 className="text-xl mb-3 text-white/60">Approach</h3>
                <p className="text-white/80">{selectedProject.approach}</p>
              </div>

              <div>
                <h3 className="text-xl mb-3 text-white/60">Outcome</h3>
                <p className="text-white/80">{selectedProject.outcome}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

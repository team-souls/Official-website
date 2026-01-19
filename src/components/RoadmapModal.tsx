import { X, CheckCircle2, Circle, Clock } from 'lucide-react';

interface RoadmapModalProps {
  onClose: () => void;
}

type RoadmapItem = {
  id: string;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'planned';
  quarter: string;
  category: string;
};

export function RoadmapModal({ onClose }: RoadmapModalProps) {
  const roadmapItems: RoadmapItem[] = [
    {
      id: '1',
      title: 'FlowState 1.0 Launch',
      description: 'Initial release of our focus timer with core features: timers, ambient sounds, and session tracking.',
      status: 'completed',
      quarter: 'Q4 2025',
      category: 'Product',
    },
    {
      id: '2',
      title: 'Team Collaboration Features',
      description: 'Add team workspaces, shared sessions, and collaborative focus modes to FlowState Pro.',
      status: 'in-progress',
      quarter: 'Q1 2026',
      category: 'Product',
    },
    {
      id: '3',
      title: 'DevKit Beta Launch',
      description: 'Launch beta version of our developer tools suite. Testing with early users to refine the experience.',
      status: 'in-progress',
      quarter: 'Q1 2026',
      category: 'Product',
    },
    {
      id: '4',
      title: 'API Integration Platform',
      description: 'Build a platform for testing and debugging APIs with better UX patterns.',
      status: 'planned',
      quarter: 'Q2 2026',
      category: 'Experiment',
    },
    {
      id: '5',
      title: 'Open Source Contributions',
      description: 'Release more of our internal tools and libraries as open source projects for the community.',
      status: 'planned',
      quarter: 'Q2 2026',
      category: 'Community',
    },
    {
      id: '6',
      title: 'Mobile Apps',
      description: 'Bring FlowState and DevKit to iOS and Android with native experiences.',
      status: 'planned',
      quarter: 'Q3 2026',
      category: 'Product',
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="text-green-400" size={20} />;
      case 'in-progress':
        return <Clock className="text-yellow-400" size={20} />;
      case 'planned':
        return <Circle className="text-white/40" size={20} />;
      default:
        return <Circle className="text-white/40" size={20} />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'in-progress':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'planned':
        return 'bg-white/10 text-white/60 border-white/20';
      default:
        return 'bg-white/10 text-white/60 border-white/20';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Shipped';
      case 'in-progress':
        return 'In Progress';
      case 'planned':
        return 'Planned';
      default:
        return status;
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
      onClick={onClose}
    >
      <div
        className="bg-[#0a0a0a] border border-white/20 rounded-2xl max-w-4xl w-full max-h-[85vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="border-b border-white/10 p-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl mb-1">Product Roadmap</h2>
            <p className="text-sm text-white/60">What we're building and what's next</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <div className="mb-6 flex gap-3 flex-wrap">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-sm">
              <CheckCircle2 size={16} />
              <span>Shipped</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 text-sm">
              <Clock size={16} />
              <span>In Progress</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/60 text-sm">
              <Circle size={16} />
              <span>Planned</span>
            </div>
          </div>

          <div className="space-y-4">
            {roadmapItems.map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-start gap-3 flex-1">
                    <div className="mt-0.5">
                      {getStatusIcon(item.status)}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg mb-1">{item.title}</h3>
                      <p className="text-sm text-white/60">{item.description}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 mt-4 flex-wrap">
                  <span className={`px-3 py-1 rounded-full border text-xs ${getStatusColor(item.status)}`}>
                    {getStatusLabel(item.status)}
                  </span>
                  <span className="px-3 py-1 rounded-full border border-white/20 bg-white/5 text-xs text-white/60">
                    {item.quarter}
                  </span>
                  <span className="px-3 py-1 rounded-full border border-white/20 bg-white/5 text-xs text-white/60">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 rounded-xl bg-white/[0.02] border border-white/10 text-center">
            <p className="text-white/60 mb-4">
              This roadmap is always evolving based on user feedback and our learnings. 
              Have ideas or suggestions?
            </p>
            <a
              href="mailto:hello@teamsouls.co?subject=Roadmap Feedback"
              className="inline-block px-6 py-3 bg-white text-black rounded-lg hover:bg-white/90 transition-colors"
            >
              Share Your Thoughts
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

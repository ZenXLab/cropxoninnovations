import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, ShieldCheck, Users, Settings, Boxes, Building2, 
  GraduationCap, FlaskConical, Zap, Clock, RefreshCw, Wallet,
  ArrowRight, ArrowLeft, CheckCircle2, X, Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Progress } from '@/components/ui/progress';

interface Question {
  id: string;
  question: string;
  subtitle: string;
  options: {
    label: string;
    description: string;
    platforms: string[];
  }[];
}

const questions: Question[] = [
  {
    id: 'focus',
    question: 'What is your primary focus area?',
    subtitle: 'Select the area that best matches your needs',
    options: [
      { 
        label: 'Software Development & Engineering', 
        description: 'Building, testing, and deploying software',
        platforms: ['cognix', 'qualyx', 'opzenix', 'convertix']
      },
      { 
        label: 'Business Operations & Management', 
        description: 'Running and optimizing business processes',
        platforms: ['huminex', 'traceflow', 'finioraa', 'zenith-core']
      },
      { 
        label: 'Innovation & Research', 
        description: 'Exploring new technologies and solutions',
        platforms: ['originx-labs', 'proxinex', 'cognix']
      },
      { 
        label: 'Personal Productivity', 
        description: 'Managing personal tasks and information',
        platforms: ['chronyx', 'convertix']
      },
    ],
  },
  {
    id: 'team-size',
    question: 'What is your team or organization size?',
    subtitle: 'This helps us recommend the right scale',
    options: [
      { 
        label: 'Individual / Solo', 
        description: 'Just myself',
        platforms: ['chronyx', 'convertix', 'proxinex']
      },
      { 
        label: 'Small Team (2-20)', 
        description: 'Startup or small business',
        platforms: ['qualyx', 'opzenix', 'zenith-core', 'convertix', 'proxinex']
      },
      { 
        label: 'Medium (21-200)', 
        description: 'Growing organization',
        platforms: ['cognix', 'qualyx', 'huminex', 'opzenix', 'traceflow', 'finioraa']
      },
      { 
        label: 'Enterprise (200+)', 
        description: 'Large organization',
        platforms: ['cognix', 'qualyx', 'huminex', 'opzenix', 'traceflow', 'zenith-core', 'finioraa']
      },
    ],
  },
  {
    id: 'priority',
    question: 'What is your top priority?',
    subtitle: 'Choose what matters most to you',
    options: [
      { 
        label: 'AI & Automation', 
        description: 'Leveraging artificial intelligence',
        platforms: ['cognix', 'proxinex', 'opzenix', 'originx-labs']
      },
      { 
        label: 'Quality & Compliance', 
        description: 'Ensuring standards and regulations',
        platforms: ['qualyx', 'traceflow', 'finioraa']
      },
      { 
        label: 'Efficiency & Cost Savings', 
        description: 'Optimizing resources and reducing costs',
        platforms: ['proxinex', 'convertix', 'opzenix', 'huminex']
      },
      { 
        label: 'Learning & Growth', 
        description: 'Education and skill development',
        platforms: ['zenith-institute', 'originx-labs']
      },
    ],
  },
  {
    id: 'integration',
    question: 'What existing systems do you need to integrate?',
    subtitle: 'Select your current infrastructure',
    options: [
      { 
        label: 'Cloud Infrastructure (AWS, GCP, Azure)', 
        description: 'Major cloud providers',
        platforms: ['opzenix', 'traceflow', 'cognix']
      },
      { 
        label: 'HR & Business Systems', 
        description: 'ERP, HRMS, CRM systems',
        platforms: ['huminex', 'finioraa', 'zenith-core']
      },
      { 
        label: 'Development Tools (GitHub, CI/CD)', 
        description: 'Code repositories and pipelines',
        platforms: ['cognix', 'qualyx', 'opzenix']
      },
      { 
        label: 'No specific integration needed', 
        description: 'Standalone solution',
        platforms: ['chronyx', 'convertix', 'zenith-institute', 'proxinex']
      },
    ],
  },
];

const platforms = [
  { id: 'cognix', name: 'Cognix', icon: Brain, color: 'hsl(220, 70%, 55%)', href: '/cognix', description: 'AI-powered codebase intelligence' },
  { id: 'qualyx', name: 'Qualyx', icon: ShieldCheck, color: 'hsl(175, 60%, 45%)', href: '/qualyx', description: 'QA automation & quality intelligence' },
  { id: 'huminex', name: 'Huminex', icon: Users, color: 'hsl(340, 65%, 55%)', href: '/huminex', description: 'Workforce OS & human intelligence' },
  { id: 'opzenix', name: 'OpZeniX', icon: Settings, color: 'hsl(260, 60%, 58%)', href: '/opzenix', description: 'DevOps, MLOps & AIOps platform' },
  { id: 'traceflow', name: 'TraceFlow', icon: Boxes, color: 'hsl(200, 70%, 50%)', href: '/traceflow', description: 'Digital cognition & infrastructure' },
  { id: 'zenith-core', name: 'Zenith Studio', icon: Building2, color: 'hsl(280, 55%, 55%)', href: '/zenith-studio', description: 'Business & content creation platform' },
  { id: 'zenith-institute', name: 'Zenith Institute', icon: GraduationCap, color: 'hsl(145, 55%, 45%)', href: '/zenith-institute', description: 'Learning & certification programs' },
  { id: 'originx-labs', name: 'OriginX Labs', icon: FlaskConical, color: 'hsl(25, 75%, 52%)', href: '/originx-labs', description: 'Research & advanced innovation' },
  { id: 'proxinex', name: 'Proxinex', icon: Zap, color: 'hsl(45, 85%, 50%)', href: '/proxinex', description: 'AI model routing & control' },
  { id: 'chronyx', name: 'Chronyx', icon: Clock, color: 'hsl(190, 70%, 50%)', href: '/chronyx', description: 'Personal quiet space (PQS)' },
  { id: 'convertix', name: 'Convertix', icon: RefreshCw, color: 'hsl(320, 70%, 55%)', href: '/convertix', description: 'Conversion operating studio' },
  { id: 'finioraa', name: 'Finioraa', icon: Wallet, color: 'hsl(130, 65%, 45%)', href: '/finioraa', description: 'Financial intelligence platform' },
];

interface PlatformWizardProps {
  isOpen: boolean;
  onClose: () => void;
}

const PlatformWizard = ({ isOpen, onClose }: PlatformWizardProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);

  const handleSelect = (questionId: string, optionIndex: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
    
    if (currentStep < questions.length - 1) {
      setTimeout(() => setCurrentStep(prev => prev + 1), 300);
    } else {
      setTimeout(() => setShowResults(true), 300);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
  };

  // Calculate recommended platforms based on answers
  const getRecommendedPlatforms = () => {
    const scores: Record<string, number> = {};
    
    Object.entries(answers).forEach(([questionId, optionIndex]) => {
      const question = questions.find(q => q.id === questionId);
      if (question) {
        const selectedOption = question.options[optionIndex];
        selectedOption.platforms.forEach(platformId => {
          scores[platformId] = (scores[platformId] || 0) + 1;
        });
      }
    });

    return platforms
      .map(p => ({ ...p, score: scores[p.id] || 0 }))
      .filter(p => p.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 4);
  };

  const progress = ((currentStep + 1) / questions.length) * 100;
  const currentQuestion = questions[currentStep];
  const recommendedPlatforms = showResults ? getRecommendedPlatforms() : [];

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-auto bg-card/98 backdrop-blur-xl border-border/30">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              <DialogTitle className="font-display text-lg font-semibold">
                Platform Discovery Wizard
              </DialogTitle>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </DialogHeader>

        {!showResults ? (
          <div className="space-y-6">
            {/* Progress */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Question {currentStep + 1} of {questions.length}</span>
                <span>{Math.round(progress)}% complete</span>
              </div>
              <Progress value={progress} className="h-1.5" />
            </div>

            {/* Question */}
            <div className="space-y-2">
              <h3 className="font-display text-xl font-semibold text-foreground">
                {currentQuestion.question}
              </h3>
              <p className="text-sm text-muted-foreground">
                {currentQuestion.subtitle}
              </p>
            </div>

            {/* Options */}
            <div className="grid gap-3">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleSelect(currentQuestion.id, index)}
                  className={`group relative p-4 rounded-xl border text-left transition-all duration-300 ${
                    answers[currentQuestion.id] === index
                      ? 'border-primary bg-primary/5 ring-2 ring-primary/20'
                      : 'border-border/30 hover:border-border/60 hover:bg-muted/30'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                      answers[currentQuestion.id] === index
                        ? 'border-primary bg-primary'
                        : 'border-muted-foreground/30'
                    }`}>
                      {answers[currentQuestion.id] === index && (
                        <CheckCircle2 className="w-3 h-3 text-primary-foreground" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{option.label}</p>
                      <p className="text-sm text-muted-foreground mt-0.5">{option.description}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex justify-between pt-4 border-t border-border/20">
              <Button
                variant="ghost"
                onClick={handleBack}
                disabled={currentStep === 0}
                className="gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>
              <Button variant="ghost" onClick={handleReset}>
                Start Over
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Results Header */}
            <div className="text-center space-y-2">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-2">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">
                Your Recommended Platforms
              </h3>
              <p className="text-sm text-muted-foreground">
                Based on your answers, here are the best Cropxon platforms for you
              </p>
            </div>

            {/* Recommended Platforms */}
            <div className="grid gap-3">
              {recommendedPlatforms.map((platform, index) => {
                const Icon = platform.icon;
                const matchPercentage = Math.round((platform.score / Object.keys(answers).length) * 100);
                
                return (
                  <Link
                    key={platform.id}
                    to={platform.href}
                    onClick={onClose}
                    className="group relative p-4 rounded-xl border border-border/30 hover:border-border/60 bg-background/50 hover:bg-muted/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ 
                          background: `linear-gradient(135deg, ${platform.color.replace(')', ' / 0.2)')}, transparent)`,
                          borderColor: platform.color.replace(')', ' / 0.3)'),
                        }}
                      >
                        <Icon className="w-6 h-6" style={{ color: platform.color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-display font-semibold text-foreground">
                            {platform.name}
                          </span>
                          {index === 0 && (
                            <span className="px-2 py-0.5 text-[10px] font-medium bg-primary/10 text-primary rounded-full">
                              Best Match
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground truncate">
                          {platform.description}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-lg font-bold" style={{ color: platform.color }}>
                          {matchPercentage}%
                        </span>
                        <p className="text-[10px] text-muted-foreground">match</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Actions */}
            <div className="flex justify-center gap-3 pt-4 border-t border-border/20">
              <Button variant="outline" onClick={handleReset} className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Retake Quiz
              </Button>
              <Link to="/platforms" onClick={onClose}>
                <Button className="gap-2">
                  View All Platforms
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PlatformWizard;

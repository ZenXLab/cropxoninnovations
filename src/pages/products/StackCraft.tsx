import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/BackToTop";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { 
  GraduationCap, Users, Globe, Award, Briefcase, Target, BookOpen, Layers, CheckCircle, Building2, ArrowRight, Sparkles
} from "lucide-react";

const stats = [
  { icon: Building2, label: "Backed By", value: "CropXon Labs" },
  { icon: Users, label: "Engineers", value: "500+ Trained" },
  { icon: Globe, label: "Global", value: "Remote Ready" },
  { icon: Award, label: "Certified", value: "Verified Skills" },
];

const values = [
  { icon: Briefcase, title: "Real Experience Over Theory", description: "We believe in learning by doing. Every program includes hands-on lab work on real production systems." },
  { icon: Target, title: "Roles, Not Languages", description: "We train for engineering roles — the skills, mindset, and practices that companies actually need." },
  { icon: Award, title: "Industry-Backed Credentials", description: "Our certificates represent real work, verified by employers. Not just course completion stamps." },
  { icon: Globe, title: "Accessible Excellence", description: "World-class engineering education accessible to anyone, anywhere in India." },
];

const team = [
  { icon: GraduationCap, title: "Engineering Leadership", role: "Program Design & Curriculum", description: "Senior engineers from top tech companies who design and validate our curriculum." },
  { icon: Users, title: "Lab Mentors", role: "Hands-on Guidance", description: "Experienced practitioners who guide students through real-world projects and challenges." },
  { icon: Briefcase, title: "Industry Partners", role: "Hiring & Placement", description: "Companies who trust StackCraft graduates and actively hire from our programs." },
  { icon: Building2, title: "CropXon Innovations", role: "Parent Company", description: "The backing organization that provides labs, resources, and industry connections." },
];

const StackCraft = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: missionRef, isVisible: missionVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: poweredRef, isVisible: poweredVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: teamRef, isVisible: teamVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <>
      <SEOHead
        title="StackCraft — Engineering Knowledge Platform by CropXon"
        description="StackCraft is a public engineering knowledge platform focused on production-grade software engineering. Playbooks, learning paths, AI-assisted education — a learning division of CropXon Innovations Pvt Ltd."
        keywords="software engineering, production engineering, learning platform, engineering playbooks, AI learning, platform engineering, CropXon StackCraft"
        url="https://cropxon.com/stackcraft"
        type="website"
      />
      <Navigation />
      <main className="min-h-screen bg-background pt-16">
        {/* Hero Section */}
        <section ref={heroRef} className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
            <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
                <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-xs font-mono text-primary tracking-wider">ENGINEERING KNOWLEDGE PLATFORM</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground mb-6">
                Production-grade<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">engineering knowledge.</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                StackCraft is a learning division of CropXon Innovations Pvt Ltd. We create playbooks, learning paths, and AI-assisted education for engineers who build at scale.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="group">Explore Learning Paths<ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" /></Button>
                <Button variant="outline" size="lg" asChild><Link to="/contact">Contact Us</Link></Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section ref={statsRef} className="py-12 border-y border-border bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {stats.map((stat, index) => (
                <div key={stat.label} className={`text-center transition-all duration-700 ${statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${index * 100}ms` }}>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4"><stat.icon className="w-6 h-6 text-primary" /></div>
                  <div className="font-display text-xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-xs font-mono text-muted-foreground tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section ref={missionRef} className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className={`max-w-4xl mx-auto transition-all duration-1000 ${missionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
              <div className="flex items-center gap-3 mb-6"><div className="h-px flex-1 bg-border" /><span className="text-xs font-mono text-muted-foreground tracking-widest">A LEARNING DIVISION OF CROPXON INNOVATIONS</span><div className="h-px flex-1 bg-border" /></div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground text-center mb-6">Building Engineers</h2>
              <div className="bg-card rounded-2xl border border-border p-8 lg:p-12">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4 flex items-center gap-3"><Target className="w-6 h-6 text-primary" />Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">To build the most production-relevant engineering knowledge platform. Where engineers don't just complete courses — they gain real experience, real skills, and real confidence.</p>
                <blockquote className="relative pl-6 border-l-4 border-primary italic text-foreground">
                  <span className="text-lg">"StackCraft teaches engineering roles, not programming languages."</span>
                  <footer className="mt-3 text-sm text-muted-foreground not-italic">This single principle separates us from 99% of learning platforms.</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section ref={valuesRef} className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className={`text-center mb-12 transition-all duration-700 ${valuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}><h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Values</h2></div>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {values.map((value, index) => (
                <div key={value.title} className={`group bg-card rounded-xl border border-border p-6 lg:p-8 hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${valuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${index * 100}ms` }}>
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors shrink-0"><value.icon className="w-6 h-6 text-primary" /></div>
                    <div><h3 className="font-display text-lg font-semibold text-foreground mb-2">{value.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Powered by CropXon Section */}
        <section ref={poweredRef} className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className={`max-w-4xl mx-auto transition-all duration-1000 ${poweredVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
              <div className="bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-2xl border border-border p-8 lg:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6"><Layers className="w-8 h-8 text-primary" /><h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground">Powered by CropXon Innovations</h2></div>
                  <p className="text-muted-foreground leading-relaxed mb-6">StackCraft is a learning division of CropXon Innovations Pvt Ltd, a technology company building enterprise software products and solutions.</p>
                  <div className="flex items-center justify-center gap-4 pt-6 border-t border-border">
                    <div className="text-4xl font-display text-primary">⚡</div>
                    <div className="text-center"><div className="font-display text-xl font-bold text-foreground">STACKCRAFT™</div><div className="text-xs font-mono text-muted-foreground">by CropXon Innovations Pvt Ltd</div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section ref={teamRef} className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className={`text-center mb-12 transition-all duration-700 ${teamVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}><h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">Who Makes StackCraft Work</h2></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {team.map((member, index) => (
                <div key={member.title} className={`group bg-card rounded-xl border border-border p-6 hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 text-center ${teamVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${index * 100}ms` }}>
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors mx-auto mb-4"><member.icon className="w-7 h-7 text-primary" /></div>
                  <h3 className="font-display text-base font-semibold text-foreground mb-1">{member.title}</h3>
                  <div className="text-xs font-mono text-primary mb-3">{member.role}</div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section ref={ctaRef} className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6">From India, For The World</h2>
              <p className="text-muted-foreground leading-relaxed mb-10">StackCraft exists to fill the gap. We're building a knowledge platform that produces engineers capable of working at any company in the world — or building their own global products.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="group">Start Your Journey<ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" /></Button>
                <Button variant="outline" size="lg" asChild><Link to="/">Back to CropXon</Link></Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
      <style>{`@keyframes gradient { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }`}</style>
    </>
  );
};

export default StackCraft;

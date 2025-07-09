'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  ShieldCheck,
  Sparkles,
  Hammer,
  Eye,
  ArrowRight,
  Calendar,
  CheckCircle,
  Globe,
  Zap
} from 'lucide-react';

const roles = [
  {
    title: 'Project Owner',
    description: 'Initiate projects, track progress, and collaborate with your construction team in real-time.',
    href: '/client/dashboard',
    icon: Sparkles,
    features: ['Project Planning', 'Progress Tracking', 'Team Communication', 'Budget Management'],
    badge: 'Most Popular',
    color: 'from-blue-500 to-purple-600'
  },
  {
    title: 'Construction Professional',
    description: 'Manage assignments, update progress, and streamline your construction workflows.',
    href: '/builder/dashboard',
    icon: Hammer,
    features: ['Task Management', 'Progress Reports', 'Resource Planning', 'Quality Control'],
    badge: 'For Professionals',
    color: 'from-orange-500 to-red-600'
  },
  {
    title: 'System Administrator',
    description: 'Oversee platform operations, manage users, and access comprehensive analytics.',
    href: '/admin/dashboard',
    icon: ShieldCheck,
    features: ['User Management', 'System Analytics', 'Platform Configuration', 'Security Control'],
    badge: 'Full Access',
    color: 'from-green-500 to-teal-600'
  },
  {
    title: 'Project Observer',
    description: 'Monitor project progress with stakeholder-friendly views and reporting.',
    href: '/viewer/dashboard',
    icon: Eye,
    features: ['Progress Monitoring', 'Status Reports', 'Timeline View', 'Budget Overview'],
    badge: 'Stakeholder View',
    color: 'from-gray-500 to-slate-600'
  },
];

const features = [
  {
    icon: Zap,
    title: 'Real-time Collaboration',
    description: 'Instant updates and communication across all project stakeholders'
  },
  {
    icon: Calendar,
    title: 'Smart Scheduling',
    description: 'AI-powered project timelines and milestone tracking'
  },
  {
    icon: Globe,
    title: 'Mobile-First Design',
    description: 'Access your projects anywhere, anytime on any device'
  }
];

export default function BuildOSDemo() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Hammer className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">BuildOS</h1>
                <p className="text-xs text-slate-500">by CodeSetu</p>
              </div>
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
              Live Demo
            </Badge>
          </div>
        </header>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-5xl font-bold text-slate-900 mb-6">
              Transform Your Construction
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Management</span>
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Experience the future of construction project management. BuildOS streamlines every aspect of your building projects with intelligent automation, real-time collaboration, and comprehensive oversight.
            </p>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-200">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Choose Your Role to Explore</h3>
              <p className="text-slate-600 mb-8">Select a role below to experience how BuildOS transforms construction management for different stakeholders.</p>

              {/* Role Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {roles.map((role, index) => (
                  <>
                    <Card
                      className={`relative overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl border-2 ${hoveredCard === index ? 'border-blue-300 shadow-lg' : 'border-slate-200'
                        }`}
                      onMouseEnter={() => setHoveredCard(index)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${role.color} opacity-5`} />

                      <CardHeader className="relative">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${role.color} flex items-center justify-center`}>
                              <role.icon className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <CardTitle className="text-lg">{role.title}</CardTitle>
                              <Badge variant="outline" className="text-xs mt-1">
                                {role.badge}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <CardDescription className="text-sm leading-relaxed">
                          {role.description}
                        </CardDescription>
                      </CardHeader>

                      <CardContent>
                        <div className="space-y-2">
                          {role.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </CardContent>

                      <CardFooter>
                        <Button
                          className="w-full group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                          asChild
                        >
                          <a href={role.href} className="flex items-center justify-center gap-2">
                            Explore Dashboard
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  </>
                ))}
              </div>
            </div>
          </div>

          {/* Features Section */}
          <section className="mt-20">
            <h3 className="text-3xl font-bold text-center text-slate-900 mb-12">
              Why Choose BuildOS?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-2">{feature.title}</h4>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>
        </section>

        {/* Footer */}
        <footer className="bg-white border-t border-slate-200 mt-20">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center gap-3 mb-4 md:mb-0">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Hammer className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">BuildOS Demo</div>
                  <div className="text-sm text-slate-500">Powered by CodeSetu</div>
                </div>
              </div>
              <div className="text-sm text-slate-500">
                © {new Date().getFullYear()} CodeSetu. Ready to transform your construction business?
              </div>
            </div>
          </div>
        </footer>
      </div>
  );
}
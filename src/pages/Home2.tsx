import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {Header} from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Cloud, Building2, BarChart3, Smartphone, Shield, CheckCircle2 } from 'lucide-react';
import heroIllustration from '@/assets/hero_illustration_brand.png';
import technologyEcosystem from '@/assets/technology_ecosystem_brand.png';

gsap.registerPlugin(ScrollTrigger);

const Home2 = () => {
    useEffect(() => {
        // Hero animations
        gsap.from('.hero-content', {
            opacity: 0,
            y: 30,
            duration: 0.8,
            delay: 0.2,
        });

        gsap.from('.hero-illustration', {
            opacity: 0,
            x: 50,
            duration: 1,
            delay: 0.4,
        });

        // Section animations
        gsap.utils.toArray('.animate-section').forEach((section: any) => {
            gsap.from(section, {
                opacity: 0,
                y: 50,
                duration: 0.6,
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                },
            });
        });
    }, []);

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            {/* Hero Section with Brand Colors */}
            <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: 'linear-gradient(135deg, var(--ice) 0%, hsl(0 0% 100%) 100%)' }}>
                <div className="absolute inset-0 bg-dot-pattern opacity-30" />

                <div className="section-container relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="hero-content space-y-8">
                            {/* Client Logo Bar */}
                            <div className="flex gap-4 mb-6 opacity-60">
                                <div className="text-xs font-medium" style={{ color: 'var(--navy)' }}>Trusted by leading enterprises</div>
                            </div>

                            <div className="space-y-6">
                                <h1 className="text-5xl xl:text-6xl font-bold leading-tight" style={{ color: 'var(--navy)' }}>
                                    Transform Business Operations with AI-Powered Solutions
                                </h1>

                                <p className="text-xl" style={{ color: 'var(--charcoal)' }}>
                                    Reduce operational costs by 40%, accelerate digital transformation, and unlock data-driven insights across your enterprise
                                </p>

                                <div className="flex flex-wrap gap-4 pt-4">
                                    <Button
                                        size="lg"
                                        className="text-white font-semibold"
                                        style={{ background: 'linear-gradient(135deg, var(--navy) 0%, var(--charcoal) 100%)' }}
                                    >
                                        Explore Solutions <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        style={{ borderColor: 'var(--charcoal)', color: 'var(--navy)' }}
                                    >
                                        Watch Demo
                                    </Button>
                                </div>

                                {/* Quick Stats */}
                                <div className="grid grid-cols-3 gap-6 pt-8">
                                    <div>
                                        <div className="text-3xl font-bold" style={{ color: 'var(--navy)' }}>15+</div>
                                        <div className="text-sm" style={{ color: 'var(--charcoal)' }}>Years Experience</div>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold" style={{ color: 'var(--navy)' }}>500+</div>
                                        <div className="text-sm" style={{ color: 'var(--charcoal)' }}>Projects Delivered</div>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold" style={{ color: 'var(--navy)' }}>98%</div>
                                        <div className="text-sm" style={{ color: 'var(--charcoal)' }}>Client Satisfaction</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Illustration */}
                        <div className="hero-illustration relative">
                            <img
                                src={heroIllustration}
                                alt="AI-Powered Enterprise Platform"
                                className="w-full h-auto drop-shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Solutions Section - Bento Grid Layout */}
            <section className="section-padding animate-section" style={{ background: 'hsl(0 0% 100%)' }}>
                <div className="section-container">
                    <div className="section-header">
                        <h2 style={{ color: 'var(--navy)' }}>Our Solutions</h2>
                        <p className="text-xl mt-4" style={{ color: 'var(--charcoal)' }}>
                            End-to-end technology solutions designed to drive measurable business outcomes
                        </p>
                    </div>

                    {/* Bento Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Featured Large Card - Intelligence & AI */}
                        <div
                            className="md:col-span-2 md:row-span-2 p-8 rounded-2xl border-2 transition-all hover:shadow-xl"
                            style={{
                                borderColor: 'var(--charcoal)',
                                background: 'linear-gradient(135deg, var(--ice) 0%, hsl(0 0% 100%) 100%)'
                            }}
                        >
                            <div className="flex items-start gap-4 mb-6">
                                <div
                                    className="p-4 rounded-xl"
                                    style={{ background: 'linear-gradient(135deg, var(--navy) 0%, var(--charcoal) 100%)' }}
                                >
                                    <Brain className="h-8 w-8 text-white" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--navy)' }}>
                                        Intelligence & AI
                                    </h3>
                                    <p className="text-base" style={{ color: 'var(--charcoal)' }}>
                                        Harness the power of artificial intelligence to transform your business operations
                                    </p>
                                </div>
                            </div>

                            <ul className="space-y-3">
                                {['Predictive Analytics & Decisioning', 'Natural Language Processing (NLP)', 'Machine Learning Models', 'Computer Vision & Image Recognition'].map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--charcoal)' }} />
                                        <span style={{ color: 'var(--navy)' }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Business Platforms */}
                        <div className="p-6 rounded-2xl border-2 transition-all hover:shadow-lg bg-white" style={{ borderColor: 'var(--charcoal)' }}>
                            <div className="p-3 rounded-lg w-fit mb-4" style={{ background: 'var(--ice)' }}>
                                <Building2 className="h-6 w-6" style={{ color: 'var(--navy)' }} />
                            </div>
                            <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--navy)' }}>Business Platforms</h3>
                            <ul className="space-y-2 text-sm">
                                {['ERP & CRM Integration', 'Scalable Architecture', 'Workflow Optimization'].map((item) => (
                                    <li key={item} className="flex items-start gap-2">
                                        <span className="text-xs mt-1">•</span>
                                        <span style={{ color: 'var(--charcoal)' }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Automation & Cloud */}
                        <div className="p-6 rounded-2xl border-2 transition-all hover:shadow-lg bg-white" style={{ borderColor: 'var(--charcoal)' }}>
                            <div className="p-3 rounded-lg w-fit mb-4" style={{ background: 'var(--ice)' }}>
                                <Cloud className="h-6 w-6" style={{ color: 'var(--navy)' }} />
                            </div>
                            <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--navy)' }}>Automation & Cloud</h3>
                            <ul className="space-y-2 text-sm">
                                {['Cloud Migration', 'Process Automation (RPA)', 'DevOps Solutions'].map((item) => (
                                    <li key={item} className="flex items-start gap-2">
                                        <span className="text-xs mt-1">•</span>
                                        <span style={{ color: 'var(--charcoal)' }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Digital Experience */}
                        <div className="p-6 rounded-2xl border-2 transition-all hover:shadow-lg bg-white" style={{ borderColor: 'var(--charcoal)' }}>
                            <div className="p-3 rounded-lg w-fit mb-4" style={{ background: 'var(--ice)' }}>
                                <Smartphone className="h-6 w-6" style={{ color: 'var(--navy)' }} />
                            </div>
                            <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--navy)' }}>Digital Experience</h3>
                            <ul className="space-y-2 text-sm">
                                {['User-Centric Design (UX/UI)', 'Omnichannel Engagement', 'Personalized Content'].map((item) => (
                                    <li key={item} className="flex items-start gap-2">
                                        <span className="text-xs mt-1">•</span>
                                        <span style={{ color: 'var(--charcoal)' }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Growth & Commerce */}
                        <div className="p-6 rounded-2xl border-2 transition-all hover:shadow-lg bg-white" style={{ borderColor: 'var(--charcoal)' }}>
                            <div className="p-3 rounded-lg w-fit mb-4" style={{ background: 'var(--ice)' }}>
                                <BarChart3 className="h-6 w-6" style={{ color: 'var(--navy)' }} />
                            </div>
                            <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--navy)' }}>Growth & Commerce</h3>
                            <ul className="space-y-2 text-sm">
                                {['E-commerce Solutions', 'Data-Driven Marketing', 'Revenue Optimization'].map((item) => (
                                    <li key={item} className="flex items-start gap-2">
                                        <span className="text-xs mt-1">•</span>
                                        <span style={{ color: 'var(--charcoal)' }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Enhanced WhyITG Stats Section */}
            <section className="section-padding animate-section" style={{ background: 'var(--ice)' }}>
                <div className="section-container">
                    <div className="section-header">
                        <h2 style={{ color: 'var(--navy)' }}>Why Choose ITG</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {[
                            { value: '15+', label: 'Years of Excellence', icon: '🏆' },
                            { value: '500+', label: 'Successful Projects', icon: '✨' },
                            { value: '98%', label: 'Client Satisfaction', icon: '❤️' },
                            { value: '24/7', label: 'Support Available', icon: '🚀' }
                        ].map((stat) => (
                            <div
                                key={stat.label}
                                className="p-8 rounded-2xl border-2 bg-white text-center transition-all hover:scale-105"
                                style={{ borderColor: 'var(--charcoal)' }}
                            >
                                <div className="text-5xl mb-2">{stat.icon}</div>
                                <div className="text-6xl font-bold mb-2" style={{ color: 'var(--navy)' }}>
                                    {stat.value}
                                </div>
                                <div className="text-sm font-medium" style={{ color: 'var(--charcoal)' }}>
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Benefits Checklist */}
                    <div className="bg-white rounded-2xl p-8 border-2" style={{ borderColor: 'var(--charcoal)' }}>
                        <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--navy)' }}>What Sets Us Apart</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                'Enterprise-grade security and compliance',
                                'Proven track record across industries',
                                'Dedicated support and training',
                                'Scalable solutions that grow with you',
                                'Cutting-edge technology stack',
                                'Transparent pricing and timelines'
                            ].map((benefit) => (
                                <div key={benefit} className="flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--charcoal)' }} />
                                    <span style={{ color: 'var(--navy)' }}>{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Who We Are Section with Ecosystem Diagram */}
            <section className="section-padding animate-section bg-white">
                <div className="section-container">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left - Ecosystem Diagram */}
                        <div className="relative">
                            <img
                                src={technologyEcosystem}
                                alt="ITG Technology Ecosystem"
                                className="w-full h-auto"
                            />
                        </div>

                        {/* Right - Content */}
                        <div className="space-y-6">
                            <h2 style={{ color: 'var(--navy)' }}>Who We Are</h2>
                            <p className="text-lg" style={{ color: 'var(--charcoal)' }}>
                                ITG Technologies is a global leader in digital transformation, delivering innovative solutions that empower enterprises to thrive in the digital age.
                            </p>

                            {/* Technology Stack Icons */}
                            <div className="grid grid-cols-3 gap-4 pt-4">
                                {[
                                    { icon: Brain, label: 'AI & ML' },
                                    { icon: Cloud, label: 'Cloud' },
                                    { icon: Building2, label: 'Enterprise' },
                                    { icon: BarChart3, label: 'Analytics' },
                                    { icon: Smartphone, label: 'Mobile' },
                                    { icon: Shield, label: 'Security' }
                                ].map(({ icon: Icon, label }) => (
                                    <div key={label} className="text-center p-4 rounded-lg" style={{ background: 'var(--ice)' }}>
                                        <Icon className="h-8 w-8 mx-auto mb-2" style={{ color: 'var(--navy)' }} />
                                        <div className="text-xs font-medium" style={{ color: 'var(--charcoal)' }}>{label}</div>
                                    </div>
                                ))}
                            </div>

                            {/* By the Numbers */}
                            <div className="grid grid-cols-2 gap-4 pt-4">
                                <div className="p-4 rounded-lg bg-white border-2" style={{ borderColor: 'var(--charcoal)' }}>
                                    <div className="text-2xl font-bold" style={{ color: 'var(--navy)' }}>Global Reach</div>
                                    <div className="text-sm mt-1" style={{ color: 'var(--charcoal)' }}>30+ Countries</div>
                                </div>
                                <div className="p-4 rounded-lg bg-white border-2" style={{ borderColor: 'var(--charcoal)' }}>
                                    <div className="text-2xl font-bold" style={{ color: 'var(--navy)' }}>Expert Team</div>
                                    <div className="text-sm mt-1" style={{ color: 'var(--charcoal)' }}>200+ Specialists</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Home2;

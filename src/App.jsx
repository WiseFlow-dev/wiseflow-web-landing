/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Wallet, PieChart, MessageSquareText, TrendingUp, CalendarDays, ArrowRight, ShieldCheck, Zap, XCircle, CheckCircle2, Trophy, Users, Activity, Sparkles } from 'lucide-react';


gsap.registerPlugin(ScrollTrigger);

// ==========================================
// A. NAVBAR - Clean & Glassy
// ==========================================
const Navbar = ({ onOpenWaitlist }) => {
  const navRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: 'body',
        start: '150px top',
        onEnter: () => gsap.to(navRef.current, { backgroundColor: 'rgba(255, 255, 255, 0.04)', backdropFilter: 'blur(24px)', border: '1px solid rgba(255, 255, 255, 0.1)', duration: 0.4 }),
        onLeaveBack: () => gsap.to(navRef.current, { backgroundColor: 'transparent', backdropFilter: 'blur(0px)', border: '1px solid transparent', duration: 0.4 })
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-5xl rounded-3xl px-6 py-4 flex items-center justify-between transition-colors duration-400 text-textMain" ref={navRef}>
      <div className="flex items-center gap-3">
        <div className="font-heading font-bold text-xl tracking-tight">
          <span className="text-textMain">Wise</span>
          <span className="text-primary">Flow</span>
        </div>
      </div>
      <div className="hidden md:flex gap-8 font-heading text-sm text-textSub font-medium">
        <a href="#features" className="hover:text-textMain transition-colors">Features</a>
        <a href="#intelligence" className="hover:text-textMain transition-colors">Intelligence</a>
        <a href="#security" className="hover:text-textMain transition-colors">Security</a>
      </div>
      <button
        onClick={onOpenWaitlist}
        className="bg-primary text-background px-5 py-2.5 rounded-full font-heading font-semibold text-sm hover:scale-[1.03] transition-transform flex items-center gap-2 overflow-hidden group"
      >
        <span className="relative z-10">Join Waitlist</span>
      </button>
    </nav>
  );
};

// ==========================================
// B. HERO SECTION - Straightforward & Powerful
// ==========================================
const Hero = ({ onOpenWaitlist }) => {
  const heroRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(".hero-pill", { y: 20, opacity: 0, duration: 0.6, ease: "power3.out" });
      tl.from(".hero-line", { y: 30, opacity: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" }, "-=0.4");
      tl.from(".hero-mock", { y: 60, opacity: 0, duration: 1, ease: "power3.out" }, "-=0.6");
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative pt-40 md:pt-48 pb-24 px-6 md:px-16 flex flex-col items-center justify-center text-center">

      <div className="relative z-10 max-w-4xl flex flex-col items-center">
        <div className="hero-pill mb-8 flex items-center gap-2 bg-surfaceVariant border border-surfaceBorder px-4 py-2 rounded-full backdrop-blur-md">
          <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></div>
          <span className="font-heading text-[10px] sm:text-xs font-semibold tracking-wide text-textSub uppercase">Your AI Financial Companion</span>
        </div>

        <h1 className="hero-line font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-6 text-textMain leading-[1.1] md:leading-tight text-balance">
          Financial intelligence, <span className="text-primary">built into your day.</span>
        </h1>

        <p className="hero-line font-heading text-textSub mt-4 mb-10 max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-balance px-2 sm:px-0">
          WiseFlow is your AI-powered money companion — real-time insights, a daily budget that adapts to your life, and habits that actually stick. Android Exclusive.
        </p>

        <div className="hero-line flex flex-col sm:flex-row gap-4">
          <button
            onClick={onOpenWaitlist}
            className="bg-primary text-background px-8 py-4 rounded-full font-heading font-bold text-lg hover:scale-[1.03] transition-transform flex items-center justify-center"
          >
            Join the waitlist
          </button>
        </div>

      </div>
    </section>
  );
};

// ==========================================
// C. REAL APP FEATURES MOCK-UI
// ==========================================
// ==========================================
// C1. OLD WAY VS NEW WAY (Comparison)
// ==========================================
const ComparisonSection = () => {
  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 md:px-16 bg-background relative z-10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-6 md:gap-10">
        <div className="flex-1 bg-surface border border-surfaceBorder rounded-3xl p-6 sm:p-8 opacity-80 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-surfaceBorder/50">
            <XCircle className="w-6 h-6 text-secondary" />
            <h3 className="font-heading font-bold text-lg sm:text-xl text-textMain">Traditional Apps</h3>
          </div>
          <ul className="space-y-4 font-heading text-sm sm:text-base text-textSub">
            <li>• Arbitrary budgets that make you feel like you&apos;re always failing.</li>
            <li>• Punishing red bars with no explanation of what to do next.</li>
            <li>• Generic alerts that say "you spent money" — not "here&apos;s what it means."</li>
            <li>• Cold numbers, no context, no one in your corner.</li>
          </ul>
        </div>

        <div className="flex-1 bg-surface border border-surfaceBorder rounded-3xl p-6 sm:p-8 opacity-80 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-surfaceBorder/50">
            <CheckCircle2 className="w-6 h-6 text-primary" />
            <h3 className="font-heading font-bold text-lg sm:text-xl text-textMain">The WiseFlow Way</h3>
          </div>
          <ul className="space-y-4 font-heading text-sm sm:text-base text-textSub">
            <li><span className="text-primary font-bold">• A real daily number:</span> Not a guess. Your Daily Safe Spend, calculated from your actual income and obligations — updated every day.</li>
            <li><span className="text-primary font-bold">• Wisey just talks to you:</span> "You&apos;re on track this week" or "Heads up, a big bill lands Friday." Plain words, not charts.</li>
            <li><span className="text-primary font-bold">• Your month, in plain language:</span> At the end of every cycle, WiseFlow tells you what happened, where it went, and what to do next.</li>
            <li><span className="text-primary font-bold">• Proactive, not reactive:</span> The Action Center surfaces overspends and patterns before they become real problems — with a clear suggestion, not just a number.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// C2. REAL APP FEATURES
// ==========================================
const Features = () => {
  return (
    <section id="features" className="py-20 sm:py-24 px-4 sm:px-6 md:px-16 border-t border-surfaceBorder bg-background relative z-10">
      <div className="max-w-6xl mx-auto">

        <div className="mb-16 md:mb-24 text-center px-2">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-4 text-textMain tracking-tight">Behavioral psychology, not just numbers.</h2>
          <p className="font-heading text-textSub text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-balance">Because auto-categorizing transactions rarely changes behavior. WiseFlow replaces mental math with clear answers and gamified habits.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">

          {/* 1. Daily Safe Spend */}
          <div className="bg-surface border border-surfaceBorder rounded-3xl p-6 sm:p-8 flex flex-col group relative overflow-hidden transition-colors hover:bg-surfaceVariant/50">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-5 sm:mb-6">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-textMain mb-3">Your Daily Safe Spend</h3>
              <p className="font-heading text-textSub text-sm sm:text-base leading-relaxed">No more guessing your budget. Wisey analyzes your history, subtracts your fixed obligations, and tells you exactly what you can safely spend today.</p>
            </div>
          </div>

          {/* 2. Gamified XP System */}
          <div className="bg-surface border border-surfaceBorder rounded-3xl p-6 sm:p-8 flex flex-col group relative overflow-hidden transition-colors hover:bg-surfaceVariant/50">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl group-hover:bg-gold/10 transition-colors duration-500"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-gold/10 rounded-2xl flex items-center justify-center mb-5 sm:mb-6">
                <Trophy className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-textMain mb-3">Level Up Your Finances</h3>
              <p className="font-heading text-textSub text-sm sm:text-base leading-relaxed">Finance is usually punishing — WiseFlow makes it rewarding. Earn XP, build streaks in your Money Mood Calendar, and turn real-life savings into a satisfying game.</p>
            </div>
          </div>

          {/* 3. Peer Comparison */}
          <div className="bg-surface border border-surfaceBorder rounded-3xl p-6 sm:p-8 flex flex-col group relative overflow-hidden transition-colors hover:bg-surfaceVariant/50">
            <div className="absolute top-0 right-0 w-64 h-64 bg-info/5 rounded-full blur-3xl group-hover:bg-info/10 transition-colors duration-500"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-info/10 rounded-2xl flex items-center justify-center mb-5 sm:mb-6">
                <Users className="w-6 h-6 text-info" />
              </div>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-textMain mb-3">Am I Doing Okay?</h3>
              <p className="font-heading text-textSub text-sm sm:text-base leading-relaxed">Replace financial isolation with healthy benchmarks. See how your savings rate and spending control stack up anonymously against peers in your income bracket.</p>
            </div>
          </div>

          {/* 4. Habit Heatmap */}
          <div className="bg-surface border border-surfaceBorder rounded-3xl p-6 sm:p-8 flex flex-col group relative overflow-hidden transition-colors hover:bg-surfaceVariant/50">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple/5 rounded-full blur-3xl group-hover:bg-purple/10 transition-colors duration-500"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-purple/10 rounded-2xl flex items-center justify-center mb-5 sm:mb-6">
                <Activity className="w-6 h-6 text-purple" />
              </div>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-textMain mb-3">The Habit Heatmap</h3>
              <p className="font-heading text-textSub text-sm sm:text-base leading-relaxed">Wisey goes beyond showing what you bought. We expose when you are vulnerable to impulse spending (like Friday nights at 9 PM) so you can proactively break bad habits.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 px-6 md:px-16 border-t border-surfaceBorder bg-background relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-5xl mb-4 text-textMain tracking-tight">Pricing</h2>
          <p className="font-heading text-textSub text-lg md:text-xl max-w-2xl mx-auto text-balance">Simple pricing for Android users who want automated insights and guidance.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          <div className="lg:col-span-2 bg-surface border border-surfaceBorder rounded-3xl p-8">
            <h3 className="font-heading font-bold text-2xl text-textMain mb-4">What&apos;s included</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-heading text-textSub">
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Wisey chat (companion mode)</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Wisey Analytics levels (XP progress)</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Insights in plain language</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Spending analytics and trends</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>🏆 VS your peers (peer comparison)</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Auto-categorization and budgeting</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Daily Safe Spend — your real budget, every day</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Recurring bills & subscriptions detection</span>
              </div>
            </div>
          </div>

          <div className="bg-surface border border-primary/30 rounded-3xl p-8 relative overflow-hidden shadow-[0_0_30px_-15px_rgba(34,197,94,0.15)]">
            <div className="absolute top-0 right-0 bg-primary text-background font-heading font-bold text-[10px] uppercase tracking-wider px-4 py-1.5 rounded-bl-xl">
              Launch Promo
            </div>

            <div className="flex flex-col gap-6 pt-2">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <div className="font-heading font-bold text-textMain">Monthly</div>
                  <span className="text-[10px] text-primary font-semibold bg-primary/10 px-2 py-0.5 rounded-full uppercase tracking-wider">First Month</span>
                </div>
                <div className="font-heading font-extrabold text-4xl text-textMain">$3.99<span className="text-textSub text-base font-semibold">/mo</span></div>
              </div>

              <div className="w-full h-px bg-surfaceBorder/50"></div>

              <div className="flex flex-col gap-1">
                <div className="font-heading font-bold text-textMain">Yearly</div>
                <div className="flex items-baseline gap-2">
                  <div className="font-heading font-extrabold text-4xl text-textMain">$39.99<span className="text-textSub text-base font-semibold">/yr</span></div>
                  <span className="text-primary font-heading font-semibold text-sm">(Save $7.89)</span>
                </div>
                <div className="font-heading text-textSub text-sm mt-1">Lock in the launch rate.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SecuritySection = () => {
  return (
    <section id="security" className="py-24 px-6 md:px-16 border-t border-surfaceBorder bg-background relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-5xl mb-4 text-textMain tracking-tight">Security</h2>
          <p className="font-heading text-textSub text-lg md:text-xl max-w-2xl mx-auto text-balance">WiseFlow is designed to keep your financial data private and protected. We don&apos;t sell your data, and we build with security-first defaults.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-surface border border-surfaceBorder rounded-3xl p-8">
            <h3 className="font-heading font-bold text-xl text-textMain mb-2">Privacy by default</h3>
            <p className="font-heading text-textSub leading-relaxed">We don&apos;t lease or sell your data. Wisey&apos;s guidance is built for you, not advertisers.</p>
          </div>
          <div className="bg-surface border border-surfaceBorder rounded-3xl p-8">
            <h3 className="font-heading font-bold text-xl text-textMain mb-2">Minimal access</h3>
            <p className="font-heading text-textSub leading-relaxed">We only request the permissions needed to deliver automated insights and guidance.</p>
          </div>
          <div className="bg-surface border border-surfaceBorder rounded-3xl p-8">
            <h3 className="font-heading font-bold text-xl text-textMain mb-2">Secure foundations</h3>
            <p className="font-heading text-textSub leading-relaxed">We follow modern security practices and continuously improve as the product evolves.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const LegalSectionHeading = ({ children }) => (
  <h3 className="font-heading font-semibold text-sm text-textMain uppercase tracking-widest mt-8 mb-2 pb-1 border-b border-surfaceBorder/60">{children}</h3>
);

// ==========================================
// LEGAL PAGE — dedicated screen
// ==========================================

const PrivacyContent = () => (
  <div className="space-y-2">
  <p>WiseFlow is built with privacy as a default, not an afterthought. We do not sell, rent, or lease your personal data to anyone — ever.</p>

  <LegalSectionHeading>What we collect</LegalSectionHeading>
  <p>We collect only what is necessary to run the service:</p>
  <p>— Your name and email address when you create an account.<br />— Financial records you enter manually (transactions, wallets, budgets).<br />— Bank transaction data and account balances when you choose to link a bank — this happens only with your explicit action.<br />— App usage data (which screens you visit, feature interactions) so we can improve the app. This data does not include your financial figures.<br />— Device identifiers and push notification tokens so we can send you alerts you request.<br />— IP address and general region for security and fraud detection.</p>

  <LegalSectionHeading>Third-party services we use</LegalSectionHeading>
  <p>To deliver the app, we work with the following companies. Each one receives only the data they need to do their job:</p>
  <p>— <span className="text-textMain font-semibold">Plaid</span> (US bank connections) — processes your bank credentials and returns transaction data to us. Plaid never shares your data with advertisers. See Plaid&apos;s privacy policy at plaid.com/legal.<br />— <span className="text-textMain font-semibold">TrueLayer</span> (UK/EU bank connections) — same role as Plaid for European accounts. See TrueLayer&apos;s privacy policy at truelayer.com/legal.<br />— <span className="text-textMain font-semibold">GoCardless</span> — used for certain open-banking payment flows. See GoCardless&apos;s privacy policy at gocardless.com/legal.<br />— <span className="text-textMain font-semibold">Supabase</span> — our database and authentication provider. Your data is stored on Supabase&apos;s encrypted infrastructure, hosted on AWS (US region by default).<br />— <span className="text-textMain font-semibold">Google (Gemini AI)</span> — powers Wisey, our AI companion. When you send a message to Wisey, the conversation and relevant financial context is sent to Google&apos;s Gemini API to generate a response. Google does not use your data to train their models by default under the API terms. See Google&apos;s privacy policy at policies.google.com/privacy.</p>

  <LegalSectionHeading>AI companion (Wisey)</LegalSectionHeading>
  <p>Wisey is powered by Google&apos;s Gemini AI. When you chat with Wisey, your messages and a summary of your financial context (such as your balance, spending patterns, and upcoming obligations) are sent to Google&apos;s servers to generate a response. No raw bank credentials are ever included. You can stop using Wisey at any time and it has no effect on the rest of your account.</p>

  <LegalSectionHeading>Push notifications</LegalSectionHeading>
  <p>If you allow notifications, we send you alerts such as daily spending summaries, bill reminders, and budget warnings. You can turn these off at any time in your device&apos;s notification settings or inside the app. Turning off notifications does not affect any other part of the service.</p>

  <LegalSectionHeading>Analytics</LegalSectionHeading>
  <p>We collect anonymized usage data (which features are used, crash reports, performance metrics) to understand how the app is working and where to improve it. This data cannot be tied back to your identity or your financial figures.</p>

  <LegalSectionHeading>Peer comparison (anonymous benchmarks)</LegalSectionHeading>
  <p>WiseFlow includes a feature that shows how your savings rate and spending patterns compare to peers in your income bracket. To power this, we aggregate anonymized financial metrics across users — your actual figures are never shared. What enters the comparison pool is a derived number (e.g. "savings rate: 18%"), not raw transactions or balances. You can opt out of this feature by turning off peer benchmarks in the app settings.</p>

  <LegalSectionHeading>Legal basis for processing (GDPR)</LegalSectionHeading>
  <p>If you are located in the EU or UK, we are required to tell you the legal basis we rely on for each type of data processing:</p>
  <p>— <span className="text-textMain font-semibold">Contract performance:</span> Processing your account data, financial records, and bank connection data to deliver the service you signed up for.<br />— <span className="text-textMain font-semibold">Legitimate interest:</span> App analytics, fraud detection, security monitoring, and improving the service — where these do not override your rights.<br />— <span className="text-textMain font-semibold">Consent:</span> Push notifications and any optional marketing emails. You can withdraw consent at any time.<br />— <span className="text-textMain font-semibold">Legal obligation:</span> Records we are required to keep under applicable law.</p>

  <LegalSectionHeading>Automated decision-making (Wisey AI)</LegalSectionHeading>
  <p>Wisey uses AI to analyze your financial data and generate spending verdicts, budget recommendations, and affordability assessments. Under GDPR Article 22, you have the right not to be subject to decisions based solely on automated processing that have a significant legal or similarly significant effect on you. Wisey&apos;s outputs are advisory — no decision that affects your legal rights or financial standing is made automatically without human review. Contact us to request a human review of any specific output.</p>

  <LegalSectionHeading>GLBA privacy notice (US users)</LegalSectionHeading>
  <p>Because WiseFlow accesses consumer financial data via bank connection partners (Plaid, TrueLayer), the Gramm-Leach-Bliley Act (GLBA) may apply for US users. We collect and use your financial data solely to provide the WiseFlow service to you. We do not sell your financial information to third parties, and we do not share it with non-affiliated companies for their own marketing purposes. To opt out of any non-essential sharing, email <a className="text-primary hover:underline" href="mailto:contact@wiseflowapp.com">contact@wiseflowapp.com</a> with the subject line "GLBA Opt-Out."</p>

  <LegalSectionHeading>Where your data is stored</LegalSectionHeading>
  <p>Your data is stored on Supabase infrastructure hosted on Amazon Web Services (AWS) in the United States. If you are located in the EU or UK, your data is transferred to the US under appropriate legal safeguards.</p>

  <LegalSectionHeading>Data retention and deletion</LegalSectionHeading>
  <p>— Your data is kept while your account is active.<br />— If your account is inactive for 24 months, personal data that is not legally required may be anonymized.<br />— After you request account deletion, we target full deletion or de-identification within 30 days, except where the law requires us to keep certain records.<br />— Security, fraud, dispute, and compliance records may be kept up to 180 days after deletion.<br />— Encrypted backup copies may persist up to 90 days before automatic removal.<br />— This policy is reviewed at least every 12 months.</p>

  <LegalSectionHeading>Your rights</LegalSectionHeading>
  <p>Regardless of where you live, you have the following rights over your data:</p>
  <p>— <span className="text-textMain font-semibold">Access:</span> Ask us what personal data we hold about you.<br />— <span className="text-textMain font-semibold">Correction:</span> Ask us to fix inaccurate information.<br />— <span className="text-textMain font-semibold">Deletion:</span> Ask us to delete your account and personal data.<br />— <span className="text-textMain font-semibold">Portability:</span> Ask for a copy of your data in a readable format.<br />— <span className="text-textMain font-semibold">Objection:</span> Ask us to stop processing your data for certain purposes.<br />— <span className="text-textMain font-semibold">California residents (CCPA/CPRA 2026):</span> You have the right to know what categories of personal information we collect, the right to delete it, the right to correct it, and the right to opt out of any sale or sharing. We do not sell personal information. If you submit an opt-out or deletion request, we will send you a visible confirmation once it has been processed. To submit a request, email us with the subject line "CCPA Request."<br />— <span className="text-textMain font-semibold">EU/UK residents (GDPR):</span> You may lodge a complaint with your local data protection authority if you believe we have not handled your data correctly.</p>
  <p>To exercise any of these rights, email <a className="text-primary hover:underline" href="mailto:contact@wiseflowapp.com">contact@wiseflowapp.com</a> with your account email and the request. We will respond within 30 days.</p>

  <LegalSectionHeading>Security</LegalSectionHeading>
  <p>WiseFlow maintains a documented information security policy covering confidentiality, integrity, and availability. Our practices include: encryption of data in transit (TLS) and at rest, multi-factor authentication for internal systems, access controls limiting who can see user data, incident response procedures, and regular policy reviews (at least every 12 months). No system is 100% secure — if we become aware of a breach that affects your data, we will notify you as required by law.</p>

  <LegalSectionHeading>Children</LegalSectionHeading>
  <p>WiseFlow is not intended for anyone under the age of 18. We do not knowingly collect personal data from minors. If we discover that a minor has created an account, we will delete it promptly.</p>
</div>
);

const TermsContent = () => (
  <div className="space-y-2">
  <LegalSectionHeading>What WiseFlow is</LegalSectionHeading>
  <p>WiseFlow is a personal finance management application. It is not a bank, lender, payment processor, broker, investment advisor, tax advisor, or legal advisor. Nothing in the app — including Wisey&apos;s responses — constitutes financial, legal, or tax advice. Always consult a qualified professional before making significant financial decisions.</p>

  <LegalSectionHeading>Who can use WiseFlow</LegalSectionHeading>
  <p>You must be at least 18 years old to create an account and use WiseFlow. By creating an account, you confirm that you meet this age requirement. If you are found to be under 18, your account will be closed and your data will be deleted.</p>

  <LegalSectionHeading>Your account</LegalSectionHeading>
  <p>You are responsible for keeping your login credentials private and for all activity that happens under your account. Do not share your account with anyone else. If you suspect unauthorized access, contact us immediately. We are not liable for losses caused by unauthorized use of your account where you failed to keep your credentials secure.</p>

  <LegalSectionHeading>Subscriptions and billing</LegalSectionHeading>
  <p>WiseFlow is available on a subscription basis, billed through Google Play. By subscribing, you authorize Google Play to charge your payment method on a recurring basis (monthly or yearly, depending on your chosen plan) until you cancel. Prices are shown in the app and on this page. We may change prices with reasonable advance notice.</p>

  <LegalSectionHeading>Cancellation and refunds</LegalSectionHeading>
  <p>You can cancel your subscription at any time through the Google Play subscription manager on your device. Cancellation stops future charges. Access to paid features continues until the end of the current billing period. Refunds are governed by Google Play&apos;s refund policy. If you believe you are entitled to a refund, contact Google Play support or email us and we will assist.</p>

  <LegalSectionHeading>Bank connections</LegalSectionHeading>
  <p>When you link a bank account, you authorize WiseFlow and its banking partners (Plaid, TrueLayer, GoCardless) to access your transaction history and balance data on your behalf, in read-only mode. We never initiate payments or move money without your explicit action. You can disconnect any linked bank account at any time from within the app.</p>

  <LegalSectionHeading>AI companion (Wisey)</LegalSectionHeading>
  <p>Wisey&apos;s responses are generated by an AI and are informational only. They may not always be accurate, complete, or appropriate for your specific situation. Do not make significant financial decisions based solely on Wisey&apos;s output. WiseFlow is not responsible for any outcome resulting from reliance on Wisey&apos;s responses.</p>

  <LegalSectionHeading>Prohibited uses</LegalSectionHeading>
  <p>You agree not to:<br />— Use the app for any unlawful purpose or in violation of these Terms.<br />— Attempt to reverse-engineer, copy, or reproduce any part of the app.<br />— Attempt to gain unauthorized access to other users&apos; accounts or our systems.<br />— Use the app to process or track financial activity related to fraud, money laundering, or other illegal conduct.<br />— Automate access to the app in ways not explicitly permitted.</p>

  <LegalSectionHeading>Intellectual property</LegalSectionHeading>
  <p>WiseFlow, Wisey, and all associated designs, code, and content are owned by WiseFlow. You may not copy, reproduce, or distribute any part of the app without written permission. You retain full ownership of the financial data you enter. By using the app, you grant us a limited license to process that data to provide the service to you.</p>

  <LegalSectionHeading>No warranty</LegalSectionHeading>
  <p>WiseFlow is provided &quot;as-is&quot; and &quot;as available.&quot; We make no guarantees that the app will be error-free, always available, or perfectly accurate. We do our best, but we cannot promise uninterrupted service, and we are not responsible for decisions made based on data shown in the app.</p>

  <LegalSectionHeading>Limitation of liability</LegalSectionHeading>
  <p>To the maximum extent permitted by law, WiseFlow and its team will not be liable for any indirect, incidental, special, or consequential damages arising from your use of the app — including lost savings, missed financial opportunities, or incorrect data. Our total liability to you for any claim will not exceed the amount you paid us in the 12 months before the claim arose.</p>

  <LegalSectionHeading>Governing law and disputes</LegalSectionHeading>
  <p>These Terms are governed by the laws of the Republic of Turkey. If a dispute arises, please contact us first so we can try to resolve it informally. Consumer disputes will be handled through the competent consumer arbitration committees, mandatory mediation, consumer courts, or other authorized authorities in Turkey, as required by applicable law. Nothing in these terms limits any mandatory rights you may have under Turkish consumer law.</p>

  <LegalSectionHeading>Changes to these terms</LegalSectionHeading>
  <p>We may update these Terms or the Privacy Policy at any time. If the change is significant, we will notify you by email or with a notice inside the app at least 14 days before it takes effect. Continued use of the app after the effective date means you accept the updated terms. If you disagree, you may cancel your account before the change takes effect.</p>

  <LegalSectionHeading>Account termination</LegalSectionHeading>
  <p>We may suspend or close your account if you violate these Terms, engage in fraudulent activity, or cause harm to other users or our systems. You may close your account at any time by contacting support. After closure, your data is handled according to the Privacy Policy retention schedule.</p>
</div>
);

const SupportContent = () => (
  <div className="space-y-2">
  <p>We&apos;re a small team and we take support seriously. If something is wrong, we want to know.</p>

  <LegalSectionHeading>General support</LegalSectionHeading>
  <p>For app issues, feedback, or questions about your account, email us at:<br /><a className="text-primary hover:underline font-semibold" href="mailto:contact@wiseflowapp.com">contact@wiseflowapp.com</a></p>

  <LegalSectionHeading>Privacy & deletion requests</LegalSectionHeading>
  <p>To request access to your data, a copy of your data, or full account deletion, email the address above with the subject line "Privacy Request" and include your account email. We will respond within 30 days.</p>

  <LegalSectionHeading>Billing & subscription issues</LegalSectionHeading>
  <p>Subscriptions are managed through Google Play. For billing issues, refund requests, or cancellations, go to the Google Play subscription manager on your device, or contact Google Play support directly. You can also email us and we will help guide you.</p>

  <LegalSectionHeading>Security concerns</LegalSectionHeading>
  <p>If you believe you have found a security issue or your account has been compromised, email us immediately at the address above with the subject line "Security Issue". We treat these as the highest priority.</p>
</div>
);

const LegalPage = ({ initialTab, onBack }) => {
  const [activeTab, setActiveTab] = useState(initialTab || 'privacy');

  useEffect(() => { window.scrollTo(0, 0); }, []);
  useEffect(() => { if (initialTab) setActiveTab(initialTab); }, [initialTab]);

  const tabs = [
    { id: 'privacy', label: 'Privacy Policy' },
    { id: 'terms', label: 'Terms of Service' },
    { id: 'support', label: 'Support' },
  ];

  return (
    <div className="bg-background min-h-screen text-textMain selection:bg-primary/30 selection:text-textMain">
      <header className="sticky top-0 z-50 border-b border-surfaceBorder bg-background/95 backdrop-blur-xl">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-heading font-bold text-xl tracking-tight">
            <span className="text-textMain">Wise</span><span className="text-primary">Flow</span>
          </div>
          <button onClick={onBack} className="font-heading text-sm font-medium text-textSub hover:text-textMain transition-colors flex items-center gap-1.5">
            ← Back
          </button>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6 pt-10 pb-24">
        <div className="mb-8">
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-textMain mb-1">Legal & Privacy</h1>
          <p className="font-heading text-xs text-textSub">Last updated: May 2026 — Version 1.3</p>
        </div>

        <div className="flex gap-1.5 bg-surface border border-surfaceBorder rounded-2xl p-1.5 w-fit mb-10 flex-wrap">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`font-heading font-semibold text-sm px-5 py-2.5 rounded-xl transition-all whitespace-nowrap ${
                activeTab === tab.id ? 'bg-primary text-background shadow-sm' : 'text-textSub hover:text-textMain'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="font-heading text-textSub leading-relaxed text-sm">
          {activeTab === 'privacy' && <PrivacyContent />}
          {activeTab === 'terms' && <TermsContent />}
          {activeTab === 'support' && <SupportContent />}
        </div>

        <p className="font-heading text-xs text-textSub/40 mt-16 text-center">WiseFlow Support · contact@wiseflowapp.com · June 2026</p>
      </div>
    </div>
  );
};

// ==========================================
// D. AI (Wisey) SECTION
// ==========================================
const CanIAffordDialog = ({ onClose, onSend }) => {
  const [amount, setAmount] = useState('');
  const [itemName, setItemName] = useState('');

  const canSend = amount.trim() !== '' && itemName.trim() !== '';

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose}></div>

      {/* Dialog content */}
      <div className="relative z-10 w-full max-w-sm bg-[#12141C]/95 backdrop-blur-xl border border-surfaceBorder rounded-[26px] p-6 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-heading font-bold text-xl text-textMain">Can I afford?</h2>
          <button onClick={onClose} className="text-textSub hover:text-textMain transition-colors">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-4">
          {/* Currency (Read only) */}
          <div className="flex flex-col gap-1.5">
            <label className="font-heading text-sm font-medium text-textMain">Currency</label>
            <div className="h-14 rounded-xl bg-surfaceVariant border border-surfaceBorder px-4 flex items-center justify-between opacity-70">
              <span className="text-textSub font-medium">USD ($)</span>
              <svg className="w-4 h-4 text-textSub" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            </div>
          </div>

          {/* Amount */}
          <div className="flex flex-col gap-1.5">
            <label className="font-heading text-sm font-medium text-textMain">Amount</label>
            <div className="h-14 rounded-xl bg-surfaceVariant border border-surfaceBorder px-4 flex items-center relative focus-within:border-info/50 transition-colors">
              <span className={`absolute left-4 font-heading text-base ${amount ? 'hidden' : 'text-textSub/40'}`}>0.00</span>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full bg-transparent border-none outline-none font-heading font-medium text-textMain text-base"
                autoFocus
              />
            </div>
          </div>

          {/* Item Name */}
          <div className="flex flex-col gap-1.5">
            <label className="font-heading text-sm font-medium text-textMain">What are you buying?</label>
            <div className="h-14 rounded-xl bg-surfaceVariant border border-surfaceBorder px-4 flex items-center relative focus-within:border-info/50 transition-colors">
              <span className={`absolute left-4 font-heading text-base ${itemName ? 'hidden' : 'text-textSub/40'}`}>e.g. new shoes, concert ticket</span>
              <input
                type="text"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                className="w-full bg-transparent border-none outline-none font-heading font-medium text-textMain text-base"
              />
            </div>
          </div>
        </div>

        <div className="flex gap-3 mt-8">
          <button
            onClick={onClose}
            className="flex-1 h-11 rounded-xl bg-secondary hover:bg-secondary/90 text-white font-heading font-semibold text-sm transition-colors shadow-sm"
          >
            Cancel
          </button>
          <button
            disabled={!canSend}
            onClick={() => onSend(amount, itemName)}
            className={`flex-1 h-11 rounded-xl text-white font-heading font-semibold text-sm transition-colors shadow-sm ${canSend ? 'bg-info hover:bg-info/90' : 'bg-info/50 cursor-not-allowed'}`}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

const AffordCheckCard = ({ data, onSimulate }) => {
  const amountVal = parseFloat(data.amount) || 0;
  // Calculate specific dummy metrics based on purchase amount
  const startBalance = 2400.00;
  const obligations = 850.00;
  const daysLeft = 20;

  const afterObligations = startBalance - obligations;
  const remainingAfter = (afterObligations - amountVal).toFixed(2);
  const dailyRemaining = (remainingAfter / daysLeft).toFixed(2);

  const isAffordable = afterObligations >= amountVal;

  return (
    <div className="flex flex-col w-full max-w-[320px]">
      {/* Main card */}
      <div className="flex flex-col gap-3 rounded-2xl rounded-tr-sm bg-[#12141C] border border-surfaceBorder p-4 shadow-xl">
        {/* Verdict Header */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2.5 w-full">
            <div className={`border rounded-xl px-2.5 py-1 flex items-center justify-center ${isAffordable ? 'bg-warning/20 border-warning/30' : 'bg-secondary/20 border-secondary/30'}`}>
              <span className={`${isAffordable ? 'text-warning' : 'text-secondary'} font-heading font-bold text-[10px] uppercase tracking-wider`}>
                {isAffordable ? 'Caution' : 'Over Budget'}
              </span>
            </div>
            <div className="flex-1 truncate text-xs text-textSub/80 font-heading">
              {data.itemName} • ${amountVal.toFixed(2)}
            </div>
          </div>
          <h3 className="font-heading font-bold text-[15px] text-textMain leading-tight">
            {isAffordable
              ? "You can technically afford this, but it drains your flexibility."
              : "This purchase pushes you past your available safe balance."}
          </h3>
        </div>

        {/* Metrics Grid */}
        <div className="flex gap-2.5 w-full mt-1">
          {/* Current Balance (After Obligations) */}
          <div className="flex-1 rounded-[10px] bg-surfaceVariant/50 border border-surfaceBorder/60 p-2.5 flex flex-col items-center justify-center text-center">
            <span className="font-heading font-medium text-[9px] text-textSub/70 uppercase tracking-widest mb-1.5 flex flex-wrap justify-center leading-tight">After<br />Obligations</span>
            <span className="font-heading font-bold text-lg text-warning leading-none mb-1">${afterObligations.toFixed(2)}</span>
            <span className="font-heading text-[10px] text-textSub/50">Current Balance</span>
          </div>
          {/* After Purchase */}
          <div className="flex-1 rounded-[10px] bg-surfaceVariant/50 border border-surfaceBorder/60 p-2.5 flex flex-col items-center justify-center text-center">
            <span className="font-heading font-medium text-[9px] text-textSub/70 uppercase tracking-widest mb-1.5 flex flex-wrap justify-center leading-tight">After<br />Purchase</span>
            <span className={`font-heading font-bold text-lg leading-none mb-1 ${isAffordable ? 'text-warning' : 'text-secondary'}`}>
              ${isAffordable ? remainingAfter : '0.00'}
            </span>
            <span className="font-heading text-[10px] text-textSub/50">
              {isAffordable ? 'Still safe' : `$${Math.abs(remainingAfter).toFixed(2)} short`}
            </span>
          </div>
        </div>

        <div className="h-[1px] w-full bg-surfaceBorder/80 my-0.5"></div>

        {/* Obligations Summary */}
        <div className="flex flex-col gap-2.5">
          <div className="w-full rounded-lg bg-warning/10 border border-warning/20 px-3 py-2 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-sm">⏰</span>
              <span className="font-heading font-semibold text-xs text-warning">Upcoming Obligations</span>
            </div>
            <span className="font-heading font-bold text-sm text-warning">${obligations.toFixed(2)}</span>
          </div>

          <div className="flex flex-col gap-2">
            <div className="w-full rounded-md bg-surfaceVariant/30 border border-warning/10 px-3 py-2 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="text-sm">💳</span>
                <span className="font-heading text-xs text-textSub/90 truncate">Bills</span>
                <div className="bg-warning/20 rounded-full px-1.5 py-[2px]">
                  <span className="font-heading font-semibold text-[10px] text-warning leading-none">2</span>
                </div>
              </div>
              <span className="font-heading font-medium text-xs text-textMain">$800.00</span>
            </div>

            <div className="w-full rounded-md bg-surfaceVariant/30 border border-warning/10 px-3 py-2 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="text-sm">🔄</span>
                <span className="font-heading text-xs text-textSub/90 truncate">Subscriptions</span>
                <div className="bg-warning/20 rounded-full px-1.5 py-[2px]">
                  <span className="font-heading font-semibold text-[10px] text-warning leading-none">1</span>
                </div>
              </div>
              <span className="font-heading font-medium text-xs text-textMain">$50.00</span>
            </div>
          </div>
        </div>

        <div className="h-[1px] w-full bg-surfaceBorder/80 my-0.5"></div>

        {/* Impact Summary */}
        <div className="w-full rounded-[10px] bg-surfaceVariant/50 border border-surfaceBorder/60 p-3.5 flex flex-col gap-2.5">
          <span className="font-heading font-semibold text-[11px] tracking-wider text-textMain/90 mb-0.5">💡 IMPACT ON DAILY BUDGET</span>

          <div className="flex justify-between items-center w-full">
            <span className="font-heading text-[11px] text-textSub/70">Before purchase</span>
            <span className="font-heading font-bold text-xs text-textMain">${(afterObligations / daysLeft).toFixed(2)}/day</span>
          </div>
          <div className="flex justify-between items-center w-full">
            <span className="font-heading text-[11px] text-textSub/70">After purchase</span>
            <span className="font-heading font-bold text-xs text-textMain">${isAffordable ? dailyRemaining : '0.00'}/day</span>
          </div>
          <div className="flex justify-between items-center w-full">
            <span className="font-heading text-[11px] text-textSub/70">Days remaining</span>
            <span className="font-heading font-bold text-xs text-textMain">{daysLeft} days</span>
          </div>
        </div>
      </div>

      {/* Clarifying questions / actions */}
      {isAffordable && (
        <div className="w-full rounded-2xl rounded-tr-sm bg-[#12141C] mt-2 p-3.5 border border-primary/30 shadow-lg self-start">
          <p className="font-heading text-[13px] text-primary leading-relaxed mb-3">
            You would only have ${remainingAfter} left for the rest of the cycle. Should I simulate a split payment plan to keep your daily budget safer?
          </p>
          <div className="flex gap-2 flex-wrap">
            <button onClick={() => onSimulate('yes')} className="rounded-xl border border-primary/40 bg-primary/10 text-primary font-heading font-semibold text-[11px] px-3.5 py-2 hover:bg-primary/20 transition-colors shadow-sm">Yes, simulate it</button>
            <button onClick={() => onSimulate('no')} className="rounded-xl border border-primary/40 bg-primary/10 text-primary font-heading font-semibold text-[11px] px-3.5 py-2 hover:bg-primary/20 transition-colors shadow-sm">No, I&apos;ll pay in full</button>
          </div>
        </div>
      )}
    </div>
  );
};

const WiseyOwlAvatar = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Owl body */}
    <path d="M12 21C16.4183 21 20 17.4183 20 13C20 8.58172 16.4183 5 12 5C7.58172 5 4 8.58172 4 13C4 17.4183 7.58172 21 12 21Z" fill="currentColor" fillOpacity="0.9"/>
    
    {/* Ear tufts */}
    <path d="M8 6L7 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M16 6L17 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    
    {/* Eyes */}
    <circle cx="9.5" cy="12" r="2.5" fill="white"/>
    <circle cx="14.5" cy="12" r="2.5" fill="white"/>
    <circle cx="9.5" cy="12" r="1.2" fill="#1a1a1a"/>
    <circle cx="14.5" cy="12" r="1.2" fill="#1a1a1a"/>
    
    {/* Beak */}
    <path d="M12 14L10.5 16L12 15.5L13.5 16L12 14Z" fill="#FFA500"/>
    
    {/* Wings */}
    <path d="M6 13C6 13 5 14 5 15.5C5 17 6 17.5 6 17.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M18 13C18 13 19 14 19 15.5C19 17 18 17.5 18 17.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

const AiWisey = () => {
  const [showAffordDialog, setShowAffordDialog] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendAffordCheck = (amount, itemName) => {
    setShowAffordDialog(false);

    // Add user message
    const newMsg = {
      id: Date.now(),
      fromUser: true,
      type: "text",
      content: `Can I afford a $${amount} ${itemName}?`
    };
    setMessages(prev => [...prev, newMsg]);

    // Simulate AI thinking then responding
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        fromUser: false,
        type: "afford_check",
        data: { amount, itemName }
      }]);
    }, 1000);
  };

  const handleSimulate = (answer) => {
    setMessages(prev => [...prev, {
      id: Date.now(),
      fromUser: true,
      type: "text",
      content: answer === 'yes' ? "Yes, simulate it" : "No, I'll pay in full"
    }]);

    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        fromUser: false,
        type: "text",
        content: answer === 'yes' ? "Great! If you use a Buy Now Pay Later service like Affirm or split it across 4 months, you'd pay about $" + (messages[messages.length - 1].data.amount / 4).toFixed(2) + " per month. This keeps your daily budget very comfortable. Want me to add this to your Planned Payments?" : "Understood. I've noted that purchase. Be careful with your remaining daily budget!"
      }]);
    }, 1000);
  };

  const handleDirectSend = () => {
    if (!inputValue.trim()) return;
    setMessages(prev => [...prev, {
      id: Date.now(),
      fromUser: true,
      type: "text",
      content: inputValue
    }]);
    setInputValue("");

    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        fromUser: false,
        type: "text",
        content: "I'm a demo! Click the 'Can I Afford?' suggestion below to see my advanced intelligence in action."
      }]);
    }, 1000);
  }

  return (
    <section id="intelligence" className="py-24 md:py-32 px-6 md:px-16 overflow-hidden border-t items-center border-surfaceBorder bg-background relative flex flex-col lg:flex-row gap-16 justify-center">

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="flex-1 max-w-xl relative z-10">
        <div className="bg-primary/10 border border-primary/20 text-primary px-4 py-1.5 rounded-full inline-flex font-heading font-bold text-xs uppercase tracking-widest mb-6">
          AI Companion
        </div>
        <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-textMain tracking-tight leading-tight text-balance">
          Meet <span className="text-primary">Wisey.</span><br />Your AI Companion.
        </h2>
        <p className="font-heading text-textSub text-lg leading-relaxed mb-8 text-balance">
          Wisey is your always-on financial companion. It automates budget tracking, explains your money in plain language, and proactively guides you toward better habits — like a patient friend who happens to be a finance expert.
        </p>
        <ul className="space-y-4 font-heading text-textMain">
          <li className="flex items-center gap-3"><ShieldCheck className="w-5 h-5 text-primary" /> Total privacy, no data leasing.</li>
          <li className="flex items-center gap-3"><Zap className="w-5 h-5 text-primary" /> Automates the boring stuff so you focus on decisions.</li>
          <li className="flex items-center gap-3"><MessageSquareText className="w-5 h-5 text-primary" /> Guides you in plain language, not jargon.</li>
        </ul>
      </div>

      <div className="flex-1 w-full max-w-[440px] relative z-10">
        {/* Mock Chat Interace */}
        <div className="bg-[#0B0D12] border border-surfaceBorder rounded-[2rem] p-4 h-[550px] flex flex-col shadow-2xl relative overflow-hidden ring-1 ring-white/5">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-50 pointer-events-none"></div>

          <div className="flex items-center justify-between border-b border-surfaceBorder/50 pb-4 px-2 relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-[0_0_15px_rgba(34,197,94,0.4)]">
                <WiseyOwlAvatar className="w-5 h-5 text-background" />
              </div>
              <div>
                <div className="font-heading font-bold text-textMain text-sm">Wisey</div>
                <div className="font-data text-[11px] text-primary flex items-center gap-1.5 mt-0.5 tracking-wider">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                  ONLINE
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto py-6 px-2 space-y-6 flex flex-col relative z-10 scrollbar-hide">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex w-full ${msg.fromUser ? 'justify-end' : 'justify-start'}`}>
                {!msg.fromUser && msg.type !== 'text' && (
                  <div className="w-8 h-8 rounded-full bg-surfaceVariant border border-surfaceBorder flex items-center justify-center mr-3 mt-1 shrink-0">
                    <WiseyOwlAvatar className="w-4 h-4 text-white" />
                  </div>
                )}
                {msg.type === "text" ? (
                  <div className={`${msg.fromUser ? 'bg-primary border-primary/50 text-white rounded-tr-sm' : 'bg-surfaceVariant border-surfaceBorder text-textMain rounded-tl-sm'} px-4 py-3 rounded-2xl font-heading text-[13px] leading-relaxed max-w-[85%] border shadow-sm`}>
                    {msg.content}
                  </div>
                ) : msg.type === "afford_check" ? (
                  <AffordCheckCard data={msg.data} onSimulate={handleSimulate} />
                ) : null}
              </div>
            ))}
            {messages.length === 0 && (
              <div className="flex flex-col gap-2 relative z-20 w-full px-1 pt-2">
                {[
                  { emoji: "💚", text: "Check in on my financial health" },
                  { emoji: "🚨", text: "Help me feel safer about my emergency fund" },
                  { emoji: "🎯", text: "Help me build a budget that feels doable" },
                  { emoji: "💰", text: "Walk me through this cycle's cash flow" },
                  { emoji: "💵", text: "Can I afford this without stress?", affordDialog: true },
                  { emoji: "✈️", text: "Plan a vacation that feels doable" },
                  { emoji: "🏦", text: "Build a gentle savings plan" },
                ].map((item) => (
                  <button
                    key={item.text}
                    onClick={() => item.affordDialog ? setShowAffordDialog(true) : setInputValue(item.text)}
                    className="bg-surfaceVariant hover:bg-surface border border-surfaceBorder hover:border-primary/30 text-textMain rounded-2xl px-4 py-3 flex items-center gap-3 transition-all text-left group"
                  >
                    <span className="text-base shrink-0">{item.emoji}</span>
                    <span className="font-heading text-xs font-medium leading-snug flex-1">{item.text}</span>
                    <span className="text-textSub/30 group-hover:text-primary/60 transition-colors text-xs">→</span>
                  </button>
                ))}
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <div className="mt-auto pt-2 relative z-10">
            <div className="bg-surfaceVariant/60 rounded-full flex items-center px-4 py-2 border border-surfaceBorder/80 focus-within:border-primary/50 transition-colors backdrop-blur-md">
              <input
                type="text"
                placeholder="Ask Wisey anything..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleDirectSend()}
                className="font-heading text-[13px] text-textMain bg-transparent border-none outline-none flex-1 placeholder:text-textSub/50 h-9"
              />
              <button onClick={handleDirectSend} className="w-8 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors ml-2 shrink-0">
                <ArrowRight className="w-4 h-4 text-background" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {showAffordDialog && <CanIAffordDialog onClose={() => setShowAffordDialog(false)} onSend={handleSendAffordCheck} />}
    </section>
  );
};

// ==========================================
// E. FOOTER
// ==========================================
const Footer = () => {
  return (
    <footer className="bg-[#040507] border-t border-surfaceBorder text-textMain py-20 relative z-50">
      <div className="max-w-6xl mx-auto px-6 md:px-16 flex flex-col md:flex-row justify-between gap-12">

        <div className="max-w-xs">
          <div className="flex items-center gap-2 mb-6">
            <div className="font-heading font-bold text-xl tracking-tight">
              <span className="text-textMain">Wise</span>
              <span className="text-primary">Flow</span>
            </div>
          </div>
          <p className="font-heading text-textSub text-sm leading-relaxed mb-6">
            Your automated financial companion. Wisey handles the tracking, analysis, and guidance — you just make the decisions. Built for Android.
          </p>
          <div className="flex items-center gap-2 bg-surfaceVariant w-max px-3 py-1.5 rounded-full border border-surfaceBorder">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <span className="font-data text-[10px] text-textSub uppercase tracking-wider">All systems nominal</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-12 font-heading text-sm text-textSub">
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-textMain mb-2 uppercase tracking-wide text-xs">Product</h4>
            <a href="#features" className="hover:text-primary transition-colors">Features</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
            <a href="#security" className="hover:text-primary transition-colors">Security</a>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-textMain mb-2 uppercase tracking-wide text-xs">Company</h4>
            <a href="#/privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#/terms" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#/support" className="hover:text-primary transition-colors">Support</a>
            <a href="#/delete-account" className="hover:text-primary transition-colors">Delete Account</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

// ==========================================
// E2. COOKIE CONSENT BANNER
// ==========================================
const CookieConsentBanner = () => {
  const [visible, setVisible] = useState(() => {
    try { return localStorage.getItem('wf_cookie_consent') !== 'accepted'; } catch { return true; }
  });

  if (!visible) return null;

  const accept = () => {
    try { localStorage.setItem('wf_cookie_consent', 'accepted'); } catch { /* */ }
    setVisible(false);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[500] p-4 md:p-6">
      <div className="max-w-4xl mx-auto bg-[#12141C]/95 backdrop-blur-xl border border-surfaceBorder rounded-2xl p-4 md:p-5 shadow-2xl flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1 font-heading text-sm text-textSub leading-relaxed">
          <span className="text-textMain font-semibold">This site uses essential cookies only.</span> We use no advertising or tracking cookies. The waitlist form sends your name and email to our secure list. See our{' '}
          <a href="#/privacy" className="text-primary hover:underline" onClick={() => setVisible(false)}>Privacy Policy</a> for full details.
        </div>
        <div className="flex gap-3 shrink-0">
          <a href="#/privacy" onClick={() => setVisible(false)} className="font-heading text-sm font-medium text-textSub hover:text-textMain transition-colors px-4 py-2 rounded-xl border border-surfaceBorder">
            Learn more
          </a>
          <button
            onClick={accept}
            className="font-heading text-sm font-semibold bg-primary text-background px-5 py-2 rounded-xl hover:bg-primary/90 transition-colors"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// F. WAITLIST MODAL
// ==========================================
const WaitlistModal = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && email) {
      setIsSubmitting(true);

      const scriptURL = 'https://script.google.com/macros/s/AKfycbxYMa-2SHEmL3mDR0Lh6fqMDWGfzDciYnJRIeeK7lDAg9rfkXiT9JSh_xf5eWk1BP8P/exec';
      try {
        const iframeName = `waitlist_iframe_${Date.now()}`;

        const iframe = document.createElement('iframe');
        iframe.name = iframeName;
        iframe.style.display = 'none';
        document.body.appendChild(iframe);

        const form = document.createElement('form');
        form.action = scriptURL;
        form.method = 'POST';
        form.target = iframeName;
        form.style.display = 'none';

        const nameInput = document.createElement('input');
        nameInput.type = 'hidden';
        nameInput.name = 'name';
        nameInput.value = name;
        form.appendChild(nameInput);

        const emailInput = document.createElement('input');
        emailInput.type = 'hidden';
        emailInput.name = 'email';
        emailInput.value = email;
        form.appendChild(emailInput);

        document.body.appendChild(form);

        form.submit();

        setSubmitted(true);
        setTimeout(() => {
          onClose();
        }, 3000);

        setTimeout(() => {
          form.remove();
          iframe.remove();
        }, 5000);
      } catch (error) {
        console.error("Waitlist submission failed", error);
        // Fallback for user experience even if tracking hits anomaly
        setSubmitted(true);
        setTimeout(() => onClose(), 2000);
      } finally {
        setIsSubmitting(false);
      }
    }
  }

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/50 backdrop-blur-sm" onClick={onClose}></div>

      {/* Modal Content */}
      <div className="bg-[#07080B] border border-surfaceBorder rounded-3xl p-6 md:p-8 w-full max-w-md relative z-10 shadow-2xl">
        {submitted ? (
          <div className="text-center py-8 animate-in fade-in zoom-in duration-300">
            <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="font-heading font-bold text-3xl text-textMain mb-2">You&apos;re on the list!</h3>
            <p className="font-heading text-textSub text-lg">We&apos;ll reach out as soon as we&apos;re ready for you.</p>
          </div>
        ) : (
          <div className="animate-in fade-in zoom-in duration-300">
            <h3 className="font-heading font-bold text-3xl text-textMain mb-3">Join the waitlist</h3>
            <p className="font-heading text-base text-textSub mb-8 leading-relaxed text-balance">WiseFlow is coming soon to Android. Join the waitlist and be first in line when we launch.</p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="block font-heading text-sm font-medium text-textSub mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full bg-[#12141C] border border-surfaceBorder rounded-xl px-4 py-3.5 font-heading text-sm text-textMain focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-textSub/40"
                  placeholder="E.g. Alex Jensen"
                />
              </div>
              <div>
                <label className="block font-heading text-sm font-medium text-textSub mb-2">Email address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full bg-[#12141C] border border-surfaceBorder rounded-xl px-4 py-3.5 font-heading text-sm text-textMain focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-textSub/40"
                  placeholder="you@example.com"
                />
              </div>
              <p className="font-heading text-xs text-textSub/60 leading-relaxed">
                By joining, you agree to receive a one-time launch notification at this email. We will never spam you or share your email. See our <a href="#/privacy" onClick={onClose} className="text-primary hover:underline">Privacy Policy</a>.
              </p>
              <div className="flex gap-4 mt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-1/3 bg-surfaceVariant hover:bg-surfaceBorder text-textMain font-heading font-semibold py-3.5 rounded-xl transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-primary hover:bg-primary/90 text-background font-heading font-bold py-3.5 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  disabled={!name || !email || isSubmitting}
                >
                  {isSubmitting ? 'Joining...' : 'Join List'}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

const DeleteAccountContent = () => (
  <div className="space-y-2">
    <p>You have the right to delete your WiseFlow account and all associated personal data at any time. This page explains how to submit a deletion request and what happens to your data.</p>

    <LegalSectionHeading>How to request account deletion</LegalSectionHeading>
    <p>Send an email to <a className="text-primary hover:underline font-semibold" href="mailto:contact@wiseflowapp.com?subject=Delete%20My%20Account">contact@wiseflowapp.com</a> with the subject line <span className="text-textMain font-semibold">"Delete My Account"</span> and include the email address associated with your WiseFlow account. We will process your request within 30 days and send you a confirmation once it is complete.</p>

    <LegalSectionHeading>What gets deleted</LegalSectionHeading>
    <p>Upon account deletion, we will delete or permanently de-identify the following data:<br />
    — Your account profile (name, email address)<br />
    — All transactions, wallets, budgets, goals, and financial records you entered<br />
    — Your Wisey AI chat history<br />
    — Your linked bank connection tokens (if any)<br />
    — Push notification tokens and device identifiers<br />
    — All app preferences and settings</p>

    <LegalSectionHeading>Retention exceptions</LegalSectionHeading>
    <p>Some data may be retained for a limited period after deletion where required by law or for legitimate security purposes:<br />
    — Security, fraud, and compliance records: up to 180 days<br />
    — Encrypted backup copies: up to 90 days before automatic removal<br />
    — Anonymized, aggregated analytics data (cannot be tied back to you): indefinitely</p>

    <LegalSectionHeading>Subscription cancellation</LegalSectionHeading>
    <p>Deleting your account does not automatically cancel your Google Play subscription. Before requesting deletion, please cancel your subscription through the Google Play subscription manager on your device to avoid future charges.</p>

    <LegalSectionHeading>Response time</LegalSectionHeading>
    <p>We will acknowledge your request within 5 business days and complete the deletion within 30 days. If you have not received a confirmation after 30 days, please follow up at <a className="text-primary hover:underline" href="mailto:contact@wiseflowapp.com">contact@wiseflowapp.com</a>.</p>
  </div>
);

const DeleteAccountPage = ({ onBack }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="bg-background min-h-screen text-textMain selection:bg-primary/30 selection:text-textMain">
      <header className="sticky top-0 z-50 border-b border-surfaceBorder bg-background/95 backdrop-blur-xl">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-heading font-bold text-xl tracking-tight">
            <span className="text-textMain">Wise</span><span className="text-primary">Flow</span>
          </div>
          <button onClick={onBack} className="font-heading text-sm font-medium text-textSub hover:text-textMain transition-colors flex items-center gap-1.5">
            ← Back
          </button>
        </div>
      </header>
      <div className="max-w-3xl mx-auto px-6 pt-10 pb-24">
        <div className="mb-8">
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-textMain mb-1">Delete Your Account</h1>
          <p className="font-heading text-xs text-textSub">WiseFlow Support · contact@wiseflowapp.com</p>
        </div>
        <div className="font-heading text-textSub leading-relaxed text-sm">
          <DeleteAccountContent />
        </div>
        <div className="mt-10">
          <a
            href="mailto:contact@wiseflowapp.com?subject=Delete%20My%20Account"
            className="inline-flex items-center gap-2 bg-primary text-background px-6 py-3 rounded-full font-heading font-bold text-sm hover:scale-[1.03] transition-transform"
          >
            Request Account Deletion →
          </a>
        </div>
        <p className="font-heading text-xs text-textSub/40 mt-16 text-center">WiseFlow Support · contact@wiseflowapp.com</p>
      </div>
    </div>
  );
};

const getPageFromHash = (hash) => {
  if (hash === '#/privacy') return 'privacy';
  if (hash === '#/terms') return 'terms';
  if (hash === '#/support') return 'support';
  if (hash === '#/delete-account') return 'delete-account';
  return 'home';
};

function App() {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);
  const [page, setPage] = useState(() => getPageFromHash(window.location.hash));

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

    const handleHash = () => {
      const p = getPageFromHash(window.location.hash);
      setPage(p);
      if (p === 'home') window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const goHome = () => {
    window.location.hash = '';
    setPage('home');
  };

  if (page === 'delete-account') {
    return <DeleteAccountPage onBack={goHome} />;
  }

  if (page === 'privacy' || page === 'terms' || page === 'support') {
    return <LegalPage initialTab={page} onBack={goHome} />;
  }

  return (
    <div className="bg-background min-h-screen text-textMain selection:bg-primary/30 selection:text-textMain overflow-x-hidden">
      <Navbar onOpenWaitlist={() => setIsWaitlistModalOpen(true)} />
      <Hero onOpenWaitlist={() => setIsWaitlistModalOpen(true)} />
      <ComparisonSection />
      <Features />
      <AiWisey />
      <Pricing />
      <SecuritySection />
      <Footer />
      {isWaitlistModalOpen && <WaitlistModal onClose={() => setIsWaitlistModalOpen(false)} />}
      <CookieConsentBanner />
    </div>
  );
}

export default App;

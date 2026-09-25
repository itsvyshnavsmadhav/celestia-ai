"use client";

import React, { useEffect, useRef } from "react";

export default function AboutIntro() {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // measure paths for the draw-on animation
    if (cardRef.current) {
      const paths = cardRef.current.querySelectorAll('.skyline .draw');
      paths.forEach(p => {
        try { 
          const l = Math.ceil((p as SVGPathElement).getTotalLength()) + 2; 
          (p as HTMLElement).style.setProperty('--len', l.toString()); 
        } catch(e) {}
      });

      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((es, o) => {
          es.forEach(e => { 
            if (e.isIntersecting) {
              cardRef.current?.classList.add('in');
              o.disconnect();
            } 
          });
        }, { threshold: 0.25 });
        observer.observe(cardRef.current);
        return () => observer.disconnect();
      } else {
        cardRef.current.classList.add('in');
      }
    }
  }, []);

  return (
    <section className="relative px-6 md:px-12 py-8 md:py-12 max-w-7xl mx-auto z-10 story-section">
      <style dangerouslySetInnerHTML={{ __html: `
        .story-section {
          --card: #141414;
          --card-2: #1a1a1a;
          --line: #2a2a2a;
          --text: #a9a39b;
          --strong: #f1ebe3;
          --gold: #b8915f;
          --gold-soft: rgba(184,145,95,.55);
          --gold-faint: rgba(184,145,95,.10);
        }

        .story-section .card {
          position: relative; overflow: hidden;
          display: grid; grid-template-columns: 1.05fr .95fr;
          background: linear-gradient(160deg, var(--card-2) 0%, var(--card) 60%);
          border: 1px solid var(--line); border-radius: 22px;
        }
        /* soft warm glow behind the city */
        .story-section .card::before {
          content: ""; position: absolute; right: -10%; bottom: -30%; width: 70%; height: 90%;
          background: radial-gradient(closest-side, rgba(184,145,95,.13), transparent 70%);
          pointer-events: none;
        }

        /* ---------- text column ---------- */
        .story-section .copy { position: relative; z-index: 1; padding: 64px 56px 64px 64px; color: var(--text); }
        .story-section .eyebrow { display: flex; align-items: center; gap: 14px; margin-bottom: 32px;
          font-size: 12px; letter-spacing: .22em; text-transform: uppercase; color: var(--gold); font-weight: 600; }
        .story-section .eyebrow::before { content: ""; width: 36px; height: 2px; background: var(--gold); border-radius: 2px; }
        .story-section .copy p { font-size: 17.5px; line-height: 1.75; font-weight: 300; margin-bottom: 22px; font-family: 'Hanken Grotesk', sans-serif; }
        .story-section .copy p:last-of-type { margin-bottom: 0; }
        .story-section .copy strong, .story-section .copy b { color: var(--strong); font-weight: 500; }
        .story-section .copy .lead { font-size: 20px; line-height: 1.65; color: #cfc8bf; }

        .story-section .facts { display: flex; gap: 0; margin-top: 40px; border-top: 1px solid var(--line); padding-top: 24px; }
        .story-section .fact { flex: 1; padding-right: 18px; }
        .story-section .fact + .fact { padding-left: 18px; border-left: 1px solid var(--line); }
        .story-section .fact span { display: block; font-size: 11px; letter-spacing: .18em; text-transform: uppercase; color: #6f6a63; margin-bottom: 6px; }
        .story-section .fact strong { color: var(--strong); font-weight: 500; font-size: 15px; }

        /* ---------- Brussels column ---------- */
        .story-section .city { position: relative; border-left: 1px solid var(--line); min-height: 560px;
          display: flex; flex-direction: column; justify-content: space-between; padding: 40px 32px 0; }
        .story-section .coords { position: relative; z-index: 2; display: flex; justify-content: space-between;
          font-size: 11px; letter-spacing: .2em; text-transform: uppercase; color: #6f6a63; }
        .story-section .coords em { font-style: normal; color: var(--gold); }

        .story-section .map { position: absolute; inset: 0; width: 100%; height: 100%; z-index: 0; }
        .story-section .map .street { stroke: rgba(255,255,255,.045); strokeWidth: 1; fill: none; }
        .story-section .map .ring { stroke: var(--gold-faint); strokeWidth: 1.2; fill: none; strokeDasharray: 3 6; }
        .story-section .map .pin { fill: var(--gold); }
        .story-section .map .pulse { fill: none; stroke: var(--gold); transform-origin: center; transform-box: fill-box; animation: pulse 3.2s ease-out infinite; }
        .story-section .map .pulse.d2 { animation-delay: 1.6s; }
        .story-section .map .label { fill: #6f6a63; font-size: 6.5px; letter-spacing: .2em; text-transform: uppercase; font-family: 'Hanken Grotesk', sans-serif; }
        @keyframes pulse { 0% { transform: scale(.4); opacity: .8; } 100% { transform: scale(3.2); opacity: 0; } }

        .story-section .skyline { position: relative; z-index: 1; width: 100%; height: auto; display: block; margin-top: auto; }
        .story-section .skyline .s { fill: none; stroke: var(--gold-soft); strokeWidth: 1.2; strokeLinecap: round; strokeLinejoin: round; }
        .story-section .skyline .d { fill: none; stroke: rgba(184,145,95,.28); strokeWidth: 1; }
        .story-section .skyline .ball { fill: #151515; stroke: var(--gold-soft); strokeWidth: 1.2; }
        .story-section .skyline .ground { stroke: var(--line); strokeWidth: 1; }
        .story-section .skyline .draw { strokeDasharray: var(--len,1400); strokeDashoffset: var(--len,1400); transition: stroke-dashoffset 2.8s cubic-bezier(.6,.1,.2,1); }
        .story-section .card.in .skyline .draw { strokeDashoffset: 0; }
        .story-section .skyline .ball { opacity: 0; transition: opacity .8s ease 1.6s; }
        .story-section .card.in .skyline .ball { opacity: 1; }
        .story-section .caption { position: relative; z-index: 1; display: flex; justify-content: space-between; gap: 8px; padding: 14px 0 26px;
          font-size: 10.5px; letter-spacing: .16em; text-transform: uppercase; color: #5d5953; }

        @media (prefers-reduced-motion: reduce) {
          .story-section .skyline .draw { transition: none; strokeDashoffset: 0; }
          .story-section .skyline .ball { opacity: 1; transition: none; }
          .story-section .map .pulse { animation: none; opacity: 0; }
        }
        @media (max-width: 900px) {
          .story-section .card { grid-template-columns: 1fr; }
          .story-section .copy { padding: 40px 24px; }
          .story-section .copy p { font-size: 16px; }
          .story-section .copy .lead { font-size: 18px; }
          .story-section .city { border-left: 0; border-top: 1px solid var(--line); min-height: 380px; padding: 28px 24px 0; }
          .story-section .facts { flex-direction: column; gap: 14px; }
          .story-section .fact + .fact { padding-left: 0; border-left: 0; }
          .story-section .caption { display: none; }
          .story-section .coords { flex-direction: column; gap: 6px; }
          .story-section .skyline { padding-bottom: 24px; }
        }
      `}} />

      <div className="mb-8 flex justify-start pl-4 md:pl-8">
        <h2 className="font-hanken text-[24px] md:text-[28px] font-bold text-on-surface tracking-tight m-0 uppercase">
          CELESTIA AI story
        </h2>
      </div>

      <div className="card" id="story" ref={cardRef}>
        {/* TEXT */}
        <div className="copy">
          <div className="eyebrow">Founded in Brussels</div>

          <p className="lead">
            Celestia AI has its roots in the bustling European capital of Brussels, Belgium, where a couple of <strong className="font-bold">ex-McKinsey &amp; Company Partners</strong> and Managers came together with a simple mission: to deliver <strong className="font-bold">fast, impactful AI solutions</strong> that are fully <strong className="font-bold">custom-built</strong> for B2B enterprises.
          </p>

          <p>
            Our experience working with <strong className="font-bold">CXOs</strong> of large <strong className="font-bold">Fortune-500 B2B enterprises</strong> inspired us to have the belief that there is conviction around AI, but sometimes there is a lack of clarity on where it can truly deliver <strong className="font-bold">performance impact</strong>. At Celestia, we are particularly excited about building tools that can deliver tangible impact at <strong className="font-bold">scale</strong>.
          </p>

          <p>
            With rapid advances in AI, we can now develop and deploy <strong className="font-bold">custom tools</strong> at a <strong className="font-bold">fraction of the cost, in a fraction of the time, helping clients rapidly capture bottom-line impact</strong>. Our founding team and expert network bring extensive experience across Commercial Excellence, Operational Excellence, Procurement and HR topics - both from industry experience and as management consultants to global CXOs.
          </p>
          
          <p>
            We&apos;re excited to partner with you on this journey!
          </p>

          <div className="facts">
            <div className="fact"><span>Founded</span><strong>Summer 2025</strong></div>
            <div className="fact"><span>Roots</span><strong>Brussels, Belgium</strong></div>
            <div className="fact"><span>Focus</span><strong>Custom B2B AI</strong></div>
          </div>
        </div>

        {/* BRUSSELS */}
        <div className="city" aria-hidden="true">
          <svg className="map" viewBox="0 0 500 600" preserveAspectRatio="xMidYMid slice">
            <g>
              <path className="street" d="M-20 120 L520 60 M-20 200 L520 170 M-20 300 L520 330 M-20 380 L520 420 M60 -20 L140 620 M180 -20 L220 620 M300 -20 L270 620 M420 -20 L360 620 M-20 40 L300 620 M520 90 L120 620 M-20 480 L520 250"/>
              <path className="street" d="M250 250 L150 120 M250 250 L380 150 M250 250 L400 340 M250 250 L120 360 M250 250 L260 80"/>
              <polygon className="ring" points="250,70 420,195 360,395 140,395 80,195"/>
              <circle className="pulse" cx="250" cy="250" r="8" strokeWidth="1"/>
              <circle className="pulse d2" cx="250" cy="250" r="8" strokeWidth="1"/>
              <circle className="pin" cx="250" cy="250" r="3.5"/>
              <text className="label" x="262" y="246">Grand-Place</text>
              <text className="label" x="296" y="92">Pentagon</text>
            </g>
          </svg>

          <div className="coords"><span>Brussels · Belgium</span><em>50.8467° N · 4.3525° E</em></div>

          <svg className="skyline" viewBox="0 0 600 270">
            <g>
              <path className="s draw" style={{ '--len': 900 } as React.CSSProperties} d="M92 125 L92 70 M92 125 L139.6 152.5 M92 125 L44.4 152.5
                     M92 70 L139.6 97.5 L139.6 152.5 L92 180 L44.4 152.5 L44.4 97.5 Z
                     M92 180 L92 250 M44.4 152.5 L60 250 M139.6 152.5 L124 250"/>
              <path className="d draw" style={{ '--len': 400 } as React.CSSProperties} d="M92 125 L44.4 97.5 M92 125 L139.6 97.5 M92 125 L92 180"/>
              <circle className="ball" cx="92" cy="70" r="9"/>
              <circle className="ball" cx="139.6" cy="97.5" r="9"/>
              <circle className="ball" cx="139.6" cy="152.5" r="9"/>
              <circle className="ball" cx="92" cy="180" r="9"/>
              <circle className="ball" cx="44.4" cy="152.5" r="9"/>
              <circle className="ball" cx="44.4" cy="97.5" r="9"/>
              <circle className="ball" cx="92" cy="125" r="9"/>
            </g>

            <g>
              <path className="s draw" style={{ '--len': 1400 } as React.CSSProperties} d="M185 250 L185 182 L196 172 L207 182 L218 172 L229 182 L240 172 L240 150
                     L234 150 L234 118 L240 110 L240 84 L246 76 L246 58 L250 40 L254 58 L254 76 L260 84 L260 110 L266 118 L266 150 L260 150
                     L260 172 L271 182 L282 172 L293 182 L304 172 L315 182 L315 250"/>
              <path className="d draw" style={{ '--len': 600 } as React.CSSProperties} d="M185 206 L315 206 M195 250 L195 222 Q200 214 205 222 L205 250 M215 250 L215 222 Q220 214 225 222 L225 250
                     M275 250 L275 222 Q280 214 285 222 L285 250 M295 250 L295 222 Q300 214 305 222 L305 250 M240 250 L240 226 Q250 212 260 226 L260 250
                     M244 132 L256 132 M246 96 L254 96"/>
            </g>

            <g>
              <path className="s draw" style={{ '--len': 900 } as React.CSSProperties} d="M336 250 L336 142 L340 142 L340 136 L344 136 L344 142 L350 142 L350 136 L354 136 L354 142 L358 142 L358 250
                     M394 250 L394 142 L398 142 L398 136 L402 136 L402 142 L408 142 L408 136 L412 136 L412 142 L416 142 L416 250
                     M358 190 L376 172 L394 190"/>
              <path className="d draw" style={{ '--len': 500 } as React.CSSProperties} d="M376 212 m-11 0 a11 11 0 1 0 22 0 a11 11 0 1 0 -22 0 M368 250 L368 236 Q376 226 384 236 L384 250
                     M342 170 L342 156 Q347 150 352 156 L352 170 M400 170 L400 156 Q405 150 410 156 L410 170"/>
            </g>

            <g>
              <path className="s draw" style={{ '--len': 1300 } as React.CSSProperties} d="M440 250 L440 188 L570 188 L570 250
                     M458 188 L458 164 L552 164 L552 188
                     M478 164 L478 136 L532 136 L532 164
                     M482 136 Q482 92 505 86 Q528 92 528 136
                     M505 86 L505 66 M499 72 L511 72 M500 66 L510 66"/>
              <path className="d draw" style={{ '--len': 600 } as React.CSSProperties} d="M452 250 L452 200 M466 250 L466 200 M480 250 L480 200 M494 250 L494 200 M516 250 L516 200 M530 250 L530 200 M544 250 L544 200 M558 250 L558 200
                     M440 200 L570 200 M488 164 L488 140 M498 164 L498 140 M512 164 L512 140 M522 164 L522 140"/>
            </g>

            <line className="ground" x1="0" y1="250.5" x2="600" y2="250.5"/>
          </svg>

          <div className="caption"><span>Atomium</span><span>Grand-Place</span><span>St. Gudula</span><span>Palais de Justice</span></div>
        </div>
      </div>
    </section>
  );
}

import React, { useState, useEffect } from 'react';

const motivations = [
  "Your competition is grinding while you sleep — pathetic if you’re not.",
  "Network engineers aren’t born, they’re made. Stop whining.",
  "Every second you waste, someone else is winning.",
  "Huawei competitions don’t wait for lazy people.",
  "While you scroll, your competitor configures routers like a boss.",
  "Sleep is for the weak, motivation is for the winners.",
  "Stop crying and start pushing packets, Gift.",
  "Your future self will curse you if you don’t grind today.",
  "Wi-Fi doesn’t care about excuses.",
  "TCP doesn’t wait, why should you?",
  "Switches don’t configure themselves.",
  "Subnet your laziness, route your effort.",
  "Ping me when you’re done being lazy.",
  "Every failed ping is a lesson, not an excuse.",
  "Routers remember the persistent, not the lazy.",
  "VLAN your excuses into oblivion.",
  "Your competition is not napping, neither should you.",
  "Configure, debug, repeat — no shortcuts.",
  "If you’re not learning, someone else is winning.",
  "Packets don’t wait, neither should you.",
  "Toxic motivation: your future self is laughing at your lazy present.",
  "While you hesitate, your competitors gain knowledge.",
  "No mercy, just TCP/IP mastery.",
  "Network mastery isn’t optional, it’s survival.",
  "Your laptop isn’t a pillow, use it to grind.",
  "DHCP won’t assign excuses, so stop expecting them.",
  "Your subnet mask of effort is too small.",
  "Forget comfort, remember competition.",
  "Every ping you skip is a win for someone else.",
  "The only firewall between you and greatness is your laziness.",
  "Switch on your effort, route your destiny.",
  "Packet loss in life? Check your effort.",
  "MAC addresses don’t care about feelings.",
  "Stop browsing memes, start browsing configs.",
  "Gift, stop being basic — become a layer 3 legend.",
  "Error 404: motivation not found? Open this app.",
  "You call this effort? Your competitor laughs.",
  "Console logs don’t print excuses.",
  "CLI is your friend, laziness is your enemy.",
  "Your competitor just wrote a script — what did you do?",
  "Every dropped packet is a chance to learn.",
  "Network downtime? Only if you stop grinding.",
  "VPN to success requires authentication: hard work.",
  "Stop pinging your brain, start pinging your routers.",
  "No GUI can replace CLI mastery.",
  "Your network knowledge grows while you nap.",
  "Gift, remember: motivation is toxic, but so is falling behind.",
  "LAG is not just a port problem — it’s your laziness.",
  "Route your excuses to /dev/null.",
  "Bandwidth your effort, not your distractions.",
  "TCP ACK your own effort daily.",
  "Subnet your laziness, Gift.",
  "Every competitor is a reminder: don’t quit.",
  "Ping the grind, not your excuses.",
  "Network mastery isn’t optional, it’s destiny.",
  "The router doesn’t sleep, neither should you.",
  "CLI > Comfort. Always.",
  "Error: motivation required. Solution: grind.",
  "While you scroll, they configure.",
  "Firewall your distractions, open ports for learning.",
  "Toxicity: your competition is laughing.",
  "Serious: grind until they remember your name.",
  "Funny: no Wi-Fi for the lazy.",
  "Real: Huawei competitions wait for no one.",
  "Gift is the creator, winners are made."
];

export default function App() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const random = motivations[Math.floor(Math.random() * motivations.length)];
    setQuote(random);
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#111', color: '#fff', fontFamily: 'Arial', textAlign: 'center', padding: '20px' }}>
      <div>
        <h1>Daily Grind Motivation</h1>
        <p style={{ fontSize: '1.5rem', marginTop: '20px' }}>{quote}</p>
        <footer style={{ position: 'absolute', bottom: '10px', width: '100%', textAlign: 'center', fontSize: '0.8rem', color: '#aaa' }}>
          Created with grind by Gift
        </footer>
      </div>
    </div>
  );
}

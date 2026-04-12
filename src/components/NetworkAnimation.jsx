import React from "react";

function NetworkAnimation() {
  return (
    <div className="absolute -inset-32 overflow-hidden pointer-events-none">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1400 1000"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Network Connections - Extended Coverage */}
        <g className="network-connections">
          {/* Top Network Layer */}
          <line x1="50" y1="100" x2="250" y2="150" className="network-line animate-network-pulse" />
          <line x1="250" y1="150" x2="450" y2="120" className="network-line animate-network-pulse-delayed" />
          <line x1="450" y1="120" x2="650" y2="160" className="network-line animate-network-pulse" />
          <line x1="650" y1="160" x2="850" y2="110" className="network-line animate-network-pulse-delayed" />
          <line x1="850" y1="110" x2="1050" y2="140" className="network-line animate-network-pulse" />
          <line x1="1050" y1="140" x2="1250" y2="120" className="network-line animate-network-pulse-slow" />
          <line x1="1250" y1="120" x2="1350" y2="150" className="network-line animate-network-pulse" />

          {/* Main Network Lines */}
          <line x1="80" y1="250" x2="280" y2="300" className="network-line animate-network-pulse" />
          <line x1="280" y1="300" x2="480" y2="280" className="network-line animate-network-pulse-delayed" />
          <line x1="480" y1="280" x2="680" y2="320" className="network-line animate-network-pulse" />
          <line x1="680" y1="320" x2="880" y2="260" className="network-line animate-network-pulse-delayed" />
          <line x1="880" y1="260" x2="1080" y2="300" className="network-line animate-network-pulse" />
          <line x1="1080" y1="300" x2="1280" y2="280" className="network-line animate-network-pulse-slow" />

          {/* Central Network Hub */}
          <line x1="150" y1="400" x2="350" y2="450" className="network-line animate-network-pulse-slow" />
          <line x1="350" y1="450" x2="550" y2="430" className="network-line animate-network-pulse" />
          <line x1="550" y1="430" x2="750" y2="470" className="network-line animate-network-pulse-delayed" />
          <line x1="750" y1="470" x2="950" y2="440" className="network-line animate-network-pulse-slow" />
          <line x1="950" y1="440" x2="1150" y2="460" className="network-line animate-network-pulse" />
          <line x1="1150" y1="460" x2="1300" y2="450" className="network-line animate-network-pulse-delayed" />

          {/* Lower Network Layer */}
          <line x1="100" y1="600" x2="300" y2="580" className="network-line animate-network-pulse" />
          <line x1="300" y1="580" x2="500" y2="620" className="network-line animate-network-pulse-delayed" />
          <line x1="500" y1="620" x2="700" y2="590" className="network-line animate-network-pulse-slow" />
          <line x1="700" y1="590" x2="900" y2="630" className="network-line animate-network-pulse" />
          <line x1="900" y1="630" x2="1100" y2="600" className="network-line animate-network-pulse-delayed" />
          <line x1="1100" y1="600" x2="1320" y2="620" className="network-line animate-network-pulse" />

          {/* Bottom Edge Network */}
          <line x1="120" y1="750" x2="320" y2="780" className="network-line animate-network-pulse-slow" />
          <line x1="320" y1="780" x2="520" y2="760" className="network-line animate-network-pulse" />
          <line x1="520" y1="760" x2="720" y2="790" className="network-line animate-network-pulse-delayed" />
          <line x1="720" y1="790" x2="920" y2="770" className="network-line animate-network-pulse" />
          <line x1="920" y1="770" x2="1120" y2="800" className="network-line animate-network-pulse-slow" />

          {/* Vertical Cross Connections */}
          <line x1="250" y1="150" x2="150" y2="400" className="network-line animate-network-pulse" />
          <line x1="450" y1="120" x2="350" y2="450" className="network-line animate-network-pulse-delayed" />
          <line x1="650" y1="160" x2="550" y2="430" className="network-line animate-network-pulse" />
          <line x1="850" y1="110" x2="750" y2="470" className="network-line animate-network-pulse-slow" />
          <line x1="1050" y1="140" x2="950" y2="440" className="network-line animate-network-pulse" />
          <line x1="1250" y1="120" x2="1150" y2="460" className="network-line animate-network-pulse-delayed" />

          {/* Extended Vertical Connections */}
          <line x1="280" y1="300" x2="300" y2="580" className="network-line animate-network-pulse-delayed" />
          <line x1="480" y1="280" x2="500" y2="620" className="network-line animate-network-pulse" />
          <line x1="680" y1="320" x2="700" y2="590" className="network-line animate-network-pulse-slow" />
          <line x1="880" y1="260" x2="900" y2="630" className="network-line animate-network-pulse" />
          <line x1="1080" y1="300" x2="1100" y2="600" className="network-line animate-network-pulse-delayed" />

          {/* Further vertical to bottom */}
          <line x1="300" y1="580" x2="320" y2="780" className="network-line animate-network-pulse" />
          <line x1="500" y1="620" x2="520" y2="760" className="network-line animate-network-pulse-slow" />
          <line x1="700" y1="590" x2="720" y2="790" className="network-line animate-network-pulse-delayed" />
          <line x1="900" y1="630" x2="920" y2="770" className="network-line animate-network-pulse" />

          {/* Diagonal Mesh Network */}
          <line x1="120" y1="200" x2="320" y2="350" className="network-line animate-network-pulse-delayed" />
          <line x1="320" y1="350" x2="520" y2="500" className="network-line animate-network-pulse" />
          <line x1="520" y1="500" x2="720" y2="650" className="network-line animate-network-pulse-slow" />
          <line x1="720" y1="650" x2="920" y2="800" className="network-line animate-network-pulse" />

          {/* Reverse Diagonal */}
          <line x1="1300" y1="200" x2="1100" y2="350" className="network-line animate-network-pulse" />
          <line x1="1100" y1="350" x2="900" y2="500" className="network-line animate-network-pulse-delayed" />
          <line x1="900" y1="500" x2="700" y2="650" className="network-line animate-network-pulse-slow" />
          <line x1="700" y1="650" x2="500" y2="800" className="network-line animate-network-pulse" />

          {/* Additional Cross Mesh */}
          <line x1="200" y1="350" x2="600" y2="250" className="network-line animate-network-pulse-delayed" />
          <line x1="600" y1="250" x2="1000" y2="350" className="network-line animate-network-pulse" />
          <line x1="1000" y1="350" x2="800" y2="550" className="network-line animate-network-pulse-slow" />
          <line x1="800" y1="550" x2="400" y2="650" className="network-line animate-network-pulse" />
        </g>

        {/* Server Nodes - Main Infrastructure */}
        <g className="server-nodes">
          <circle cx="250" cy="150" r="8" className="network-node server-node animate-node-pulse" />
          <circle cx="650" cy="160" r="8" className="network-node server-node animate-node-pulse-delayed" />
          <circle cx="1050" cy="140" r="8" className="network-node server-node animate-node-pulse" />
          <circle cx="280" cy="300" r="7" className="network-node server-node animate-node-pulse-slow" />
          <circle cx="680" cy="320" r="7" className="network-node server-node animate-node-pulse" />
          <circle cx="1080" cy="300" r="7" className="network-node server-node animate-node-pulse-delayed" />
          <circle cx="350" cy="450" r="6" className="network-node server-node animate-node-pulse" />
          <circle cx="750" cy="470" r="6" className="network-node server-node animate-node-pulse-slow" />
          <circle cx="1150" cy="460" r="6" className="network-node server-node animate-node-pulse-delayed" />
        </g>

        {/* Database Nodes - Data Layer */}
        <g className="database-nodes">
          <ellipse cx="450" cy="120" rx="10" ry="6" className="network-node database-node animate-node-pulse-slow" />
          <ellipse cx="850" cy="110" rx="10" ry="6" className="network-node database-node animate-node-pulse" />
          <ellipse cx="1250" cy="120" rx="10" ry="6" className="network-node database-node animate-node-pulse-delayed" />
          <ellipse cx="480" cy="280" rx="9" ry="5" className="network-node database-node animate-node-pulse" />
          <ellipse cx="880" cy="260" rx="9" ry="5" className="network-node database-node animate-node-pulse-slow" />
          <ellipse cx="550" cy="430" rx="8" ry="5" className="network-node database-node animate-node-pulse-delayed" />
          <ellipse cx="950" cy="440" rx="8" ry="5" className="network-node database-node animate-node-pulse" />
          <ellipse cx="300" cy="580" rx="7" ry="4" className="network-node database-node animate-node-pulse-slow" />
          <ellipse cx="700" cy="590" rx="7" ry="4" className="network-node database-node animate-node-pulse" />
          <ellipse cx="1100" cy="600" rx="7" ry="4" className="network-node database-node animate-node-pulse-delayed" />
        </g>

        {/* API Gateway Nodes - Service Layer */}
        <g className="api-nodes">
          <rect x="75" y="245" width="10" height="10" rx="2" className="network-node api-node animate-node-pulse" />
          <rect x="345" y="445" width="10" height="10" rx="2" className="network-node api-node animate-node-pulse-delayed" />
          <rect x="745" y="465" width="10" height="10" rx="2" className="network-node api-node animate-node-pulse-slow" />
          <rect x="1145" y="455" width="10" height="10" rx="2" className="network-node api-node animate-node-pulse" />
          <rect x="145" y="395" width="9" height="9" rx="2" className="network-node api-node animate-node-pulse-delayed" />
          <rect x="545" y="425" width="9" height="9" rx="2" className="network-node api-node animate-node-pulse" />
          <rect x="945" y="435" width="9" height="9" rx="2" className="network-node api-node animate-node-pulse-slow" />
          <rect x="295" y="575" width="8" height="8" rx="2" className="network-node api-node animate-node-pulse" />
          <rect x="695" y="585" width="8" height="8" rx="2" className="network-node api-node animate-node-pulse-delayed" />
          <rect x="1095" y="595" width="8" height="8" rx="2" className="network-node api-node animate-node-pulse-slow" />
        </g>

        {/* Client Nodes - User Layer */}
        <g className="client-nodes">
          <polygon points="150,395 160,405 150,415 140,405" className="network-node client-node animate-node-pulse-delayed" />
          <polygon points="550,425 560,435 550,445 540,435" className="network-node client-node animate-node-pulse" />
          <polygon points="950,435 960,445 950,455 940,445" className="network-node client-node animate-node-pulse-slow" />
          <polygon points="320,775 330,785 320,795 310,785" className="network-node client-node animate-node-pulse" />
          <polygon points="720,785 730,795 720,805 710,795" className="network-node client-node animate-node-pulse-delayed" />
          <polygon points="920,765 930,775 920,785 910,775" className="network-node client-node animate-node-pulse-slow" />
          <polygon points="80,245 90,255 80,265 70,255" className="network-node client-node animate-node-pulse" />
          <polygon points="1280,275 1290,285 1280,295 1270,285" className="network-node client-node animate-node-pulse-delayed" />
          <polygon points="200,345 210,355 200,365 190,355" className="network-node client-node animate-node-pulse-slow" />
          <polygon points="600,245 610,255 600,265 590,255" className="network-node client-node animate-node-pulse" />
          <polygon points="1000,345 1010,355 1000,365 990,355" className="network-node client-node animate-node-pulse-delayed" />
        </g>

        {/* Data Flow Indicators - Multiple Streams */}
        <g className="data-flow">
          <circle r="3" className="data-packet animate-data-flow-1">
            <animateMotion dur="8s" repeatCount="indefinite" path="M50,100 L250,150 L450,120 L650,160 L850,110 L1050,140 L1250,120 L1350,150" />
          </circle>
          <circle r="2.5" className="data-packet animate-data-flow-2">
            <animateMotion dur="10s" repeatCount="indefinite" path="M80,250 L280,300 L480,280 L680,320 L880,260 L1080,300 L1280,280" />
          </circle>
          <circle r="2" className="data-packet animate-data-flow-3">
            <animateMotion dur="12s" repeatCount="indefinite" path="M150,400 L350,450 L550,430 L750,470 L950,440 L1150,460 L1300,450" />
          </circle>
          <circle r="2.5" className="data-packet animate-data-flow-1">
            <animateMotion dur="14s" repeatCount="indefinite" path="M100,600 L300,580 L500,620 L700,590 L900,630 L1100,600 L1320,620" />
          </circle>
          <circle r="2" className="data-packet animate-data-flow-2">
            <animateMotion dur="16s" repeatCount="indefinite" path="M120,750 L320,780 L520,760 L720,790 L920,770 L1120,800" />
          </circle>
          <circle r="1.5" className="data-packet animate-data-flow-3">
            <animateMotion dur="9s" repeatCount="indefinite" path="M250,150 L150,400 L300,580 L320,780" />
          </circle>
          <circle r="2" className="data-packet animate-data-flow-1">
            <animateMotion dur="11s" repeatCount="indefinite" path="M650,160 L550,430 L700,590 L720,790" />
          </circle>
          <circle r="1.5" className="data-packet animate-data-flow-2">
            <animateMotion dur="13s" repeatCount="indefinite" path="M1050,140 L950,440 L1100,600 L920,770" />
          </circle>
          <circle r="2" className="data-packet animate-data-flow-3">
            <animateMotion dur="15s" repeatCount="indefinite" path="M120,200 L320,350 L520,500 L720,650 L920,800" />
          </circle>
          <circle r="1.8" className="data-packet animate-data-flow-1">
            <animateMotion dur="17s" repeatCount="indefinite" path="M1300,200 L1100,350 L900,500 L700,650 L500,800" />
          </circle>
          <circle r="2.2" className="data-packet animate-data-flow-2">
            <animateMotion dur="12s" repeatCount="indefinite" path="M1350,150 L1250,120 L1050,140 L850,110 L650,160 L450,120 L250,150 L50,100" />
          </circle>
          <circle r="1.7" className="data-packet animate-data-flow-3">
            <animateMotion dur="14s" repeatCount="indefinite" path="M1280,280 L1080,300 L880,260 L680,320 L480,280 L280,300 L80,250" />
          </circle>
        </g>

        {/* Network Status Indicators */}
        <g className="status-indicators">
          <circle cx="1320" cy="40" r="4" className="status-indicator status-active animate-status-blink" />
          <circle cx="1320" cy="55" r="4" className="status-indicator status-warning animate-status-blink-delayed" />
          <circle cx="1320" cy="70" r="4" className="status-indicator status-error animate-status-blink-slow" />
          <circle cx="1320" cy="85" r="4" className="status-indicator status-active animate-status-blink-delayed" />
          <circle cx="30" cy="40" r="3" className="status-indicator status-active animate-status-blink-slow" />
          <circle cx="30" cy="55" r="3" className="status-indicator status-active animate-status-blink" />
          <circle cx="30" cy="70" r="3" className="status-indicator status-warning animate-status-blink-delayed" />
          <circle cx="700" cy="25" r="3" className="status-indicator status-active animate-status-blink" />
          <circle cx="720" cy="25" r="3" className="status-indicator status-active animate-status-blink-delayed" />
          <circle cx="740" cy="25" r="3" className="status-indicator status-warning animate-status-blink-slow" />
          <circle cx="30" cy="920" r="3" className="status-indicator status-active animate-status-blink-delayed" />
          <circle cx="30" cy="935" r="3" className="status-indicator status-warning animate-status-blink" />
          <circle cx="1320" cy="920" r="3" className="status-indicator status-active animate-status-blink-slow" />
          <circle cx="1320" cy="935" r="3" className="status-indicator status-active animate-status-blink" />
        </g>
      </svg>
    </div>
  );
}

export default NetworkAnimation;

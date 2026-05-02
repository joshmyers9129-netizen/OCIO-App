export default function ServiceModelFitMatrix() {
  return (
    <div className="w-full bg-white rounded-lg p-6 border border-[#E8DDD4]">
      <svg viewBox="0 0 600 480" className="w-full" style={{ minHeight: "400px" }}>
        {/* Background grid */}
        <defs>
          <pattern id="grid" width="150" height="120" patternUnits="userSpaceOnUse">
            <path d="M 150 0 L 0 0 0 120" fill="none" stroke="#E8DDD4" strokeWidth="0.5" />
          </pattern>
        </defs>

        {/* Quadrant backgrounds */}
        <rect x="70" y="60" width="150" height="120" fill="#2294BD" opacity="0.08" />
        <rect x="220" y="60" width="150" height="120" fill="#FAA51A" opacity="0.08" />
        <rect x="70" y="180" width="150" height="120" fill="#7C5CBF" opacity="0.08" />
        <rect x="220" y="180" width="150" height="120" fill="#D9532B" opacity="0.08" />

        {/* Axes */}
        <line x1="70" y1="300" x2="370" y2="300" stroke="#000000" strokeWidth="2" />
        <line x1="70" y1="60" x2="70" y2="300" stroke="#000000" strokeWidth="2" />

        {/* Axis labels */}
        <text x="220" y="340" textAnchor="middle" fontSize="14" fontWeight="600" fill="#000000">
          Governance Burden →
        </text>
        <text x="30" y="180" textAnchor="middle" fontSize="14" fontWeight="600" fill="#000000" transform="rotate(-90 30 180)">
          Implementation Complexity →
        </text>

        {/* Low/High labels on axes */}
        <text x="65" y="320" fontSize="12" fill="#404040">
          Low
        </text>
        <text x="365" y="320" fontSize="12" fill="#404040" textAnchor="end">
          High
        </text>
        <text x="50" y="65" fontSize="12" fill="#404040" textAnchor="end">
          High
        </text>
        <text x="50" y="305" fontSize="12" fill="#404040" textAnchor="end">
          Low
        </text>

        {/* Quadrant labels */}
        {/* Low Burden, Low Complexity */}
        <text x="145" y="95" textAnchor="middle" fontSize="12" fontWeight="700" fill="#2294BD">
          Consulting
        </text>
        <text x="145" y="112" textAnchor="middle" fontSize="11" fill="#404040">
          Often sufficient
        </text>

        {/* Low Burden, High Complexity */}
        <text x="295" y="95" textAnchor="middle" fontSize="12" fontWeight="700" fill="#FAA51A">
          Implementation
        </text>
        <text x="295" y="112" textAnchor="middle" fontSize="11" fill="#404040">
          Support or
        </text>
        <text x="295" y="125" textAnchor="middle" fontSize="11" fill="#404040">
          Limited Delegation
        </text>

        {/* High Burden, Low Complexity */}
        <text x="145" y="215" textAnchor="middle" fontSize="12" fontWeight="700" fill="#7C5CBF">
          Partial OCIO
        </text>
        <text x="145" y="232" textAnchor="middle" fontSize="11" fill="#404040">
          Hybrid model
        </text>

        {/* High Burden, High Complexity */}
        <text x="295" y="215" textAnchor="middle" fontSize="12" fontWeight="700" fill="#D9532B">
          Full OCIO
        </text>
        <text x="295" y="232" textAnchor="middle" fontSize="11" fill="#404040">
          Strongest fit
        </text>

        {/* Example dots */}
        {/* Small college endowment - low burden, low complexity */}
        <circle cx="110" cy="140" r="4" fill="#2294BD" opacity="0.7" />
        <text x="120" y="145" fontSize="10" fill="#2294BD" fontWeight="600">
          College
        </text>

        {/* Hospital system - high burden, high complexity */}
        <circle cx="340" cy="250" r="4" fill="#D9532B" opacity="0.7" />
        <text x="350" y="255" fontSize="10" fill="#D9532B" fontWeight="600">
          Hospital
        </text>

        {/* Frozen DB Plan - low burden, high complexity */}
        <circle cx="310" cy="100" r="4" fill="#FAA51A" opacity="0.7" />
        <text x="320" y="105" fontSize="10" fill="#FAA51A" fontWeight="600">
          Frozen DB
        </text>

        {/* Public plan - high burden, low complexity */}
        <circle cx="100" cy="260" r="4" fill="#7C5CBF" opacity="0.7" />
        <text x="110" y="265" fontSize="10" fill="#7C5CBF" fontWeight="600">
          Public Plan
        </text>

        {/* Key insight annotation */}
        <rect x="420" y="240" width="160" height="50" fill="#FBF7F3" stroke="#000000" strokeWidth="1" rx="4" />
        <text x="430" y="257" fontSize="11" fontWeight="700" fill="#000000">
          Start with bottleneck,
        </text>
        <text x="430" y="272" fontSize="11" fontWeight="700" fill="#000000">
          not provider category
        </text>
      </svg>
    </div>
  );
}

export default function DecisionRightsSpectrum() {
  const spectrum = [
    { label: "No Delegation", desc: "Committee decides all" },
    { label: "Advisory", desc: "Provider recommends" },
    { label: "Partial Delegation", desc: "Some decisions delegated" },
    { label: "Full Discretion", desc: "Provider executes within policy" },
  ];

  const colors = ["#7C5CBF", "#FAA51A", "#2294BD", "#D9532B"];

  return (
    <div className="w-full bg-white rounded-lg p-6 border border-[#E8DDD4]">
      {/* Spectrum bar */}
      <div className="mb-8">
        <div className="flex h-12 rounded-lg overflow-hidden shadow-sm">
          {spectrum.map((item, i) => (
            <div
              key={i}
              className="flex-1 flex items-center justify-center font-bold text-white text-sm"
              style={{ backgroundColor: colors[i] }}
            >
              {item.label}
            </div>
          ))}
        </div>

        {/* Descriptions */}
        <div className="grid grid-cols-4 gap-4 mt-4">
          {spectrum.map((item, i) => (
            <div key={i} className="text-center">
              <p className="text-xs text-[#404040]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Characteristics grid */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="p-4 bg-[#7C5CBF]/5 rounded-lg border border-[#7C5CBF]/20">
          <p className="text-xs font-bold text-[#7C5CBF] uppercase tracking-wider mb-2">No Delegation</p>
          <ul className="text-sm text-[#404040] space-y-1">
            <li>• High governance burden</li>
            <li>• Slow decision-making</li>
            <li>• Full internal accountability</li>
          </ul>
        </div>

        <div className="p-4 bg-[#FAA51A]/5 rounded-lg border border-[#FAA51A]/20">
          <p className="text-xs font-bold text-[#FAA51A] uppercase tracking-wider mb-2">Advisory</p>
          <ul className="text-sm text-[#404040] space-y-1">
            <li>• Provider expertise leveraged</li>
            <li>• Committee retains control</li>
            <li>• Implementation burden remains</li>
          </ul>
        </div>

        <div className="p-4 bg-[#2294BD]/5 rounded-lg border border-[#2294BD]/20">
          <p className="text-xs font-bold text-[#2294BD] uppercase tracking-wider mb-2">Partial Delegation</p>
          <ul className="text-sm text-[#404040] space-y-1">
            <li>• Balanced approach</li>
            <li>• Modular decision-making</li>
            <li>• Retains key authority</li>
          </ul>
        </div>

        <div className="p-4 bg-[#D9532B]/5 rounded-lg border border-[#D9532B]/20">
          <p className="text-xs font-bold text-[#D9532B] uppercase tracking-wider mb-2">Full Discretion</p>
          <ul className="text-sm text-[#404040] space-y-1">
            <li>• Lowest governance burden</li>
            <li>• Fastest execution</li>
            <li>• Provider accountability</li>
          </ul>
        </div>
      </div>

      {/* Key insight */}
      <div className="p-4 bg-[#F0E6DD] rounded-lg border border-[#D0C8C0]">
        <p className="text-sm text-[#404040]">
          <strong>The decision is not binary.</strong> Most effective mandates sit somewhere in the middle—delegating time-sensitive decisions while retaining authority over strategic choices.
        </p>
      </div>
    </div>
  );
}

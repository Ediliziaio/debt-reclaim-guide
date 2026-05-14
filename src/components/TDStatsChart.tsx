import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
  ReferenceLine,
  LabelList,
} from "recharts";
import { BarChart3, TrendingDown, Target, Sparkles } from "lucide-react";
import Reveal from "./Reveal";

type Datum = {
  name: string;
  short: string;
  value: number;
  desc: string;
  highlight?: boolean;
};

const data: Datum[] = [
  {
    name: "Concordato minore",
    short: "Concordato minore",
    value: 70,
    desc: "Per ex-imprenditori e professionisti. Ristrutturazione del debito con omologa del Tribunale.",
  },
  {
    name: "Piano del consumatore",
    short: "Piano consumatore",
    value: 75,
    desc: "Privati con reddito stabile. Proposta di pagamento parziale omologata senza voto dei creditori.",
  },
  {
    name: "Liquidazione controllata",
    short: "Liquidazione contr.",
    value: 80,
    desc: "Cessione del patrimonio in cambio della cancellazione del debito residuo.",
  },
  {
    name: "Esdebitazione dell'incapiente",
    short: "Esdebitaz. incapiente",
    value: 100,
    desc: "Per chi non ha né patrimonio né reddito sufficiente. Cancellazione integrale dei debiti.",
    highlight: true,
  },
  {
    name: "Composizione negoziata",
    short: "Comp. negoziata",
    value: 55,
    desc: "Strumento riservato per imprese in difficoltà. Trattativa assistita con un esperto indipendente.",
  },
  {
    name: "Rottamazione quater",
    short: "Rottamazione",
    value: 35,
    desc: "Definizione agevolata delle cartelle: niente sanzioni né interessi di mora.",
  },
];

const average = Math.round(data.reduce((s, d) => s + d.value, 0) / data.length);
const top = data.reduce((acc, d) => (d.value > acc.value ? d : acc), data[0]);

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ value: number; payload: Datum }>;
}

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  return (
    <div className="bg-white border border-border rounded-xl shadow-primary p-4 text-sm max-w-[260px]">
      <div className="flex items-baseline justify-between gap-3 mb-2">
        <span className="font-bold text-navy text-base">{d.name}</span>
        <span className="font-black text-2xl text-gold-dark">{d.value}%</span>
      </div>
      <div className="text-xs text-foreground/60 uppercase tracking-wider font-semibold mb-2">Riduzione media</div>
      <p className="text-foreground/75 leading-relaxed text-xs">{d.desc}</p>
    </div>
  );
};

const ValueLabel = (props: { x?: number; y?: number; width?: number; value?: number; payload?: Datum }) => {
  const { x = 0, y = 0, width = 0, value = 0, payload } = props;
  if (!value) return null;
  return (
    <text
      x={x + width / 2}
      y={y - 8}
      textAnchor="middle"
      className={`text-sm font-bold ${payload?.highlight ? "fill-gold-dark" : "fill-navy"}`}
    >
      {value}%
    </text>
  );
};

const TDStatsChart = () => {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="grid lg:grid-cols-[1fr_auto] gap-6 items-end mb-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gold/15 text-navy rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                <BarChart3 className="w-3.5 h-3.5 text-gold-dark" />
                Indicazioni di mercato
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy mb-4 leading-tight">
                Riduzione media per <span className="text-gold-dark">strumento normativo</span>.
              </h2>
              <p className="text-foreground/70 text-lg leading-relaxed">
                Valori medi di riduzione del debito originario rilevati nei casi seguiti dallo studio. I dati sono indicativi e dipendono dalla singola posizione: non costituiscono garanzia di risultati analoghi.
              </p>
            </div>
          </div>
        </Reveal>

        {/* KPI cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <Reveal delay={0} direction="scale">
            <div className="bg-gradient-to-br from-navy to-navy-light rounded-2xl p-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-4 h-4 text-gold" />
                <span className="text-xs font-bold uppercase tracking-wider text-gold">Riduzione media</span>
              </div>
              <div className="text-4xl font-black text-white mb-1">{average}%</div>
              <p className="text-sm text-white/70 leading-relaxed">
                Riduzione media calcolata sui 6 strumenti più utilizzati nello studio.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120} direction="scale">
            <div className="bg-gradient-to-br from-gold to-gold-dark rounded-2xl p-6 text-navy">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-navy" />
                <span className="text-xs font-bold uppercase tracking-wider">Massima efficacia</span>
              </div>
              <div className="text-4xl font-black mb-1">{top.value}%</div>
              <p className="text-sm leading-relaxed">
                <strong>{top.name}</strong> — cancellazione integrale per chi è in condizione di incapienza.
              </p>
            </div>
          </Reveal>

          <Reveal delay={240} direction="scale">
            <div className="bg-white rounded-2xl p-6 border-2 border-border">
              <div className="flex items-center gap-2 mb-3">
                <TrendingDown className="w-4 h-4 text-gold-dark" />
                <span className="text-xs font-bold uppercase tracking-wider text-foreground/60">Strumenti disponibili</span>
              </div>
              <div className="text-4xl font-black text-navy mb-1">{data.length}</div>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Procedure attivabili a seconda della situazione patrimoniale e dei creditori.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Chart */}
        <Reveal>
          <div className="bg-muted/40 rounded-2xl p-6 lg:p-8 border border-border">
            <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
              <h3 className="font-bold text-navy">Confronto tra strumenti</h3>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
                <span className="flex items-center gap-1.5">
                  <span className="inline-block w-3 h-3 rounded bg-navy" />
                  <span className="text-foreground/70">Procedure ordinarie</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="inline-block w-3 h-3 rounded bg-gold" />
                  <span className="text-foreground/70">Cancellazione integrale</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="inline-block w-6 border-t-2 border-dashed border-foreground/50" />
                  <span className="text-foreground/70">Media ({average}%)</span>
                </span>
              </div>
            </div>

            <div className="h-[380px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ top: 30, right: 10, left: 0, bottom: 70 }}>
                  <defs>
                    <linearGradient id="barNavy" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="hsl(217 38% 32%)" />
                      <stop offset="100%" stopColor="hsl(217 38% 22%)" />
                    </linearGradient>
                    <linearGradient id="barGold" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="hsl(45 90% 65%)" />
                      <stop offset="100%" stopColor="hsl(45 90% 51%)" />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
                  <XAxis
                    dataKey="short"
                    tick={{ fill: "#475569", fontSize: 12, fontWeight: 500 }}
                    axisLine={{ stroke: "#CBD5E1" }}
                    tickLine={false}
                    angle={-22}
                    textAnchor="end"
                    height={80}
                    interval={0}
                  />
                  <YAxis
                    tick={{ fill: "#6B7280", fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(v) => `${v}%`}
                    domain={[0, 110]}
                    ticks={[0, 25, 50, 75, 100]}
                  />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(245, 184, 0, 0.06)" }} />
                  <ReferenceLine
                    y={average}
                    stroke="#64748B"
                    strokeDasharray="6 4"
                    strokeWidth={1.5}
                    label={{
                      value: `Media ${average}%`,
                      position: "insideTopRight",
                      fill: "#475569",
                      fontSize: 11,
                      fontWeight: 600,
                    }}
                  />
                  <Bar dataKey="value" radius={[10, 10, 0, 0]} animationDuration={1200} animationEasing="ease-out">
                    <LabelList dataKey="value" content={<ValueLabel />} />
                    {data.map((entry, i) => (
                      <Cell key={i} fill={entry.highlight ? "url(#barGold)" : "url(#barNavy)"} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <p className="text-xs text-foreground/50 mt-5 italic leading-relaxed">
              <strong className="text-foreground/70 not-italic">Fonte:</strong> elaborazione interna su pratiche seguite dallo studio. I valori riflettono le riduzioni medie ottenute e variano in base a entità del debito, patrimonio, reddito, natura dei creditori e tempistica di intervento.
            </p>
          </div>
        </Reveal>

        {/* Brief description grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-6">
          {data.map((d, i) => (
            <Reveal key={d.name} delay={i * 60}>
              <div className="bg-white rounded-xl p-4 border border-border flex items-start gap-3 h-full">
                <div
                  className={`w-1.5 h-full min-h-[40px] rounded-full shrink-0 ${
                    d.highlight ? "bg-gold" : "bg-navy/60"
                  }`}
                />
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-2 mb-1">
                    <h4 className="font-bold text-navy text-sm">{d.name}</h4>
                    <span className={`text-sm font-black ${d.highlight ? "text-gold-dark" : "text-navy"}`}>
                      {d.value}%
                    </span>
                  </div>
                  <p className="text-xs text-foreground/70 leading-relaxed">{d.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TDStatsChart;

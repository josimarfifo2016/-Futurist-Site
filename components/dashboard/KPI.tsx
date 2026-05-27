type Props = {
  title: string;
  value: string;
};

export default function KPI({ title, value }: Props) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
      <p className="text-white/50 text-sm">{title}</p>

      <h2 className="text-4xl font-black mt-2">
        {value}
      </h2>
    </div>
  );
}
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { StatInterface } from "../interface";

const PokemonStats = ({ pokeStats }: { pokeStats: StatInterface[] }) => (
  <>
    <h3 className="font-semibold text-2xl mb-3">Stats:</h3>
    <div className="md:hidden flex justify-center items-center">
      <div>
        <BarChart
          width={350}
          height={155}
          data={pokeStats}
          layout="vertical"
          barSize={30}
        >
          <XAxis type="number" hide />
          <YAxis type="category" dataKey="name" stroke="#8884d8" width={150} />
          <Tooltip />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar dataKey="stat" fill="#8884d8" stroke="#8884d8" />
        </BarChart>
      </div>
    </div>
    <div className="hidden lg:block xl:hidden">
      <BarChart
        width={450}
        height={200}
        data={pokeStats}
        layout="vertical"
        barSize={30}
      >
        <XAxis type="number" hide />
        <YAxis type="category" dataKey="name" stroke="#8884d8" width={150} />
        <Tooltip />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar dataKey="stat" fill="#8884d8" stroke="#8884d8" />
      </BarChart>
    </div>
    <div className="hidden md:block lg:hidden xl:block">
      <BarChart
        width={600}
        height={300}
        data={pokeStats}
        layout="vertical"
        barSize={30}
      >
        <XAxis type="number" hide />
        <YAxis type="category" dataKey="name" stroke="#8884d8" width={150} />
        <Tooltip />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar dataKey="stat" fill="#8884d8" stroke="#8884d8" />
      </BarChart>
    </div>
  </>
);

export default PokemonStats;

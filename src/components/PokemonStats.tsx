import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { StatInterface } from "../interface";

const PokemonStats = ({ pokeStats }: { pokeStats: StatInterface[] }) => (
  <BarChart width={600} height={300} data={pokeStats} layout="vertical">
    <XAxis type="number" hide />
    <YAxis type="category" dataKey="name" stroke="#8884d8" />
    <Tooltip />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <Bar dataKey="stat" fill="#8884d8" barSize={40} stroke="#8884d8" />
  </BarChart>
);

export default PokemonStats;

import { View, Text } from "react-native";
import { s } from "./TemperatureDisplay.style";

export default function TemperatureDisplay({ value, unit }) {
  return (
  <Text style={s.text}>
    {value} {unit}
  </Text>
  );
}

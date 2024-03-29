import {
  TouchableOpacity,
  Dimensions,
  TouchableOpacityProps,
} from "react-native";

interface Props extends TouchableOpacityProps {}

const weekDays = 7;
const screenHorizontalPadding = (32 * 2) / 5;
export const DayMarginBetween = 8;
export const daySize =
  Dimensions.get("screen").width / weekDays - (screenHorizontalPadding + 5);

export function HabitDay({...rest}: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800"
      style={{ width: daySize, height: daySize }}
      {...rest}
    />
  );
}

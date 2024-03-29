import { Feather } from "@expo/vector-icons";
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import colors from "tailwindcss/colors";

interface Props extends TouchableOpacityProps {
  title: string;
  checked?: boolean;
}

export function Checkbox({ title, checked = false, ...rest }: Props) {
  return (
    <View className="flex-row mb-2 mt-2 items-center">
      <TouchableOpacity activeOpacity={0.7} {...rest}>
        {checked ? (
          <View className="h-8 w-8 bg-green-500 rounded-lg items-center justify-center">
            <Feather name="check" size={20} color={colors.white} />
          </View>
        ) : (
          <View className="h-8 w-8 bg-zinc-800 rounded-lg" />
        )}
      </TouchableOpacity>
      <Text className="text-white text-base ml-3 font-semibold">{title}</Text>
    </View>
  );
}

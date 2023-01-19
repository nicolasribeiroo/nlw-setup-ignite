import { useRoute } from "@react-navigation/native";
import dayjs from "dayjs";
import { ScrollView, Text, View } from "react-native";
import { BackButton } from "../components/BackButton";
import { CheckBox } from "../components/CheckBox";
import { ProgressBar } from "../components/ProgressBar";

type HabitProps = {
  date: string;
};

export function Habit({}: HabitProps) {
  const route = useRoute();
  const { date } = route.params as HabitProps;

  const parsedDate = dayjs(date);
  const dayOfWeek = parsedDate.format("dddd");
  const dayAndMonth = parsedDate.format("DD/MM");

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <BackButton />

        <Text className="mt-6 text-zinc-400 font-semibold text-base lowercase">
          {dayOfWeek}
        </Text>

        <Text className="text-white font-extrabold text-3xl">
          {dayAndMonth}
        </Text>

        <ProgressBar progress={75} />

        <View className="mt-6">
          <CheckBox title="Beber 2L de Água" checked={false} />

          <CheckBox title="Exercícios" checked={true} />
        </View>
      </ScrollView>
    </View>
  );
}

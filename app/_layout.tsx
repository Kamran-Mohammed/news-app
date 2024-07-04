import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="News App" options={{ title: "News App" }} />
    </Stack>
  );
}

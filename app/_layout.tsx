import { Stack } from "expo-router";

export default function RootLayout() {
  return (<Stack screenOptions={{
    headerShown:false,
    contentStyle: { paddingTop: 60, paddingHorizontal: 15 },
  }}>
      <Stack.Screen name="(tabs)"/>
      <Stack.Screen name="login"/>
  </Stack>
  )
}

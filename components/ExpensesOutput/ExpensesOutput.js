import { StyleSheet, View } from "react-native";
import ExpenesSummary from "./ExpensesSummary";
import ExpenesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "Bought sum fruits",
    amount: 69.99,
    date: new Date("2023-12-14"),
  },
  {
    id: "e2",
    description: "Bought a pair of shoe",
    amount: 80.0,
    date: new Date("2023-12-14"),
  },
  {
    id: "e3",
    description: "Bought a pair of shoe",
    amount: 55.99,
    date: new Date("2023-07-10"),
  },
  {
    id: "e4",
    description: "Stationaries",
    amount: 18.99,
    date: new Date("2023-03-14"),
  },
  {
    id: "e5",
    description: "Some More Stationaries",
    amount: 14.75,
    date: new Date("2023-02-19"),
  },
  {
    id: "e6",
    description: "Bought sum fruits",
    amount: 69.99,
    date: new Date("2023-12-14"),
  },
  {
    id: "e7",
    description: "Bought a pair of shoe",
    amount: 80.0,
    date: new Date("2023-12-14"),
  },
  {
    id: "e8",
    description: "Bought a pair of shoe",
    amount: 55.99,
    date: new Date("2023-07-10"),
  },
  {
    id: "e9",
    description: "Stationaries",
    amount: 18.99,
    date: new Date("2023-03-14"),
  },
  {
    id: "e10",
    description: "Some More Stationaries",
    amount: 14.75,
    date: new Date("2023-02-19"),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpenesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpenesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.white,
  },
});

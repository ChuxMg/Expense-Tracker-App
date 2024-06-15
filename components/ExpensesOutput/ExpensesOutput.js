import { StyleSheet, View } from "react-native";
import ExpenesSummary from "./ExpensesSummary";
import ExpenesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";



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

import { StyleSheet, Text, View } from "react-native";
import ExpenesSummary from "./ExpensesSummary";
import ExpenesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

function ExpensesOutput({ expenses, expensesPeriod, fallbackText }) {
  let content = <Text style={styles.infoText}>{fallbackText}</Text>;

  if (expenses.length > 0) {
    content = <ExpenesList expenses={expenses} />;
  }

  return (
    <View style={styles.container}>
      <ExpenesSummary expenses={expenses} periodName={expensesPeriod} />
      {content}
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
  infoText: {
    color: GlobalStyles.colors.error500,
    fontSize: 16,
    textAlign: "center",
    marginTop: 32,
  },
});

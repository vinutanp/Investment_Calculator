export function calculateInvestmentResults({
    Investment,
    Annual,
    expectedReturn,
    duration
  }) {
    const annualData = [];
    let investmentValue = Investment;
  
    for (let i = 0; i < duration; i++) {
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear +  Annual;
      annualData.push({
        year: i + 1, // year identifier
        interest: interestEarnedInYear, // the amount of interest earned in this year
        valueEndOfYear: investmentValue, // investment value at end of year
        annualInvestment: Annual// investment added in this year
      });
    }
  
    return annualData;
  }
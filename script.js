// Mortgage calculator function
function calculateMortgage() {
    const price = parseFloat(document.querySelector('#calculator-form input[placeholder="Property Price ($)"]').value);
    const downPayment = parseFloat(document.querySelector('#calculator-form input[placeholder="Down Payment ($)"]').value);
    const annualInterestRate = parseFloat(document.querySelector('#calculator-form input[placeholder="Annual Interest Rate (%)"]').value);
    const loanTerm = parseInt(document.querySelector('#calculator-form input[placeholder="Loan Term (years)"]').value);

    const principal = price - downPayment;
    const monthlyRate = (annualInterestRate / 100) / 12;
    const numberOfPayments = loanTerm * 12;

    const monthlyPayment = (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
                           (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    document.getElementById("mortgage-result").innerText = `Estimated Monthly Payment: $${monthlyPayment.toFixed(2)}`;
}

// Reset function for the mortgage calculator form
function resetCalculator() {
    document.querySelector('#calculator-form').reset();
    document.getElementById("mortgage-result").innerText = "";
}

// Scroll-triggered animations using IntersectionObserver
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            } else {
                entry.target.classList.remove('animate'); // Re-animate on each scroll
            }
        });
    }, { threshold: 0.1 });

    // Observing all elements with 'animate-on-scroll' class
    document.querySelectorAll('.animate-on-scroll').forEach(element => observer.observe(element));
});

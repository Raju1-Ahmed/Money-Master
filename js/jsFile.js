
document.getElementById('calculate').addEventListener('click', 
function () {
    //Food input get id and valu and  make int
     const foodInpute = document.getElementById('food-inpute');
    const foodInputeValu = foodInpute.value;
    const foodnputeINT = parseInt(foodInputeValu);
    // IncomeExpensesTotal(product+'-input');

    //Rent-input Get id and valu and  make int
    const rentInpute = document.getElementById('rent-inpute');
    const rentInputeValu = rentInpute.value;
    const rentInputeINT = parseInt(rentInputeValu);
    
    // Get id and valu and  make int
    const clithesInputt = document.getElementById('clithes-input');
    const clithesInpuValu = clithesInputt.value;
    const chilthenInputINT = parseInt(clithesInpuValu);
    const inpustSumation = chilthenInputINT + rentInputeINT + foodnputeINT;

    // Get id and innerText and  make int
    const TotalExpenses = document.getElementById('total-expenses');
    const totalExpensesvalu = TotalExpenses.innerText;
    const TotalExpensesint = parseInt(totalExpensesvalu)
    TotalExpenses.innerText = totalExpensesvalu + inpustSumation;

    
    // Income Get id value and  make int
    const incomeInput = document.getElementById('income-inpute');
    const incomevalu = incomeInput.value;
    const incomeValuINT = parseInt(incomevalu);
    const subtractionvalus = incomevalu - inpustSumation;

    //Total Balance
    const totalBalanceInpute = document.getElementById('total-Balance');
    const TotalBalancevalu = totalBalanceInpute.innerText;
    const totalBalanceinteger = parseInt(TotalBalancevalu);
    totalBalanceInpute.innerText = TotalBalancevalu + subtractionvalus;



    foodInpute.value = '';
    rentInpute.value = '';
    clithesInputt.value = '';
    //\incomeInput.value = '';
})










// Save mOney Button
document.getElementById('save-moneyButton').addEventListener('click', 
function () {
    const incomeInput = document.getElementById('income-inpute');
    const getincomevalu = incomeInput.value;
    const incomeintiger = parseInt(getincomevalu);

    const saveMoneyInput = document.getElementById('save-moneyInput');
    const saveMoneyInputvalu = saveMoneyInput.value;
    const savemopneyINT = parseInt(saveMoneyInputvalu);

    const SaveAmount = document.getElementById('Save-Amount');
    const SaveAmountinner = SaveAmount.innerText;
    const SaveAmountTotalint = parseInt(SaveAmountinner);
    const saveAmountparsents = (saveMoneyInputvalu / 100) * getincomevalu;
    SaveAmount.innerText = saveAmountparsents;

    const totalBalanceInpute = document.getElementById('total-Balance');
    const TotalBalancevalu = totalBalanceInpute.innerText;
    const totalBalanceinteger = parseInt(TotalBalancevalu);

    const remaninigBalance = document.getElementById('remaninig-balance');
    const remaninigBalanceValo = remaninigBalance.innerText;
    const TotalReaminingBalance = parseInt(remaninigBalanceValo);
    remaninigBalance.innerText = totalBalanceinteger - saveAmountparsents;


    // saveMoneyInput.value = '';
})
    // TotalExpenses.innerText = '';

    // totalBalanceInpute.innerText = '';

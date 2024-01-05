const rangeType = document.querySelector('.range');
const viewDom = document.querySelector('.views');
const checked = document.querySelector('.check');
const dollars = document.querySelector('.dollarsAll');
const btonReload = document.querySelector('.bton');

let originalPrice = 0; 

rangeType.addEventListener('input', dateType);
checked.addEventListener('change', checkedDesc);
btonReload.addEventListener('click',functionReload);

function dateType() {
    let allView = rangeType.value;
    console.log(allView)
    switch (allView) {
        case '0':
            viewDom.textContent = '0K';
            dollars.textContent = '$0.00';
            originalPrice = 0.00;
            break;
        case '20':
            viewDom.textContent = '10K'
            dollars.textContent = '$8.00';
            originalPrice = 8.00;
            break;
        case '40':
            viewDom.textContent = '50K';
            dollars.textContent = '$12.00';
            originalPrice = 12.00;
            break;
        case '60':
            viewDom.textContent = '100K';
            dollars.textContent = '$16.00';
            originalPrice = 16.00;
            break;
        case '80':
            viewDom.textContent = '500K';
            dollars.textContent = '$24.00';
            originalPrice = 24.00;
            break;
        case '100':
            viewDom.textContent = '1M';
            dollars.textContent = '$36.00';
            originalPrice = 36.00;
            break;
        default:
            break;
    }
}
function checkedDesc() {
    if (checked.checked) {
        let discountedPrice = originalPrice * 0.75;
        dollars.textContent = '$' + discountedPrice.toFixed(2);
    } else {
        dollars.textContent = '$' + originalPrice.toFixed(2);
    }
}
function functionReload(){
    location.reload();
}

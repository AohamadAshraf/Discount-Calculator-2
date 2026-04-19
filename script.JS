document.addEventListener('DOMContentLoaded', function() {
    const calcBtn = document.getElementById('calculateBtn');
    
    calcBtn.addEventListener('click', function() {
        // جلب المدخلات
        const price = parseFloat(document.getElementById('price').value);
        const discount = parseFloat(document.getElementById('discount').value);
        
        // جلب عناصر العرض
        const resultBox = document.getElementById('resultBox');
        const savedAmountText = document.getElementById('savedAmount');
        const finalPriceText = document.getElementById('finalPrice');

        // التأكد من صحة الأرقام
        if (price > 0 && discount >= 0) {
            const saved = (price * discount) / 100;
            const final = price - saved;

            // تحديث الواجهة
            savedAmountText.textContent = saved.toLocaleString() + " ج.م";
            finalPriceText.textContent = final.toLocaleString() + " ج.م";

            // إظهار النتائج
            resultBox.style.display = 'block';
        } else {
            alert("من فضلك أدخل مبالغ صحيحة");
        }
    });
});

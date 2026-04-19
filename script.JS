function calculateDiscount() {
    // جلب القيم من المدخلات
    const price = parseFloat(document.getElementById('price').value);
    const discount = parseFloat(document.getElementById('discount').value);
    const resultBox = document.getElementById('resultBox');

    // التأكد من أن المستخدم أدخل أرقاماً صحيحة
    if (isNaN(price) || isNaN(discount)) {
        alert("من فضلك أدخل أرقاماً صحيحة");
        return;
    }

    // معادلة الخصم
    const savedAmount = (price * discount) / 100;
    const finalPrice = price - savedAmount;

    // عرض النتائج في الصفحة وتنسيق الأرقام لتكون سهلة القراءة
    document.getElementById('savedAmount').innerText = savedAmount.toLocaleString() + " جنيه";
    document.getElementById('finalPrice').innerText = finalPrice.toLocaleString() + " جنيه";

    // إظهار صندوق النتائج بحركة بسيطة
    resultBox.style.display = "block";
}
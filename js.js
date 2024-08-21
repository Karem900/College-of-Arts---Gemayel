document.addEventListener('DOMContentLoaded', () => {
    const showCouponBtn = document.getElementById('showCouponBtn');
    const coupon = document.getElementById('coupon');

    showCouponBtn.addEventListener('click', () => {
        if (coupon.classList.contains('hidden')) {
            coupon.classList.remove('hidden');
        } else {
            coupon.classList.add('hidden');
        }
    });
});
window.onload = function() {
        // بعد تحميل الصفحة بالكامل، إخفاء شاشة التحميل وعرض المحتوى الرئيسي
        document.getElementById('loader').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    };

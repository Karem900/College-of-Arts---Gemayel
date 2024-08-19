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

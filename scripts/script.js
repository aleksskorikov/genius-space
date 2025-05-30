let newDate = new Date();
newDate.setDate(newDate.getDate() + 1);
    let month = [
    'січня', 'лютого', 'березня', 'квітня', 'травня', 'червня',
    'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'
    ];
    $('#current-date').text(`${newDate.getDate()} ${month[newDate.getMonth()]}`);

    function validateFormFields(form) {
    let isValid = true;

    const name = form.find('input[name="name"]');
    if (name.length && name.val()?.trim().length > 1) {
        name.removeClass('error').addClass('not_error');
    } else {
        name.removeClass('not_error').addClass('error');
        isValid = false;
    }

    const email = form.find('input[name="email"]');
    const emailVal = email.val()?.trim() || '';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.length && emailRegex.test(emailVal)) {
        email.removeClass('error').addClass('not_error');
    } else {
        email.removeClass('not_error').addClass('error');
        isValid = false;
    }

    const phone = form.find('input[name="phone"]');
    const phoneVal = phone.val()?.replace(/\s/g, '') || '';
    const phoneRegex = /^[\d\-\+\(\)\s]{10,}$/;
    if (phone.length && phoneRegex.test(phoneVal)) {
        phone.removeClass('error').addClass('not_error');
    } else {
        phone.removeClass('not_error').addClass('error');
        isValid = false;
    }

    return isValid;
    }

    $('.hero-form').on('submit', function (e) {
    e.preventDefault();
    const form = $(this);
    const valid = validateFormFields(form);
    if (valid) {
        console.log('Форма валидна, можно отправлять');
    } else {
        console.warn('Форма содержит ошибки');
        form.find('input.error').first().focus();
    }
});



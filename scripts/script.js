let newDate = new Date();
newDate.setDate(newDate.getDate() + 1);
    let month = [
    'січня', 'лютого', 'березня', 'квітня', 'травня', 'червня',
    'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'
    ];
    $('#current-date').text(`${newDate.getDate()} ${month[newDate.getMonth()]}`);
    
    $('.scroll-to-form').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.hero-form').offset().top
        }, 800); 
    });

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

const phoneInputs = document.querySelectorAll(".hero-form__input");

phoneInputs.forEach((input) => {
    const wrapper = input.closest('.form-field');
    const placeholder = wrapper.querySelector('.placeholder');
    const countryCode = wrapper.querySelector('.country-code');

    input.addEventListener('focus', () => {
        placeholder.classList.add('active');
        setTimeout(() => {
            const dropdown = document.querySelector(".iti__country-list");
            if (dropdown) {
                dropdown.scrollTop = 0;

                dropdown.querySelectorAll("li").forEach((li) => {
                const text = li.textContent?.trim();
                if (!text) {
                    li.style.display = "none";
                }
                });
            }
        }, 100);
    });

    input.addEventListener('blur', () => {
        if (!input.value) {
        placeholder.classList.remove('active');
        }

    });

    if (input.type === 'tel') {
        const iti = window.intlTelInput(input, {
        initialCountry: "ua",
        separateDialCode: true,
        geoIpLookup: function (success) {
            fetch('https://ipapi.co/json')
            .then((res) => res.json())
            .then((data) => success(data.country_code))
            .catch(() => success('us'));
        },
        utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
        autoPlaceholder: "off"
        });

        function updateCountryCode() {
        const countryData = iti.getSelectedCountryData();
        if (countryCode) {
            countryCode.textContent = `+${countryData.dialCode}`;
        }
        }

        input.addEventListener('countrychange', updateCountryCode);
        iti.promise.then(updateCountryCode).catch(updateCountryCode);
    }
});










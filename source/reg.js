document.addEventListener('DOMContentLoaded', function() {

    const registerModal = document.getElementById('registerModal');
    const loginModal = document.getElementById('loginModal');

    const buyButtons = document.querySelectorAll('.btn-primary');

    const closeButtons = document.querySelectorAll('.close');

    const showLoginLink = document.getElementById('showLogin');

    function openModal(modal) {
        if (modal) {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // блокируем прокрутку фона
        }
    }

    function closeModal(modal) {
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // возвращаем прокрутку
        }
    }

    buyButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // предотвращаем переход по ссылке #
            openModal(registerModal); // открываем окно регистрации
        });
    });

    closeButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            closeModal(registerModal);
            closeModal(loginModal);
        });
    });

    window.addEventListener('click', function(event) {
        if (event.target === registerModal) {
            closeModal(registerModal);
        }
        if (event.target === loginModal) {
            closeModal(loginModal);
        }
    });

    if (showLoginLink) {
        showLoginLink.addEventListener('click', function(event) {
            event.preventDefault();
            closeModal(registerModal);
            openModal(loginModal);
        });
    }

    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault(); // предотвращаем перезагрузку страницы

            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (!username || !email || !password) {
                alert('Пожалуйста, заполните все поля!');
                return;
            }

            console.log('Данные регистрации:', {
                username: username,
                email: email,
                password: password
            });

            alert('✅ Регистрация успешна!\n\nДобро пожаловать, ' + username + '!');

            closeModal(registerModal);

            registerForm.reset();
        });
    }

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;

            if (!email || !password) {
                alert('Пожалуйста, заполните все поля!');
                return;
            }

            console.log('Данные входа:', {
                email: email,
                password: password
            });

            alert('✅ Вход выполнен успешно!');

            closeModal(loginModal);
            loginForm.reset();
        });
    }

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal(registerModal);
            closeModal(loginModal);
        }
    });

});
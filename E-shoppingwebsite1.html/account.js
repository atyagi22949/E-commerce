 const loginBtn = document.getElementById("login-btn");
    const registerBtn = document.getElementById("register-btn");
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");

    loginBtn.addEventListener("click", () => {
      loginBtn.classList.add("active");
      registerBtn.classList.remove("active");
      loginForm.classList.add("active-form");
      registerForm.classList.remove("active-form");
    });

    registerBtn.addEventListener("click", () => {
      registerBtn.classList.add("active");
      loginBtn.classList.remove("active");
      registerForm.classList.add("active-form");
      loginForm.classList.remove("active-form");
    });


   document.getElementById('register-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const username = this.querySelector('input[placeholder="Username"]').value;
        const email = this.querySelector('input[placeholder="Email"]').value;
        const mobileno = this.querySelector('input[placeholder="mobileno"]').value;
        const password = this.querySelector('input[placeholder="Password"]').value;
        const address = this.querySelector('input[placeholder="address"]').value;
        const userData = { username, email, mobileno, password, address };
        localStorage.setItem('userInfo', JSON.stringify(userData));
        alert('Registration successful! You can now login.');
        this.reset();
    });

    // Show user info after login
    document.getElementById('login-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const username = this.querySelector('input[placeholder="Username"]').value;
        const password = this.querySelector('input[placeholder="Password"]').value;
        const userData = JSON.parse(localStorage.getItem('userInfo'));
        if (userData && userData.username === username && userData.password === password) {
            alert(
                `Welcome, ${userData.username}!\nEmail: ${userData.email}\nMobile: ${userData.mobileno}\nAddress: ${userData.address}`
            );
        } else {
            alert('Invalid username or password.');
        }
        this.reset();
    });

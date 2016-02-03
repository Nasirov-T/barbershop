

		var log = document.querySelector(".login"); <!--/нашли элемент ссылки-->
		var popup = document.querySelector(".modal_content");
		var form = popup.querySelector(".login_form");
		var login = popup.querySelector("[name=login]");
		var password = popup.querySelector("[name=password]");
		var popupclose = document.querySelector(".modal_content_close");
		var storage = localStorage.getItem("login");




		log.addEventListener("click", function(event) { <!--/сбросили функции действия ссылки по умолчинию-->
			event.preventDefault();
			console.log("клик по ссылке входа"); <!--/проверили-->
		popup.classList.add("modal_content_show");
		if (storage) {
			login.value = storage;
			password.focus();
		}
		else {
			login.focus();ччччччч
		}
		});


		popupclose.addEventListener("click", function(event) {
		event.preventDefault();
		popup.classList.remove("modal_content_show");
 
		});


		form.addEventListener("submit", function(event) {
			if(!(login.value && password.value)) {
				event.preventDefault();
				console.log("Нужно ввести логин и пароль");
				popup.classList.add("modal_error");
			}	else {
				localStorage.setItem("login", login.value);
			}

		});
		window.addEventListener("keydown", function(event) {
			if (event.keyCode == 27 ) {
				if (popup.classList.contains("modal_content_show")) {
				popup.classList.remove("modal_content_show");
			};
			};
		})




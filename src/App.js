import { useState } from "react";
import "./App.css";
import { BsEyeSlash, BsEye } from "react-icons/bs";

function App() {
	const [user, setUser] = useState("");
	const [email, setEmail] = useState("");
	const [pass1, setPass1] = useState("");
	const [pass2, setPass2] = useState("");
	const [error, setError] = useState(false);
	const [userDirty, setUserDirty] = useState(false);
	const [emailDirty, setEmailDirty] = useState(false);
	const [passDirty1, setPassDirty1] = useState(false);
	const [userError, setUserError] = useState("Поле не может быть пустым!");
	const [emailError, setEmailError] = useState("Email не может быть пустым!");
	const [passError1, setPassError1] = useState("Пароль не может быть пустым!");
	const [see, setSee] = useState(false);

	const blurHandler = (e) => {
		switch (e.target.name) {
			case "user":
				setUserDirty(true);
				break;
			case "email":
				setEmailDirty(true);
				break;
		}
	};

	const emailHandler = (e) => {
		setEmail(e.target.value);
		const re =
			/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
		if (!re.test(String(e.target.value).toLowerCase())) {
			setEmailError("Некорректный email!");
		} else {
			setEmailError("");
		}
	};

	const passHundler = () => {
		if (!pass1.trim() || !pass2.trim() || !user.trim() || !email.trim()) {
			setError(true);
		} else if (pass1 !== pass2) {
			setError(true);
		} else if (pass1 !== pass2) {
			setError("Пароли не совпадают!");
		} else {
			setError(false);
		}
	};

	return (
		<div className="App">
			<div className="sign">
				<h4>Авторизация!</h4>
				<span>:)</span>
			</div>
			<form>
				<div className="forms">
					{userDirty && userError && (
						<div style={{ color: "red" }}>{userError}</div>
					)}
					<input
						name="user"
						type="text"
						placeholder="Имя пользователя"
						onBlur={(e) => blurHandler(e)}
						onChange={(e) => setUser(e.target.value)}
						style={{border: error ? "2px solid red" : "", transition: "0.4s"}}
					/>
					{emailDirty && emailError && (
						<div style={{ color: "red" }}>{emailError}</div>
					)}
					<input
						name="email"
						value={email}
						type="email"
						placeholder="Адрес электронной почты"
						onBlur={(e) => blurHandler(e)}
						onChange={(e) => emailHandler(e)}
						style={{border: error ? "2px solid red" : "", transition: "0.4s"}}
					/>
					{passDirty1 && passError1 && (
						<div style={{ color: "red" }}>{passError1}</div>
					)}
					{see ? (
						<div style={{ position: "relative" }}>
							<input
								name="password1"
								style={{
									border: error ? "2px solid red" : "", transition: "0.4s",
									position: "relative", paddingRight: "143px"
								}}
								onChange={(e) => setPass1(e.target.value)}
								type="text"
								onBlur={(e) => blurHandler(e)}
								placeholder="Придумайте пароль"
							/>
							<span>
								<BsEye
									style={{
										color: "white",
										fontSize: "20px",
										position: "absolute",
										left: "315px",
										top: "11px",
										cursor: "pointer",
									}}
									onClick={() => setSee(false)}
								/>
							</span>
							<input
								style={{
									border: error ? "2px solid red" : "", transition: "0.4s",
									position: "relative", display: "flex", flexWrap: "wrap", marginTop: "10px", paddingRight: "143px"
								}}
								onChange={(e) => setPass2(e.target.value)}
								type="text"
								placeholder="Повторите пароль"
								onBlur={(e) => blurHandler(e)}
							/>
						</div>
					) : (
						<div style={{ position: "relative" }}>
							<input
								name="password1"
								style={{
									border: error ? "2px solid red" : "", transition: "0.4s",
									position: "relative", paddingRight: "143px"
								}}
								onChange={(e) => setPass1(e.target.value)}
								type="password"
								onBlur={(e) => blurHandler(e)}
								placeholder="Придумайте пароль"
							/>
							<span>
								<BsEyeSlash
									style={{
										color: "white",
										fontSize: "20px",
										position: "absolute",
										left: "315px",
										top: "11px",
										cursor: "pointer",
									}}
									onClick={() => setSee(true)}
								/>
							</span>
							<input
								style={{
									border: error ? "2px solid red" : "", transition: "0.4s",
									position: "relative", display: "flex", flexWrap: "wrap", marginTop: "10px", paddingRight: "143px"
								}}
								onChange={(e) => setPass2(e.target.value)}
								type="password"
								placeholder="Повторите пароль"
								onBlur={(e) => blurHandler(e)}
							/>
						</div>
					)}
				</div>
			</form>
			<button onClick={passHundler} className="submit">
				Войти
			</button>
		</div>
	);
}

export default App;

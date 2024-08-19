/* eslint-disable react/prop-types */
import { useContext, useEffect, useRef, useState } from "react";
import { Sec3Context } from "../../pages/Homepage/Sec3";
import Button from "./Button";

function Form() {
	const [inputVal, setInputVal] = useState("");
	const dialog = useRef();
	const input = useRef();

	const { setIsAnimating, setIsOpenToast, isAnimating, setModalIsOpen } =
		useContext(Sec3Context);

	useEffect(() => {
		dialog.current.showModal();
	}, []);

	function handleInput(e) {
		setInputVal(e.target.value);
	}

	useEffect(() => {
		setTimeout(() => {
			input.current.focus();
		}, 500);
	}, []);

	function handleSubmit(e) {
		e.preventDefault();
		setIsOpenToast(true);
		setIsAnimating(true);
		setModalIsOpen(false);
		setInputVal("");
	}

	return (
		<>
			<dialog
				id="my_modal_5"
				ref={dialog}
				className="modal modal-bottom sm:modal-middle text-black animate-fade-up animate-duration-200">
				<div className="modal-box max-h-96">
					<form
						action=""
						className="flex flex-col gap-5 items-center px-9 sm:px-0">
						<textarea
							placeholder="Feel free to write :)"
							spellCheck="false"
							ref={input}
							value={inputVal}
							onChange={(e) => handleInput(e)}
							className="textarea textarea-bordered border border-solid border-primary border-opacity-20 textarea-xs w-full min-h-28 max-h-40 text-xl font-normal lg:max-h-56 lg:text-2xl lg:min-h-32  p-3 text-base-content"></textarea>
						<div className="flex flex-row gap-3 items-center justify-center w-full">
							{inputVal ? (
								!isAnimating || !inputVal ? (
									<button
										type="submit"
										className="btn btn-lg  btn-wide text-xl btn-primary sm:hover:bg-[#ECECEC] sm:hover:text-primary animate-fade-up animate-duration-200 flex-1"
										onClick={(e) => handleSubmit(e)}>
										Submit
									</button>
								) : (
									""
								)
							) : (
								<p className="backdrop-blur-md backdrop-brightness-50 text-base-content max-w-sm btn  btn-lg no-animation rounded-lg animate-fade animate-duration-200 md:max-w-lg lg:max-w-3xl flex-1">
									Please write something . . .
								</p>
							)}
							<Button
								classes="btn-error text-white self-end btn-lg "
								handler={() => setModalIsOpen(false)}>
								close
							</Button>
						</div>
					</form>
				</div>
			</dialog>
		</>
	);
}

export default Form;

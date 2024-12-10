"use client";

import { useState } from "react";
import { ModalType } from "./modal/modalType";
import SignUpForm from "./modal/signupForm";
import SignInForm from "./modal/signinForm";

const ModalCore = ({ modalType }) => {
  const [showModal, setShowModal] = useState(false);
  let title = "";
  let headerButton = "";
  let formElement = <p>フォームを読み込めませんでした。</p>;
  switch (modalType) {
    case ModalType.SignIn:
      title = "ログインフォーム";
      headerButton = "Login";
      formElement = <SignInForm showModal={setShowModal}></SignInForm>;
      break;

    case ModalType.SignUp:
      title = "ユーザ登録フォーム";
      headerButton = "Sign Up";
      formElement = <SignUpForm showModal={setShowModal}></SignUpForm>;
      break;
  }
  return (
    <>
      <button
        className="text-gray-600 hover:text-blue-600"
        type="button"
        onClick={() => setShowModal(true)}
      >
        {headerButton}
      </button>
      {showModal ? (
        <>
          <div className="fixed left-0 right-0 top-0 z-50 max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-black-rgba md:inset-0">
            <div className="relative m-auto max-h-full w-full max-w-md p-4">
              <div className="relative rounded-lg bg-white shadow">
                <div className="flex items-center justify-between rounded-t border-b p-4 md:p-5">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {title}
                  </h3>
                  <button
                    type="button"
                    className="end-2.5 ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900"
                    data-modal-hide="authentication-modal"
                    onClick={() => setShowModal(false)}
                  >
                    <svg
                      className="h-3 w-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">モーダルを閉じる</span>
                  </button>
                </div>
                <div className="p-4 md:p-5">{formElement}</div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default ModalCore;

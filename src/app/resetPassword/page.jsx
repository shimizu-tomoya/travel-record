"use client";
import { useState } from "react";
import { AuthError } from "@supabase/supabase-js";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

/**
 * パスワードリセット前のメール送信用画面
 */
const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [isSend, setIsSend] = useState(false);
  const [error, setError] = (useState < AuthError) | (null > null);

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const supabase = createClientComponentClient();
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${location.origin}/resetPassword/inputPassword`,
      });
      if (error) {
        setError(error);
        throw error;
      }
      setIsSend(true);
    } catch (error) {
      console.log(error);
    }
  };

  if (error) {
    return (
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-20 text-center sm:px-6 lg:px-8 lg:pt-32">
        <p>エラーが発生しました</p>
      </div>
    );
  }

  if (isSend) {
    return (
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-20 text-center sm:px-6 lg:px-8 lg:pt-32">
        <p>メールを送信しました</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 pb-16 pt-20 text-center sm:px-6 lg:px-8 lg:pt-32">
      <p>アカウントに結びついているメールアドレスを入力してください</p>
      <form className="pt-10" onSubmit={onSubmit}>
        <input
          className="rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 md:w-2/3 lg:w-1/2"
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="メールアドレス"
        />
        <button
          className="ml-2 rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
          type="submit"
        >
          送信
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;

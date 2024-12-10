"use client";
import { useState } from "react";
import { AuthError } from "@supabase/supabase-js";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

/**
 * パスワードリセット用画面
 */
const InputPasswordForReset = () => {
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");
  const [isSend, setIsSend] = useState(false);
  const [error, setError] = (useState < AuthError) | (null > null);

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const supabase = createClientComponentClient();
      const { error } = await supabase.auth.updateUser({ password: password });
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
        <p>パスワードを更新しました</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 pb-16 pt-20 text-center sm:px-6 md:w-1/2 lg:w-1/4 lg:px-8 lg:pt-32">
      <p>新しいパスワードを入力してください</p>
      <form className="pt-10 text-left" onSubmit={onSubmit}>
        <div>
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-medium text-gray-900"
          >
            パスワード
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="pt-5">
          <label
            htmlFor="passwordConf"
            className="mb-2 block text-sm font-medium text-gray-900"
          >
            パスワード（確認）
          </label>
          <input
            type="password"
            name="passwordConf"
            id="passwordConf"
            placeholder="••••••••"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            required
            value={passwordConf}
            onChange={(e) => setPasswordConf(e.target.value)}
          />
        </div>
        <div className="mt-5 text-center">
          <button
            className="rounded-lg bg-blue-700 px-10 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
            type="submit"
          >
            送信
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputPasswordForReset;

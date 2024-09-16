"use client";
import { supabase } from "@/utils/supabase/supabase";
import { useState } from "react";

export default function SignUpForm({ showModal }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    showModal(false);
    try {
      const { error: signUpError } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          emailRedirectTo: `${location.origin}/auth/callback`,
        },
      });
      if (signUpError) {
        throw signUpError;
      }
      alert("登録完了メールを確認してください");
    } catch (error) {
      alert("エラーが発生しました");
    }
  };

  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-gray-900"
        >
          メールアドレス
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          placeholder="name@company.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
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
      <div>
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
      <div>
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          サインアップ
        </button>
      </div>
    </form>
  );
}

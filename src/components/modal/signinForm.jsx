import Link from "next/link";

export default function SignInForm({ showModal }) {
  return (
    <form action="/auth/login" method="post" className="space-y-4">
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
        />
      </div>
      <div className="text-right">
        <Link
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
          href={`${location.origin}/resetPassword`}
          onClick={() => showModal(false)}
        >
          パスワードを忘れた場合
        </Link>
      </div>
      <div>
        <button className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300">
          サインイン
        </button>
      </div>
    </form>
  );
}

"use client";

import { api } from "@/trpc/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Login = {
  id: string;
  password: string;
};

export default function AdminLogin() {
  const [form, setForm] = useState<Login>({ id: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter(); 

  const adminLogin = api.user.login.useMutation({
    onSuccess: (data) => {
      if (data && data.id) {
        localStorage.setItem("id", data.id);
        router.push("/");
        setErrorMessage("");
      } else {
        setErrorMessage("아이디와 비밀번호를 다시 확인해주시기 바랍니다.");
      }
    },
    onError: () => {
      setErrorMessage("아이디와 비밀번호를 다시 확인해주시기 바랍니다.");
    },
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const loginData: Login = {
      id: form.id,
      password: form.password,
    };

    adminLogin.mutate(loginData);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-center mb-6">관리자 로그인</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium mb-1">
              로그인
            </label>
            <input
              id="username"
              type="text"
              value={form.id}
              onChange={(e) => setForm({ ...form, id: e.target.value })}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
              placeholder="아이디를 입력하세요"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              패스워드
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                placeholder="비밀번호를 입력하세요"
              />
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-600"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? "숨기기" : "보기"}
              </button>
            </div>
          </div>

          {errorMessage && (
            <p className="text-red-500 text-sm text-center font-medium">
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          >
            로그인
          </button>
        </form>
      </div>
    </div>
  );
}

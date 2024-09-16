import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

//Submitが行われるとこちらの処理に飛ぶ
export async function POST(request) {
  const requestUrl = new URL(request.url);
  const formData = await request.formData();
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));
  const supabase = createRouteHandlerClient({ cookies });

  await supabase.auth.signInWithPassword({
    email,
    password,
  });

  return NextResponse.redirect(requestUrl.origin + "/profile", {
    status: 301,
  });
}

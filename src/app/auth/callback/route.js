import { NextResponse } from "next/server";

//メールアドレス上に載っているURLにアクセスすることで発火
export async function GET(request) {
  const requestUrl = new URL(request.url);

  console.log(requestUrl.origin);
  return NextResponse.redirect(requestUrl.origin + "/");
}

import type {NextRequest} from "next/server";

import {revalidatePath, revalidateTag} from "next/cache";

export async function GET(request: NextRequest) {
  const path = request.nextUrl.searchParams.get("path") || "/";

  revalidatePath(path);
  revalidateTag("restaurants");

  return Response.json({success: true});
}

import { type RequestHandler } from "@builder.io/qwik-city";
import { type PlatformCloudflarePages } from "@builder.io/qwik-city/middleware/cloudflare-pages";

export const onGet: RequestHandler<PlatformCloudflarePages> = async ({
  platform,
  json,
}) => {
  json(200, {
    GOOGLE_APP_SCRIPT_URL_CONTACT_FORM:
      platform.env["GOOGLE_APP_SCRIPT_URL_CONTACT_FORM"],
  });
};

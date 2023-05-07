import { z } from "zod";

import openai from "~/utils/openai";
import { photoTaggerRouter } from "./routers/photoTagger";
import { createTRPCRouter, publicProcedure } from "./trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string().nullish() }))
    .query(async ({ input }) => {
      const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Hello world",
      });

      console.log("completion", completion.data.choices);

      return completion.data.choices[0]?.text;
    }),
  photoTagger: photoTaggerRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

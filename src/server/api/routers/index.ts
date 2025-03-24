import { t } from "../trpc"
import { createFeature } from "./features/createFeature"
export const router = t.router({
    features: t.router({
        create: createFeature,
    }),
})

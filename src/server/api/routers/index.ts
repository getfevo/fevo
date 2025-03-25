import { t } from "../trpc"
import { createFeature } from "./features/createFeature"
import { getFeatures } from "./features/getFeatures"
import { updateStatus } from "./features/updateStatus"
import { updateVotes } from "./features/updateVotes"


export const router = t.router({
    features: t.router({
        create: createFeature,
        get: getFeatures,
        updateVotes: updateVotes,
        updateStatus: updateStatus,
    }),
})

ALTER TABLE "feature_request" DROP CONSTRAINT "feature_request_project_id_project_id_fk";
--> statement-breakpoint
ALTER TABLE "feature_request" DROP COLUMN "project_id";